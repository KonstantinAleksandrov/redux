import {combineReducers} from "redux";
import counterReducer from '../Components/Counter/counterModel'
import formReducer from '../Components/LoginForm/formModel'

export default combineReducers({
  counter: counterReducer,
  form: formReducer
})