import { BiLoaderAlt } from "react-icons/bi";

export default function Loading() {
  return (
    <div className="animate-spin absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center z-0">
      <BiLoaderAlt />
    </div>
  );
}
