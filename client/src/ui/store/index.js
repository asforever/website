import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
