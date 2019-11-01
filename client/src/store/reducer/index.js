import {combineReducers} from "redux";
import PopupReducer from "./PopupReducer";
import FetchReducer from "./FetchReducer";

export default combineReducers({
    popup: PopupReducer,
    fetch: FetchReducer
});
