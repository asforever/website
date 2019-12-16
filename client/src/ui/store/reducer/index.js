import {combineReducers} from "redux";
import ArticleReducer from "./ArticleReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
    articleReducer: ArticleReducer,
    userReducer: UserReducer,
});
