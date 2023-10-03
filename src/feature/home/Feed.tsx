import { useSelector } from "react-redux";
import Post from "./Post";
import SuggestedUser from "./SuggestedUser";
import Tabs from "./Tabs";
import { RootState } from "../../app/store";
import Create from "./Create";

export default function Feed() {
  const activeFeed = useSelector((state: RootState) => state.feed.value);
  const posts = [
    {
      avatar:
        "https://images.unsplash.com/profile-1675818354956-11c4aac9c130image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      name: "Anil",
      following: true,
      text: "This an random image from the internet",
      image:
        "https://unsplash.com/photos/gnPlXDhZTp4/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2OTYzMTA4NDh8&force=true&w=640",
      likes: 30,
      comments: 200,
      liked: false,
    },
    {
      avatar:
        "https://images.unsplash.com/profile-1675818354956-11c4aac9c130image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      name: "Anil",
      following: true,
      text: "This an random image from the internet",
      image:
        "https://unsplash.com/photos/YVjCJ4onrtY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk2MzIwNDE1fA&force=true&w=640",
      likes: 30,
      comments: 200,
      liked: false,
    },
    {
      avatar:
        "https://images.unsplash.com/profile-1675818354956-11c4aac9c130image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      name: "Anil",
      following: true,
      text: "This an random image from the internet",
      image:
        "https://unsplash.com/photos/vNOfu8N7u3s/download?force=true&w=640",
      likes: 30,
      comments: 200,
      liked: false,
    },
    {
      avatar:
        "https://images.unsplash.com/profile-1675818354956-11c4aac9c130image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      name: "Anil",
      following: true,
      text: "This an random image from the internet",
      image:
        "https://unsplash.com/photos/-xTPBVyhGms/download?force=true&w=640",
      likes: 30,
      comments: 200,
      liked: false,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,_300px)_1fr] xl:grid-cols-[minmax(200px,_300px)_1fr_minmax(200px,_500px)] container mx-auto">
        <div className="px-3 py-[40px] hidden md:block">
          <Tabs />
        </div>
        {activeFeed === "home" && (
          <>
            <div className="px-3 py-[40px] flex flex-col items-center gap-3 overflow-y-scroll scroll-smooth snap-mandatory snap-y h-[calc(100vh_-_58px)]">
              <Create />
              {posts.map((post, index) => {
                return (
                  <Post
                    key={index}
                    avatar={post.avatar}
                    name={post.name}
                    following={post.following}
                    text={post.text}
                    image={post.image}
                    likes={post.likes}
                    isLiked={post.liked}
                    comments={post.comments}
                  />
                );
              })}
            </div>
            <div className="mx-3 my-[40px] hidden xl:flex flex-col items-center overflow-y-scroll scroll-smooth h-max max-h-[calc(100vh_-_58px)] bg-white rounded-md">
              <SuggestedUser />
              <SuggestedUser />
              <SuggestedUser />
            </div>
          </>
        )}
      </div>
    </>
  );
}
