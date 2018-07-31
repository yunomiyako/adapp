import { call, put, takeEvery } from "redux-saga/effects"

//import Action
import {} from "../actions/AdPage"
import {FETCH_DB_DATA} from "../actions/Test"
import {ON_CHANGE_USERINFO} from "../actions/Test"


//import API
import {Api} from "../api/Api"

// ワーカー Saga: FETCH_EXAMPLE_DATA Action によって起動する
function *fetchExample() {
	try {
		const data = yield call(Api.fetchTest)
		//yield put({type: EXAMPLE_FETCH_SUCCEEDED, data: data})
		yield put({type : "ONCHANGETITLE", title : data.title})
	} catch (e) {
		yield put({type: "EXAMPLE_FETCH_FAILED", message: e.message})
	}
}

function *postExample() {
	try {
		const data = yield call(Api.postTest)
		//yield put({type: EXAMPLE_FETCH_SUCCEEDED, data: data})
		yield put({type : "ONCHANGETITLE", title : data.test2})
	} catch (e) {
		yield put({type: "EXAMPLE_FETCH_FAILED", message: e.message})
	}
}

function *fetchDynamoTest() {
	try {
		const data = yield call(Api.fetchDynamoTest)
		//yield put({type: EXAMPLE_FETCH_SUCCEEDED, data: data})
		yield put({type : ON_CHANGE_USERINFO, title : data.username})
	} catch (e) {
		yield put({type: "EXAMPLE_FETCH_FAILED", message: e.message})
	}
}


/*
  FETCH_EXAMPLE_DATA Action が送出されるたびに fetchUser を起動します。
  ユーザ情報の並列取得にも対応しています。
*/
function* mySaga() {
	yield takeEvery("FETCH_EXAMPLE_DATA", fetchExample),
	yield takeEvery("POST_EXAMPLE_DATA", postExample) ,
	yield takeEvery(FETCH_DB_DATA , fetchDynamoTest)
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
