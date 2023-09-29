import { useDispatch } from "react-redux";
import { showFeed, showProfile, showCreate } from "./viewSlice";
import { BiHomeHeart } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

export default function Nav() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="shadow-md bg-white p-3 flex gap-12 justify-center text-2xl border-t-2 self-end">
        <div className="cursor-pointer" onClick={() => dispatch(showFeed())}>
          <BiHomeHeart />
        </div>
        <div className="cursor-pointer" onClick={() => dispatch(showProfile())}>
          <BiUserCircle />
        </div>
        <div className="cursor-pointer" onClick={() => dispatch(showCreate())}>
          <BiPlus />
        </div>
      </div>
    </>
  );
}
