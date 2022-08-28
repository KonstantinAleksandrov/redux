import {useDispatch, useSelector} from "react-redux";
import {loginSelector, passwordSelector, onChangeLogin, onChangePassword, onResetForm, onSubmit} from "./formModel";

const LoginForm = () => {
  const dispatch = useDispatch()
  const password = useSelector(passwordSelector)
  const login = useSelector(loginSelector)

  return (
    <form>
      <label>
        Login
        <input type="text" value={login} onChange={e => dispatch(onChangeLogin(e.target.value))}/>
      </label>
      <label>
        <input type="text" value={password} onChange={e => dispatch(onChangePassword(e.target.value))}/>
      </label>
      <button type="button" onClick={() => dispatch(onSubmit())}>Submit</button>
      <button type="button" onClick={() => dispatch(onResetForm())}>Reset</button>
    </form>
  )
}

export default LoginForm