import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <form className=" flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
      />
      <div className=" btn btn-circle bg-sky-500 text-white">
        {" "}
        <FaSearch className=" h-6 w-6 outline-none" />
      </div>
    </form>
  );
};

export default Search;
