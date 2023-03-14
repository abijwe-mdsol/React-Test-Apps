import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from '../app/stores/counterSlice'

const Dashboard = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>Dashboard Page</div>
      <div>
        Count: {count}
      </div>
      <button onClick={() => dispatch(increment())}>
        Add
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(123))}>
        Add by 123
      </button>
    </>
  )
}

export default Dashboard;