import Image from "next/image";
const MeetupDetails = ({img, title, address, description}) => {
  return (
    <>
      <Image src={img} alt="fuck u kid" width="100" height="100" />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </>
  );
};

export default MeetupDetails;
