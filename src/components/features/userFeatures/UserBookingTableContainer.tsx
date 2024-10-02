import EmptySolid from "../../../assets/icons/EmptySolid";
import LoadingAnimation from "../../../assets/icons/LoadingAnimation";
import { useGetMyBookingQuery } from "../../../redux/features/user/bookingUser.api";

const tableHerders = [
  "No",
  "Room Name",
  "Date",
  "Start Time",
  "End Time",
  "Status",
];

const UserBookingTableContainer = () => {
  const { data: myBookings, isLoading } = useGetMyBookingQuery(undefined);
  console.log(myBookings);
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
            {myBookings?.data?.map((item, idx) => (
              <tr
                key={item._id}
                className={`${idx % 2 !== 0 ? "" : "bg-accent/10"}`}
              >
                <td className="p-5">{idx + 1}</td>
                <td className="p-5">{item.room.name}</td>
                <td className="p-5">{item.date}</td>
                <td className="p-5">{item.slots[0].startTime}</td>
                <td className="p-5">{item.slots.slice(-1)[0].endTime}</td>
                <td className="p-5">
                  <span
                    className={`capitalize py-1 px-2 text-sm font-semibold rounded-md ${
                      item.isConfirmed === "canceled"
                        ? " bg-red-500/30 border border-red-500"
                        : item.isConfirmed === "confirmed"
                        ? " bg-green-500/30 border border-green-500"
                        : " bg-blue-500/30 border border-blue-500"
                    }`}
                  >
                    {item.isConfirmed}
                  </span>
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
        {!myBookings?.data && (
          <div className="h-96 w-full flex justify-center items-center">
            <div className="text-center text-accent/50">
              <EmptySolid />
              <p>No Data</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserBookingTableContainer;
