import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getPostSuccess } from "./postSlice";

//api call
// return response to generator function
function postFeatch() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
}

function* workGetPostFeatch() {
  const posts = yield call(postFeatch);
  yield put(getPostSuccess(posts)); // calls success action from reducer with data as payload
}

// saga with redux-tool kit
// takeEvery will take {nameOfReducer}/{action} with generator function i.e :- takeEvery("post/getPost",workGetPostFeatch)
function* postSaga() {
  yield takeEvery("post/getPost", workGetPostFeatch);
}

export default postSaga;
