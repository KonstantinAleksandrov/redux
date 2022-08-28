import {onResetForm} from '../Components/LoginForm/formModel'

export const loggerMiddleware = ({dispatch, getState}) => (next) => (action) => {

  if(action.type === "SEND_FORM") {
    dispatch(onResetForm())
  }

  console.log(action)
  console.table(getState().counter)
  console.table(getState().form)

  return next(action)
}


// export const loggerMiddleware = function(storeApi) {
//   return function(){
//     return function() {
//
//     }
//   }
// }