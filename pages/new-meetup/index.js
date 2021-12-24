import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";
import {useRouter} from 'next/router'
import { route } from "next/dist/server/router";

const NewMeetupPage = () => {
  const router = useRouter()
  const addMeetup = async (enteredMeetupData) => {
   
    const res = await axios.post("/api/new-meetup", enteredMeetupData);
    console.log(res.data, "fuck u");

    router.push(`/`)
  };

  return <NewMeetupForm onAdd={addMeetup} />;
};

export default NewMeetupPage;
