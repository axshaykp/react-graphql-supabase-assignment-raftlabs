import Search from "../home/Search";
import User from "../home/User";
import { TbPhotoSquareRounded } from "react-icons/tb";

export default function NavBar() {
  return (
    <>
      <div className="shadow-xl bg-white">
        <div className="container mx-auto px-2 py-3 grid grid-cols-3 items-center">
          <a className="flex items-center gap-3 font-black">
            <div className="text-2xl text-blue-600">
              <TbPhotoSquareRounded />
            </div>
            FotoGram
          </a>
          <Search />
          <User />
        </div>
      </div>
    </>
  );
}
