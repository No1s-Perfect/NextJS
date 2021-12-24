import Image from "next/image";

import clas from "./MeetupDetail.module.css";

const MeetupDetails = ({ img, title, address, description }) => {
  return (
    <section className={clas.detail}>
      <Image src={img} alt="fuck u kid" width="100" height="100" />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetails;
