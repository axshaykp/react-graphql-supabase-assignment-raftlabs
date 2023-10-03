import { useState } from "react";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";

export default function SuggestedUser() {
  const [followed, setFollowed] = useState(false);
  return (
    <>
      <div className="bg-white hover:bg-blue-600 flex gap-2 items-center justify-between text-black hover:text-white w-full px-3 py-3 rounded-md group/suggested">
        <div className="flex gap-2">
          <img
            className="w-[50px] h-[50px] rounded-full object-cover"
            src="https://images.unsplash.com/profile-1675818354956-11c4aac9c130image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt=""
          />
          <div className="flex flex-col justify-around">
            <p className="text-sm font-semibold">Name</p>
            <p className="text-xs">Suggested for you</p>
          </div>
        </div>
        <div>
          {!followed ? (
            <>
              <div
                className="cursor-pointer text-2xl text-black group-hover/suggested:text-blue-600 group-hover/suggested:bg-white rounded-full p-3"
                onClick={() => setFollowed(true)}
              >
                <SlUserFollow />
              </div>
            </>
          ) : (
            <>
              <div
                className="cursor-pointer text-2xl text-black group-hover/suggested:text-green-600 group-hover/suggested:bg-white rounded-full p-3"
                onClick={() => setFollowed(false)}
              >
                <SlUserFollowing />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
