import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Feed from "./Feed";
import Profile from "../Auth/Profile";

export default function ActiveView() {
  const activeView = useSelector((state: RootState) => state.view.value);
  return (
    <>
      {activeView === "feed" && <Feed />}
      {activeView === "profile" && <Profile />}
      {activeView === "create" && activeView}
    </>
  );
}
