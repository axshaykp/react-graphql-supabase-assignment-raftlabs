import { useDispatch } from "react-redux";
import { toggleStory } from "./storySlice";

export default function Feed() {
  const dispatch = useDispatch();

  interface FeedData {
    imageUrl: string;
    user: string;
    likes: number;
  }

  const data: FeedData[] = [
    { imageUrl: "/images/cover.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test2.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/cover.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test2.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/cover.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test2.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/cover.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test2.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/cover.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test2.jpg", user: "name", likes: 10 },
    { imageUrl: "/images/test.jpg", user: "name", likes: 10 },
  ];

  return (
    <>
      <div
        className="flex gap-[10px] flex-wrap p-[10px]"
        onClick={() => dispatch(toggleStory())}
      >
        {data.map((item, index) => {
          return (
            <img
              key={index}
              className="w-[calc(50%_-_5px)] rounded-lg object-cover max-h-[250px] cursor-pointer"
              src={item.imageUrl}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
}
