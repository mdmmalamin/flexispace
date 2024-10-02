import { useGetAllPublicRoomsQuery } from "../../../redux/features/public/roomPublic.api";
import MeetingRoomCard from "../../cards/MeetingRoomCard";

// const roomsData = [
//   {
//     image:
//       "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
//     name: "Conference Room",
//     capacity: 20,
//     pricePerSlot: 100,
//   },
//   {
//     image:
//       "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
//     name: "Conference Room",
//     capacity: 20,
//     pricePerSlot: 100,
//   },
//   {
//     image:
//       "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
//     name: "Conference Room",
//     capacity: 20,
//     pricePerSlot: 100,
//   },
//   {
//     image:
//       "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
//     name: "Conference Room",
//     capacity: 20,
//     pricePerSlot: 100,
//   },
//   {
//     image:
//       "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
//     name: "Conference Room",
//     capacity: 20,
//     pricePerSlot: 100,
//   },
//   {
//     image:
//       "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
//     name: "Conference Room",
//     capacity: 20,
//     pricePerSlot: 100,
//   },
//   {
//     image:
//       "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
//     name: "Conference Room",
//     capacity: 20,
//     pricePerSlot: 100,
//   },
//   {
//     image:
//       "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
//     name: "Conference Room",
//     capacity: 20,
//     pricePerSlot: 100,
//   },
// ];

const RoomItemsContainer = () => {
  const { data: roomData } = useGetAllPublicRoomsQuery(undefined);
  return (
    <div className="space-y-4">
      {roomData?.data?.map((item, idx) => (
        <MeetingRoomCard {...item} key={idx} />
      ))}
    </div>
  );
};

export default RoomItemsContainer;
