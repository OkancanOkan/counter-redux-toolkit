import { decrement, increment } from "../slices/counterSlice";
import { useDispatch } from "react-redux";

function CounterActions() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterActions;
