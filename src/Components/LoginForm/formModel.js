const initialState = {
  login: '',
  password: ''
}

export default function reducer(state = initialState, action) {
  const {type, payload} = action

  switch(type) {
    case 'CHANGE_PASSWORD':
      return Object.assign({}, state, {password: payload})
    case 'CHANGE_LOGIN':
      return Object.assign({}, state, {login: payload})
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}


export const loginSelector = state => state.form.login
export const passwordSelector = state => state.form.password


export const onChangeLogin = (value) => ({
  type: 'CHANGE_LOGIN',
  payload: value
})

export const onChangePassword = (value) => ({
  type: 'CHANGE_PASSWORD',
  payload: value
})

export const onResetForm = () => ({
  type: 'RESET_FORM',
})

export const onSubmit = () => ({
  type: 'SEND_FORM',
})