import { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import Like from "./Like";
import Loading from "../elements/Loading";

interface PostTypes {
  avatar: string;
  following: boolean;
  name: string;
  text: string;
  image: string;
  likes: number;
  isLiked: boolean;
  comments: number;
}

export default function Post({
  avatar,
  following,
  name,
  text,
  image,
  likes,
  isLiked,
  comments,
}: PostTypes) {
  const [showMenu, setShowMenu] = useState(false);
  const [liked, setLiked] = useState(isLiked);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <article className="max-w-[500px] w-full shadow rounded-md px-3 py-2 bg-white snap-center">
        <header className="grid grid-cols-2">
          <div className="flex gap-2 items-center w-max justify-self-start cursor-pointer">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src={avatar}
              alt=""
            />
            <div>
              <p className="text">{name}</p>
              {following && <p className="text-xs text-gray-400">Following</p>}
            </div>
          </div>
          <div className="flex gap-2 items-center w-max justify-self-end relative cursor-pointer">
            <div
              className="cursor-pointer relative"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <SlOptions />
              <ul
                className={`absolute top-[25px] right-0 bg-blue-500 text-white px-3 py-2 drop-shadow-md rounded-md w-max z-10 ${
                  !showMenu && "hidden"
                }`}
              >
                <li className="hover:bg-white hover:text-black text-white px-3 py-2 rounded-md">
                  <div>Unfollow User</div>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="py-2 px-2 flex flex-col gap-2 relative">
          {text && (
            <p className="text-sm">This an random image from the internet</p>
          )}
          <img
            className="w-full rounded-lg aspect-square object-cover cursor-pointer z-[1]"
            src={image}
            alt=""
            onDoubleClick={() => setLiked(true)}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && <Loading />}
          {liked && <Like show={liked} />}
        </div>
        <footer className="px-2 py-3 flex gap-4">
          <div className="flex gap-1 items-center">
            {liked ? (
              <div
                className="text-red-600 cursor-pointer text-lg"
                onClick={() => setLiked(false)}
              >
                <AiFillHeart />
              </div>
            ) : (
              <div
                className="cursor-pointer text-lg"
                onClick={() => setLiked(true)}
              >
                <AiOutlineHeart />
              </div>
            )}
            <div className="text-sm">{likes}</div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="text-black cursor-pointer text-lg">
              <AiOutlineComment />
            </div>
            <div className="text-sm">{comments}</div>
          </div>
        </footer>
      </article>
    </>
  );
}
