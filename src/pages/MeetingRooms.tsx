import { useState } from "react";
import FilterContainer from "../components/features/meetingRooms/FilterContainer";
import RoomItemsContainer from "../components/features/meetingRooms/RoomItemsContainer";
import SearchContainer from "../components/features/meetingRooms/SearchContainer";
import SortContainer from "../components/features/meetingRooms/SortContainer";
import Container from "../components/ui/Container";

const MeetingRooms = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const filter = {
    search,
    price,
    capacity,
  };

  // console.log(filter);
  return (
    <Container className="my-6 md:my-16">
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <SearchContainer setSearch={setSearch} />

          <FilterContainer
            price={price}
            setPrice={setPrice}
            capacity={capacity}
            setCapacity={setCapacity}
          />

          <SortContainer price={price} setPrice={setPrice} />
        </div>
        <div className="md:col-span-9">
          <RoomItemsContainer />
        </div>
      </div>
    </Container>
  );
};

export default MeetingRooms;
