import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";

const index = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="practice with next js" />
      </Head>
      <MeetupList meetups={meetups} />;
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.q1yh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db("test");
  const collection = db.collection("devices");
  const meetups = await collection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((met) => ({
        title: met.title,
        address: met.address,
        image: met.image,
        id: met._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default index;
