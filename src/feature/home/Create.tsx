import React, { useRef, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";

export default function Create() {
  const [image, setImage] = useState<string>("");
  const imageRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);
    }
  };

  const handlePost = () => {
    setImage("");
    if (textRef.current) {
      textRef.current.value = "";
    }
  };

  return (
    <>
      <div className="max-w-[500px] w-full shadow rounded-md px-3 py-2 bg-white snap-center flex flex-col gap-3">
        <header className="flex gap-3">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src="https://images.unsplash.com/profile-1675818354956-11c4aac9c130image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt=""
          />
          <textarea
            ref={textRef}
            placeholder="Type something"
            className="w-full outline-none"
            rows={4}
          />
          <label
            htmlFor="file-upload"
            className="text-2xl self-center cursor-pointer"
          >
            <RiImageAddLine />
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            style={{ display: "none" }}
            ref={imageRef}
            onChange={handleImageChange}
          />
        </header>
        {image && image !== "" && (
          <img
            className="w-full aspect-square object-cover"
            src={image}
            alt=""
            onClick={() => {
              imageRef.current?.click();
            }}
          />
        )}
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </>
  );
}
