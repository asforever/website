import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
console.log(store.getState());
export default store
