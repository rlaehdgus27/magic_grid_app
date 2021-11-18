import { all, fork } from "redux-saga/effects";
import portfolioSaga from "./portfoilo";
//
import axios from "axios";
import backURL from "../config/config";

axios.defaults.baseURL = backURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(portfolioSaga)]);
}
