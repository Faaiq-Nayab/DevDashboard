import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="relative hidden sm:block">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
  w-36
  md:w-44
  lg:w-52
  rounded-lg
  border
  border-gray-300
  bg-white
  py-1.5
  pl-10
  pr-3
  text-sm
  outline-none
  transition
  focus:border-blue-500
  focus:ring-2
  focus:ring-blue-200
"
      />
    </div>
  );
}

export default Searchbar;