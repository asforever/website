import {combineReducers} from "redux";
import PopupReducer from "./PopupReducer";
import ArticleReducer from "./ArticleReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
    popup: PopupReducer,
    article: ArticleReducer,
    user: UserReducer
});
