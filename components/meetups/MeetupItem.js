import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import venom from '../../public/img/venom.png';
import Image from "next/image"
import {useRouter} from 'next/router'
const MeetupItem = ({id, image, title, address }) => {
  const router = useRouter()
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={venom} alt={title} width="100" height="100" />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>router.push(`/${id}`)}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
