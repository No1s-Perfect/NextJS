import Link from "next/link";
import MeetupList from '../components/meetups/MeetupList'
const DUMMY = [
    {
        id: '1',
        title: 'Meetup in React',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngplay.com%2Fimage%2F393995&psig=AOvVaw2U0GX1uLiC2JDNLsCzT2Dg&ust=1640147393362000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjpuaiH9PQCFQAAAAAdAAAAABAD',
        address: 'New York',
        description: 'Ths is a first meetup'
    },
    {
        id: '2',
        title: 'Meetup  2 in React',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngplay.com%2Fimage%2F393995&psig=AOvVaw2U0GX1uLiC2JDNLsCzT2Dg&ust=1640147393362000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjpuaiH9PQCFQAAAAAdAAAAABAD',
        address: 'New York 2',
        description: 'Ths is a first meetup 2'
    }
]
const index = () => {
  return (
    
        <MeetupList meetups={DUMMY}/>
    
  );
};

export default index;
