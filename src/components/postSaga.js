import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getPostFail, getPostSuccess } from "./postSlice";

//api call
// return response to generator function
function postFeatch() {
  return axios
    .get("https://jsonplaceholder.typicode.com/osts")
    .then((res) => ({ res }))
    .catch((error) => ({ error }));
}

function* workGetPostFeatch() {
  const { res, error } = yield call(postFeatch);
  if (res) {
    yield put(getPostSuccess(res.data)); // calls success action from reducer with data as payload
  } else {
    yield put(getPostFail(error));
  }
}

// saga with redux-tool kit
// takeEvery will take {nameOfReducer}/{action} with generator function i.e :- takeEvery("post/getPost",workGetPostFeatch)
function* postSaga() {
  yield takeEvery("post/getPost", workGetPostFeatch);
}

export default postSaga;
