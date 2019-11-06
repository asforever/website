import {combineReducers} from "redux";
import PopupReducer from "./PopupReducer";
import BlogReducer from "./BlogReducer";

export default combineReducers({
    popup: PopupReducer,
    blog: BlogReducer
});
