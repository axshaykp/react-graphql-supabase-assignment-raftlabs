import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleStory } from "./storySlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Story() {
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
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black overflow-hidden">
        <div
          className="absolute top-[10px] right-[10px] text-2xl z-10 text-white cursor-pointer max-w-[400px]"
          onClick={() => dispatch(toggleStory())}
        >
          <AiOutlineClose />
        </div>
        <div className="max-w-[400px] w-full mx-auto">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={"cube"}
            grabCursor={true}
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img className="h-screen object-cover" src={item.imageUrl} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
