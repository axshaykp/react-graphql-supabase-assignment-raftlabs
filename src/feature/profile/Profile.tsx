import { FaUserCircle } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import UploadFile from "./UploadFile";
import { useState } from "react";
export default function Profile() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="p-3">
      <div className="w-full bg-white rounded shadow p-3 flex gap-3">
        <div className="w-[100px] h-[100px] text-8xl text-blue-500 relative">
          {imgLoaded ? (
            <FaUserCircle />
          ) : (
            <>
              <img
                className="object-cover w-[100px] h-[100px] rounded-full"
                src={`https://mmepemlhgltvvdasyhjl.supabase.co/storage/v1/object/public/photos/${"b8978eec-87a2-4712-bc40-e7d1f51b7fed"}`}
                alt=""
                onError={() => setImgLoaded(false)}
              />
            </>
          )}
          <div className="text-xl bg-black rounded-full flex items-center justify-center p-2 text-white absolute right-[10px] bottom-[10px]">
            <UploadFile>
              <BiSolidImageAdd />
            </UploadFile>
          </div>
        </div>
        <div>
          <p>Name</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}
