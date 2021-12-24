import venom from "../../public/img/venom.png";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
const index = ({ meetup }) => {
  return (
    <MeetupDetails
      description={meetup.description}
      img={venom}
      title={meetup.title}
      address={meetup.address}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.q1yh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db("test");
  const collection = db.collection("devices");
  const meetupsIds = await collection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    paths: meetupsIds.map((met) => ({ params: { id: met._id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.id;
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.q1yh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db("test");
  const collection = db.collection("devices");
  const meetup = await collection.findOne({ _id: ObjectId(meetupId) });
  client.close();
  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
      },
    },
  };
};
export default index;
