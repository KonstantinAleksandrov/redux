const initialState = {
  number: 1,
  modify: 1
}

export default function reducer(state = initialState, action) {
  const {type, payload} = action

  switch(type) {
    case 'CHANGE_MODIFY':
      return Object.assign({}, state, {modify: payload})
    case 'COUNTER_PLUS':
      return Object.assign({}, state, {number: state.number + state.modify})
    case 'COUNTER_MINUS':
      return Object.assign({}, state, {number: state.number - state.modify})
    default:
      return state
  }
}

export const numberSelector = store => store.counter.number

export const onChangeModify = (value) => ({
  type: "CHANGE_MODIFY",
  payload: Number(value)
})

export const onIncreaseCounter = () => ({type: "COUNTER_PLUS"})
export const onDecreaseCounter = () => ({type: "COUNTER_MINUS"})
