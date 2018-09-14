import { call, put, takeEvery , takeLatest } from "redux-saga/effects"

//import Action
import {ON_SUBMIT_ADCREATE } from "../actions/AdCreate"
import {FETCH_AD_DATA , FETCH_AD_DATA_SUCCESS , 
	FETCH_AD_DATA_FAIL , KEYS_TO_URLS,
	ON_CHANGE_IMAGE_URLS, ON_SEND_ACTION , 
	ACTION_FAIL  , ON_CHANGE_ID_RETURN_TO_GO ,
	ON_CHANGE_ACTION_LOADING} from "../actions/AdPage"
import {ON_FETCH_RETURN , ON_UPDATE_RETURN_OBJECT , ON_UPDATE_RETURN_TYPE,
	ON_UPDATE_RETURN_IMAGE_URLS} from "../actions/ReturnPage"
//import API
import submitAdCreateInfo from "../api/AdCreatePage"
import fetchAdData from "../api/fetchAdData"
import getUrlsFromKeys from "../api/getUrlsFromKeys"
import receiveReturn from "../api/receiveReturn"
import fetchReturn from "../api/fetchReturn"

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

function *onSendAction(action) {
	try {
		yield put ({type : ON_CHANGE_ACTION_LOADING , is_loading:true})
		const response = yield call(receiveReturn , action.payload.id_user , action.payload.id_ad)
		console.log(response)
		if(!response.id_return) {console.log("id_returnが帰って来てない！")}
		//yield put({type : ACTION_SUCCESS , response})
		yield put({type : ON_CHANGE_ID_RETURN_TO_GO , id_return_to_go : response.id_return})
	}catch(e) {
		yield put ({type : ON_CHANGE_ACTION_LOADING , is_loading:false})
		yield put({type :  ACTION_FAIL  , errorMessage : "できなかった！"})
	}
}

function *onFetchReturnData(action) {
	try {
		const payload = {id_return : action.id_return }
		const result = yield call(fetchReturn , payload)
		if(result.returnObject.images){
			const images = result.returnObject.images
			if(images.length != 0) {
				const imageUrls = yield call(getUrlsFromKeys , result.returnObject.images)
				yield put({type : ON_UPDATE_RETURN_IMAGE_URLS , urls : imageUrls})
			}
		}

		yield put({type : ON_UPDATE_RETURN_OBJECT , returnObject : result.returnObject})
		yield put({type : ON_UPDATE_RETURN_TYPE , returnType : result.returnType})
	} catch (e) {
		console.log("sagaで失敗取得")
		//失敗を投げるべき
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
	yield takeLatest(ON_SEND_ACTION , onSendAction)
	yield takeLatest(ON_FETCH_RETURN , onFetchReturnData)
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
