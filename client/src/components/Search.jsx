import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../zustand/conversation";
import useGetConversation from "../Hooks/useGetConversation";
import { toast } from "react-hot-toast";
const Search = () => {
  const [search, setSearch] = useState("");
  const { setconversition } = useConversation();
  const { conversation } = useGetConversation();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be over 3 words");
    }
    const Conversation = conversation.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (Conversation) {
      console.log(Conversation);
      setconversition(Conversation);
      setSearch("");
    } else {
      toast.error(`No User Found For ${search}`);
    }
  };
  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className=" flex items-center gap-2"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
      />
      <button className=" btn btn-circle bg-sky-500 text-white">
        {" "}
        <FaSearch className=" h-6 w-6 outline-none" />
      </button>
    </form>
  );
};

export default Search;
