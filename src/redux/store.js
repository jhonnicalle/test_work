import { createStore, combineReducers } from "redux";
import users from "./reducers";

const reducer = combineReducers({
  users
})

const store = createStore(reducer)
export default store