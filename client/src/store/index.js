import {applyMiddleware, createStore} from "redux";
import {createSagaMiddleware} from "redux-saga";

import reducers from "./reducer";
import rootSaga from "./action/asyncAction/rootSaga";

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
export default store
