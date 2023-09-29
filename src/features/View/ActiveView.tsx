import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function ActiveView() {
    const activeView = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="max-w-[400px] w-full bg-slate-500 justify-self-center">
      {activeView}
    </div>
  );
}
