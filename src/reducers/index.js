import { combineReducers } from "redux";
import counter from "./counter";
import isLogged from "./isLogged";

const reducers = combineReducers({
    counter,
     isLogged
    });

export default reducers;
