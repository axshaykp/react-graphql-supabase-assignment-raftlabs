import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { RootState } from "../../app/store";

export function Counter() {
  const count = useSelector((state : RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="bg-blue-500 rounded-lg w-[200px]"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <h1 className="fs-5xl">{count}</h1>
      <button
        className="bg-red-500 rounded-lg w-[200px]"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className="bg-red-500 rounded-lg w-[200px]"
        onClick={() => dispatch(incrementByAmount(100))}
      >
        +100
      </button>
    </>
  );
}
