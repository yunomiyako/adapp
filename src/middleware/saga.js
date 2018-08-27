import { call, put, takeEvery , takeLatest } from "redux-saga/effects"

//import Action
import {ON_SUBMIT_ADCREATE } from "../actions/AdCreate"

//import API
import {Api} from "../api/Api"
import {submitAdCreateInfo} from "../api/AdCreatePage"

// ワーカー Saga: FETCH_EXAMPLE_DATA Action によって起動する
function *onSubmitAdCreate(action) {
	try {
		const response = yield call(submitAdCreateInfo , action.payload)
		const result = {}
		result.status = "OK"
		result.id = response.data.id
		console.log(result.id)
		action.callback(result)
		//yield put({type : ON_SUCCESS_SUBMIT_ADCREATE , callback:callback})
	} catch (e) {
		const result = {}
		result.status = "NG"
		result.errorMessage = e //????
		action.callback(result)
		//yield put({type: ON_ERROR_SUBMIT_ADCREATE, callback : callback})
	}
}

/*
  FETCH_EXAMPLE_DATA Action が送出されるたびに fetchUser を起動します。
  ユーザ情報の並列取得にも対応しています。
*/
function* mySaga() {
	yield takeLatest(ON_SUBMIT_ADCREATE, onSubmitAdCreate)
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
