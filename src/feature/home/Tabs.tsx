import { useDispatch, useSelector } from "react-redux";
import { setHome, setProfile, setSettings } from "../../app/feedSlice";
import { RootState } from "../../app/store";

export default function Tabs() {
  const active = useSelector((state: RootState) => state.feed.value);
  const dispatch = useDispatch();
  return (
    <>
      <ul className="p-3 w-full bg-white rounded-md flex flex-col gap-1">
        <li>
          <div
            className={`${
              active === "home" && "bg-blue-600 text-white"
            } px-3 py-2 rounded-md cursor-pointer`}
            onClick={() => dispatch(setHome())}
          >
            Home
          </div>
        </li>
        <li>
          <div
            className={`${
              active === "profile" && "bg-blue-600 text-white"
            } px-3 py-2 rounded-md cursor-pointer`}
            onClick={() => dispatch(setProfile())}
          >
            Profile
          </div>
        </li>
        <li>
          <div
            className={`${
              active === "settings" && "bg-blue-600 text-white"
            } px-3 py-2 rounded-md cursor-pointer`}
            onClick={() => dispatch(setSettings())}
          >
            Settings
          </div>
        </li>
      </ul>
    </>
  );
}
