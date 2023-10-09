import { useSelector, useDispatch } from 'react-redux';
import { blablabla, nonono, opa, tota } from 'redux/store';

export const TestForRedux = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  const anotherValue = useSelector(state => state.myAnotherValue);
  return (
    <>
      <div>{value}</div>
      <button onClick={() => dispatch(blablabla(50))}> </button>
      <button onClick={() => dispatch(nonono(50))}> </button>
      <div>{anotherValue}</div>
      <button onClick={() => dispatch(opa(2))}> </button>
      <button onClick={() => dispatch(tota(2))}> </button>
    </>
  );
};
