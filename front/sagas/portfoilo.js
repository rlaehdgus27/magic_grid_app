import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  IMG_LIST_FAILURE,
  IMG_LIST_REQUEST,
  IMG_LIST_SUCCESS,
  //
  IMG_UPLOAD_REQUEST,
  IMG_UPLOAD_SUCCESS,
  IMG_UPLOAD_FAILURE,
} from "../reducers/portfoilo";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
function imgListAPI(data) {
  return axios.get(`/api/img/list`);
}

function* imgList(action) {
  try {
    const result = yield call(imgListAPI, action.data);

    yield put({
      type: IMG_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: IMG_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
function imgUploadAPI(data) {
  return axios.post(`/api/img/image`, data);
}

function* imgUpload(action) {
  try {
    const result = yield call(imgUploadAPI, action.data);

    yield put({
      type: IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: IMG_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

function* watchImgList() {
  yield takeLatest(IMG_LIST_REQUEST, imgList);
}

function* watchImgUpload() {
  yield takeLatest(IMG_UPLOAD_REQUEST, imgUpload);
}

////////////////////////////////

export default function* portfoiloSaga() {
  yield all([
    fork(watchImgList),
    fork(watchImgUpload),
    //,
  ]);
}
