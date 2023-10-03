import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";

export default function Like({ show }: { show: boolean }) {
  const [isVisible, setIsVisible] = useState(show);
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible]);
  if (isVisible)
    return (
      <div className="text-red-500 text-9xl absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center animate-ping">
        <AiFillHeart />
      </div>
    );
}
