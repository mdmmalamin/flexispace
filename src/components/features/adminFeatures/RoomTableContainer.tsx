import { useState } from "react";
import { useGetAllRoomsQuery } from "../../../redux/features/admin/roomManagement.api";
import Title from "../../ui/Title";
import { TQueryParam } from "../../../types/global";

const tableHerders = [
  "Room Name",
  "Room No",
  "Floor No",
  "Capacity",
  "Price Per Slot",
  "Actions",
];

const RoomTableContainer = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data, isLoading, isFetching } = useGetAllRoomsQuery(params);
  console.log(data)
  return (
    <section>
      <Title>Room Table</Title>

      <div className="">
        <ul className="flex flex-nowrap overflow-x-scroll justify-center">
          {tableHerders?.map((item, idx) => (
            <>
              <li className="min-w-56 border py-2 text-nowrap" key={idx}>
                {item}
              </li>

              {/* <li className="min-w-56 border py-2 text-nowrap" key={idx}>
                
                {

                }
              </li> */}
            </>
          ))}
        </ul>

        {/* <ul className="flex flex-nowrap overflow-x-scroll">
          {tableHerders?.map((item, idx) => (
            <li className="min-w-56 border py-2 text-nowrap" key={idx}>
              {item}
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

export default RoomTableContainer;
