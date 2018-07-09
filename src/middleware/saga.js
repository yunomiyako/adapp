import { call, put, takeEvery } from "redux-saga/effects"

//import Action
import {FETCH_EXAMPLE_DATA, EXAMPLE_FETCH_FAILED , EXAMPLE_FETCH_SUCCEEDED} from "../actions/AdPage"
import {ONCHANGETITLE} from "../actions/AdCreate"

//import API
import {Api} from "../api/Api"

// ワーカー Saga: FETCH_EXAMPLE_DATA Action によって起動する
function *fetchExample() {
	try {
		const data = yield call(Api.fetchTest)
		//yield put({type: EXAMPLE_FETCH_SUCCEEDED, data: data})
		yield put({type : ONCHANGETITLE, title : data.title})
	} catch (e) {
		yield put({type: EXAMPLE_FETCH_FAILED, message: e.message})
	}
}

/*
  FETCH_EXAMPLE_DATA Action が送出されるたびに fetchUser を起動します。
  ユーザ情報の並列取得にも対応しています。
*/
function* mySaga() {
	yield takeEvery(FETCH_EXAMPLE_DATA, fetchExample)
}

/*
  代わりに takeLatest を使うこともできます。

  しかし、ユーザ情報の並列取得には対応しません。
  もしレスポンス待ちの状態で USER_FETCH_REQUESTED を受け取った場合、
  待ち状態のリクエストはキャンセルされて最後の1つだけが実行されます。
*/
// function* mySaga() {
// 	yield takeLatest("USER_FETCH_REQUESTED", fetchUser)
// }

export default mySaga
