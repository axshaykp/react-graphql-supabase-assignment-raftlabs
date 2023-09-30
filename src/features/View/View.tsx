import { useSelector } from "react-redux";
import ActiveView from "./ActiveView";
import Header from "./Header";
import Nav from "./Nav";
import { RootState } from "../../app/store";
import Story from "./Story";

export default function View() {
  const storyVisible = useSelector((state: RootState) => state.story.value);
  return (
    <>
      <div className="h-screen grid grid-rows-[50px_calc(100vh_-_100px)_50px]">
        <Header />
        <div className="max-w-[400px] w-full bg-gray-100 justify-self-center overflow-y-scroll">
          <ActiveView />
        </div>
        <Nav />
      </div>
      {storyVisible && <Story />}
    </>
  );
}
