// import Profile from "./feature/auth/Profile";
import { useDispatch, useSelector } from "react-redux";
import Home from "./feature/home/Home";
import { setAvatar, setName } from "./app/authSlice";
import { RootState } from "./app/store";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "./lib/api";

export default function App() {
  const email = useSelector((state: RootState) => state.auth.email);
  const dispatch = useDispatch();
  const { data } = useQuery(GET_PROFILE, {
    variables: { email },
  });
  if (data) {
    dispatch(setAvatar(data.users[0].avatar));
    dispatch(setName(data.users[0].name));
  }
  return (
    <>
      {/* <Profile /> */}
      <Home />
    </>
  );
}
