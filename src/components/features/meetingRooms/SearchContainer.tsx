
import { FieldValues } from "react-hook-form";
import Search from "../../form/Search";
import SearchOutline from "../../../assets/icons/SearchOutline";

type TStateProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContainer = ({ setSearch }: TStateProps) => {
  const handleSearching = (data: FieldValues) => {
    setTimeout(() => {
      // console.log(data.target.value);
      setSearch(data.target.value);
    }, 1200);
  };
  return (
    <div className="flex items-center gap-4 relative">
      <Search onChange={handleSearching} />
      <button type="submit" className="absolute left-1 top-1/5">
        <SearchOutline size="size-8" />
      </button>
    </div>
  );
};

export default SearchContainer;
