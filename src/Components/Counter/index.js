import {useDispatch, useSelector} from "react-redux";
import {onChangeModify, onDecreaseCounter, onIncreaseCounter, numberSelector} from './counterModel'

const Counter = () => {
  const counter = useSelector(numberSelector)
  const dispatch = useDispatch()

  return (
    <>
      <input onChange={(e) => dispatch(onChangeModify(e.target.value))}/>
      <button onClick={() => dispatch(onIncreaseCounter())}>PLUS</button>
      <button onClick={() => dispatch(onDecreaseCounter())}>MINUS</button>
      <div>{counter}</div>
    </>
  )
}


export default Counter