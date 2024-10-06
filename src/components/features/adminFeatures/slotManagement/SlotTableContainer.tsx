import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";
import { useGetAllSlotsQuery } from "../../../../redux/features/admin/slotManagement.api";
import DeleteSlotModal from "./DeleteSlotModal";
import UpdateSlotModal from "./UpdateSlotModal";

const tableHerders = [
  "No",
  "Room Name",
  "Room No",
  "Date",
  "Start Time",
  "End Time",
  "Actions",
];

const SlotTableContainer = () => {
  const { data: slotData, isLoading } = useGetAllSlotsQuery(undefined);
  // console.log(slotData);
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
            {slotData?.data?.map((item, idx) => (
              <tr
                key={item._id}
                className={`${idx % 2 !== 0 ? "" : "bg-accent/10"}`}
              >
                <td className="p-5">{idx + 1}</td>
                <td className="p-5">{item.room.name}</td>
                <td className="p-5">{item.room.roomNo}</td>
                <td className="p-5">{item.date}</td>
                <td className="p-5">{item.startTime}</td>
                <td className="p-5">{item.endTime}</td>
                <td className="p-5 flex items-center gap-2">
                  <UpdateSlotModal {...item} />
                  <DeleteSlotModal {...item} />
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

export default SlotTableContainer;
