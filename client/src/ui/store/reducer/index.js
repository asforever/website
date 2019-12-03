import {combineReducers} from "redux";
import {PopupReducer} from "./PopupReducer";


export default combineReducers({
    popup: PopupReducer,
});
