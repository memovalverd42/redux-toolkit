import { RootState } from './store';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter';

export const App = () => {
  const count = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementBy(2))}
        >
          Increment by 2
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}