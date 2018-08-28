import { call, put, takeEvery , takeLatest } from "redux-saga/effects"

//import Action
import {ON_SUBMIT_ADCREATE } from "../actions/AdCreate"
import {FETCH_AD_DATA , FETCH_AD_DATA_SUCCESS , 
	FETCH_AD_DATA_FAIL , KEYS_TO_URLS,
	ON_CHANGE_IMAGE_URLS} from "../actions/AdPage"

//import API
import {submitAdCreateInfo} from "../api/AdCreatePage"
import fetchAdData from "../api/fetchAdData"
import getUrlsFromKeys from "../api/getUrlsFromKeys"

// ワーカー Saga: FETCH_EXAMPLE_DATA Action によって起動する
function *onSubmitAdCreate(action) {
	try {
		const result = yield call(submitAdCreateInfo , action.payload)
		console.log(result)
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

function *onFetchAdData(action) {
	try {
		const payload = {id_user : action.id_user , id_ad : action.id_ad}
		const result = yield call(fetchAdData , payload)
		console.log("saga : ")
		console.log(result)
		yield put({type : FETCH_AD_DATA_SUCCESS , response:result})
		yield put({type : KEYS_TO_URLS , keys : result.adObject.images})
	} catch (e) {
		yield put({type: FETCH_AD_DATA_FAIL, errorMessage : "広告データを読み込めませんでした！"})
	}
}

function *onKeysToUrls(action) {
	try {
		const imageUrls = yield call(getUrlsFromKeys , action.keys)
		yield put({type : ON_CHANGE_IMAGE_URLS , imageUrls})
	}catch(e){
		//todo : 実装?
		yield put({type : ON_CHANGE_IMAGE_URLS , imageUrls: []})
	}
}

/*
  FETCH_EXAMPLE_DATA Action が送出されるたびに fetchUser を起動します。
  ユーザ情報の並列取得にも対応しています。
*/
function* mySaga() {
	yield takeLatest(ON_SUBMIT_ADCREATE, onSubmitAdCreate) 
	yield takeLatest(FETCH_AD_DATA , onFetchAdData)
	yield takeLatest(KEYS_TO_URLS , onKeysToUrls)
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
