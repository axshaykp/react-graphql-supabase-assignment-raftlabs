import React, { useRef, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../lib/api";

export default function Create() {
  const avatar = useSelector((state: RootState) => state.auth.avatar);
  const email = useSelector((state: RootState) => state.auth.email);
  const [image, setImage] = useState<string>("");
  const imageRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const [setPost] = useMutation(CREATE_POST, {
    refetchQueries: [GET_PROFILE, "GetProfile"],
  });

  async function getFileUrl(file: File | null) {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const { data, error } = await supabase.storage
      .from("photos")
      .upload(uuid(), file);

    if (error) {
      console.error(error);
    } else {
      console.log("upload data", data);
      setPost({
        variables: {
          email,
          avatar: `https://mmepemlhgltvvdasyhjl.supabase.co/storage/v1/object/public/photos/${data.path}`,
        },
      });
    }
  }

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
            className="w-[50px] h-[50px] rounded-full object-cover"
            src={avatar}
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
