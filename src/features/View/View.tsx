import ActiveView from "./ActiveView";
import Header from "./Header";
import Nav from "./Nav";

export default function View() {
  return (
    <div className="h-screen grid grid-rows-[50px_auto_50px]">
      <Header />
      <ActiveView />
      <Nav />
    </div>
  );
}
