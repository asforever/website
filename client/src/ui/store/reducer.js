import {combineReducers} from "redux";
import ExampleReducer from "./examples/ExampleReducer";

export default combineReducers({
    exampleReducer: ExampleReducer,
});
