import {combineReducers} from "redux";
import PopupReducer from "./PopupReducer";
import ArticleReducer from "./ArticleReducer";

export default combineReducers({
    popup: PopupReducer,
    article: ArticleReducer
});
