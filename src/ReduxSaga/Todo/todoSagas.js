import { call, put, takeLatest } from "redux-saga/effects";
import { fetchTodosAPI } from "./todoService";
import { FETCH_TODOS_REQUEST, fetchTodoFailure, fetchTodoSuccess } from "./todoAction";

function* fetchTodoSaga() {
  try {
    const response = yield call(fetchTodosAPI);
    yield put(fetchTodoSuccess(response.data));
  } catch (error) {
    yield put(fetchTodoFailure(error.message));
  }
}

export default function* allSagas() {
  yield takeLatest(FETCH_TODOS_REQUEST, fetchTodoSaga)
};