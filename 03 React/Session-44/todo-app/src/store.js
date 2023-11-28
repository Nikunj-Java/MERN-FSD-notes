import todoReducer from "./reducers";

import {createStore} from "redux";

const store= createStore(todoReducer)

export default store;