import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);
  const people = [
    { name: "Anu" },
    { name: "Akshay" },
    { name: "Anil" },
    { name: "Niyas" },
    { name: "Azad" },
  ];
  return (
    <>
      <div className="relative hidden lg:block">
        <input
          className="pl-8 py-1 border-[1px] rounded-lg w-full"
          type="text"
          name="search"
          id="search"
          ref={searchRef}
          defaultValue={""}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="absolute left-[5px] top-0 bottom-0 flex items-center">
          <FiSearch />
        </div>
        <ul
          className={`absolute top-[50px] border-[1px] left-0 right-0 bg-white rounded-lg shadow-md p-2 z-10 ${
            !search || search.length === 0 ? "hidden" : null
          }`}
        >
          {people
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person, index) => {
              return (
                <li key={index}>
                  <div className="flex gap-3 items-center py-2 px-3 hover:bg-blue-500 hover:text-white rounded-lg hover:shadow-md">
                    <img
                      className="w-[30px] h-[30px] rounded-full"
                      src="https://images.unsplash.com/profile-1675818354956-11c4aac9c130image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                      alt=""
                    />
                    <p>{person.name}</p>
                  </div>
                </li>
              );
            })}
          {people.filter((person) =>
            person.name.toLowerCase().includes(search.toLowerCase())
          ).length === 0 && (
            <>
              <li>No user found</li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
