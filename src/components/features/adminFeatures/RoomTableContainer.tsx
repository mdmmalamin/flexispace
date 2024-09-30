// import { useState } from "react";
import LoadingAnimation from "../../../assets/icons/LoadingAnimation";
import { useGetAllRoomsQuery } from "../../../redux/features/admin/roomManagement.api";
import Title from "../../ui/Title";
// import { TQueryParam } from "../../../types/global";

const tableHerders = [
  "No",
  "Room Name",
  "Room No",
  "Floor No",
  "Capacity",
  "Price Per Slot",
  "Actions",
];

const RoomTableContainer = () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: roomData, isLoading } = useGetAllRoomsQuery(undefined);
  console.log(roomData);
  return (
    <section>
      <Title className="!text-left my-2">Room Table</Title>

      <div
        className={`${
          isLoading ? "min-h-96 w-fit" : ""
        } overflow-x-scroll bg-white shadow-sm rounded-lg w-fit border`}
      >
        <table className="table-auto w-full max-w-screen-lg text-nowrap">
          <thead>
            <tr>
              {tableHerders?.map((item, idx) => (
                <th className="p-5 text-left" key={idx}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          {isLoading ? (
            <tbody className="flex justify-center items-center w-full h-full mx-auto bg-black">
              <LoadingAnimation />
            </tbody>
          ) : (
            <tbody>
              {roomData?.data?.map((item, idx) => (
                <tr
                  key={item._id}
                  className={`${idx % 2 !== 0 ? "" : "bg-accent/10"}`}
                >
                  <td className="p-5">{idx + 1}</td>
                  <td className="p-5">{item.name}</td>
                  <td className="p-5">{item.roomNo}</td>
                  <td className="p-5">{item.floorNo}</td>
                  <td className="p-5">{item.capacity}</td>
                  <td className="p-5">{item.pricePerSlot}</td>
                  <td className="p-5">Actions</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </section>
  );
};

export default RoomTableContainer;
