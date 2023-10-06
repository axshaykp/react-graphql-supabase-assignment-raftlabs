import { BiSolidImageAdd } from "react-icons/bi";
import UploadFile from "./UploadFile";
import { useMutation } from "@apollo/client";
import { GET_PROFILE, SET_PROFILE } from "../../lib/api";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useState } from "react";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const email = useSelector((state: RootState) => state.auth.email);
  const avatar = useSelector((state: RootState) => state.auth.avatar);
  const initialName = useSelector((state: RootState) => state.auth.name);
  const [updateProfile] = useMutation(SET_PROFILE, {
    refetchQueries: [GET_PROFILE, "GetProfile"],
    variables: { email, name },
  });

  if (initialName) {
    return (
      <div className="p-3">
        <div className="w-full bg-white rounded shadow p-3 flex gap-3">
          <div className="w-[100px] h-[100px] text-8xl text-blue-500 relative">
            <img
              className="object-cover w-[100px] h-[100px] rounded-full"
              src={avatar}
              alt=""
            />
            <div className="text-xl bg-black rounded-full flex items-center justify-center p-2 text-white absolute right-[10px] bottom-[10px]">
              <UploadFile email={email}>
                <BiSolidImageAdd />
              </UploadFile>
            </div>
          </div>
          {editing ? (
            <>
              <div className="flex flex-col gap-2">
                <input
                  className="outline-none p-1"
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white font-medium px-3 py-2 rounded-md"
                  onClick={() => {
                    updateProfile();
                    setEditing(false);
                  }}
                >
                  Update
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <p>Name : {initialName}</p>
              <div className="flex gap-3">
                <LogoutButton />
                <button
                  onClick={() => setEditing(true)}
                  className="bg-blue-500 text-white font-medium px-3 py-2 rounded-md"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
