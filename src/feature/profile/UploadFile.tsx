import { useRef, ChangeEvent, ReactNode } from "react";
import { supabase } from "../../lib/supabaseClient";
import { v4 as uuid } from "uuid";
import { useMutation } from "@apollo/client";
import { GET_PROFILE, SET_AVATAR } from "../../lib/api";

export default function UploadFile({
  children,
  email,
}: {
  children: ReactNode;
  email: string | undefined;
}) {
  const [setAvatar] = useMutation(SET_AVATAR, {
    refetchQueries: [GET_PROFILE, "GetProfile"],
  });
  const fileRef = useRef<HTMLInputElement | null>(null);

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
      console.log("upload data",data);
      setAvatar({
        variables: {
          email,
          avatar: `https://mmepemlhgltvvdasyhjl.supabase.co/storage/v1/object/public/photos/${data.path}`,
        },
      });
    }
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    getFileUrl(selectedFile);
  };

  return (
    <>
      <div>
        <input hidden ref={fileRef} type="file" onChange={handleFileChange} />
        <button
          className="cursor-pointer"
          onClick={() => fileRef.current?.click()}
        >
          {children}
        </button>
      </div>
    </>
  );
}
