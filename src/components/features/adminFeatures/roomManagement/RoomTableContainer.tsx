import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";
import { useGetAllRoomsQuery } from "../../../../redux/features/admin/roomManagement.api";
import DeleteRoomModal from "./DeleteRoomModal";
import UpdateRoomModal from "./UpdateRoomModal";

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
  const { data: roomData, isLoading } = useGetAllRoomsQuery(undefined);
  // console.log(roomData);
  return (
    <section>
      <div
        className={`${
          isLoading ? "h-96 w-full overflow-hidden" : ""
        } overflow-x-scroll bg-white shadow-sm rounded-lg w-full border`}
      >
        <table className="table-auto w-full text-nowrap">
          <thead>
            <tr>
              {tableHerders?.map((item, idx) => (
                <th className="p-5 text-left w-fit" key={idx}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>

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
                <td className="p-5 flex items-center gap-2">
                  <UpdateRoomModal id={item._id} />
                  <DeleteRoomModal id={item._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isLoading && (
          <div className="w-full h-full flex justify-center items-center">
            <LoadingAnimation size="size-12" />
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomTableContainer;
