import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import postSaga from "../components/postSaga";
import postReducer from "../components/postSlice";

const sagaMiddleware = createSagaMiddleware();

// rootSaga has combine sagas of app
function* rootSaga() {
  yield all([postSaga()]);
}
export const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: [sagaMiddleware],
});

// run all combine sagas
sagaMiddleware.run(rootSaga);
