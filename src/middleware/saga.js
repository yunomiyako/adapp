import { call, put , takeLatest } from "redux-saga/effects"
import { showSnack } from "react-redux-snackbar"
 
//import Action
import {ON_SUBMIT_ADCREATE, ON_FETCH_TWEET_DETAIL, 
	ON_CHANGE_TWEET_OBJECT, ON_CHANGE_TWEET_OBJECT_LOADING, 
	ON_CHANGE_AD_OBJECT_TEXT } from "../actions/AdCreate"
import {FETCH_AD_DATA , FETCH_AD_DATA_SUCCESS , 
	FETCH_AD_DATA_FAIL , KEYS_TO_URLS,
	ON_CHANGE_IMAGE_URLS, ON_SEND_ACTION , 
	ACTION_FAIL  , ON_CHANGE_ID_RETURN_TO_GO ,
	ON_CHANGE_ACTION_LOADING ,SET_TWEET_OBJECT} from "../actions/AdPage"
import {ON_FETCH_RETURN , ON_UPDATE_RETURN_OBJECT , ON_UPDATE_RETURN_TYPE,
	ON_UPDATE_RETURN_IMAGE_URLS , ON_UPDATE_RATING, ON_FAIL_FETCH_RETURN, ON_UPDATE_RETURN_DESCRIPTION, ON_UPDATE_AD_INFO} from "../actions/ReturnPage"
import {GET_AD_LIST , GET_RETURN_LIST , SET_AD_LIST , SET_RETURN_LIST , SET_LOADING} from "../actions/UserPage"
import {GET_AD_LIST as GET_AD_LIST_TOPPAGE , 
	SET_AD_LIST as SET_AD_LIST_TOPPAGE} from "../actions/TopPage"

//import API
import submitAdCreateInfo from "../api/AdCreatePage"
import fetchAdData from "../api/fetchAdData"
import getUrlsFromKeys from "../api/getUrlsFromKeys"
import receiveReturn from "../api/receiveReturn"
import fetchReturn from "../api/fetchReturn"
import fetchAdList from "../api/fetchAdList"
import fetchReturnList from "../api/fetchReturnList"
import fetchTweetDetail from "../api/fetchTweetDetail"

//import utls
import getDateFromUnixTime from "../Utils/getDateFromUnixTime"
import AdTypeEnum from "../domain/enum/AdTypeEnum"
import getTweetIdFromUrl from "../Utils/getTweetIdFromUrl"

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
		
		//retweetかfavであればtweetObjectを取得する
		if( AdTypeEnum.getByName(result.adType).has_tweet_object) {
			const url = result.adObject.tweetUrl
			const id_tweet = getTweetIdFromUrl(url)
			const tweetObject = yield call(fetchTweetDetail , id_tweet)

			//set_tweet_objectとfetch_ad_date_successに順序があるのきもいな
			yield put({type : FETCH_AD_DATA_SUCCESS , response:result})
			yield put({type : SET_TWEET_OBJECT , tweetObject})
		} else {
			yield put({type : FETCH_AD_DATA_SUCCESS , response:result})
		}
		
		//共通でやる処理
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
		
		if(!action.payload.hasReceived) {
			const label = AdTypeEnum.getByName(action.payload.adType).short_title + "をしました！"
			yield put (showSnack("myUniqueId", {
				label: label,
				timeout: 10000,
				button: { label: "OK, GOT IT" }
			}))
		}

		//yield put({type : ACTION_SUCCESS , response})
		yield put({type : ON_CHANGE_ID_RETURN_TO_GO , id_return_to_go : response.id_return})
	}catch(e) {
		yield put ({type : ON_CHANGE_ACTION_LOADING , is_loading:false})
		yield put({type :  ACTION_FAIL  , errorMessage : "できなかった！"})
	}
}

function *onFetchReturnData(action) {
	try {
		//TODO : returnTypeの有無でローディングしようとするクズ
		yield put({type : ON_UPDATE_RETURN_TYPE , returnType : undefined})

		const payload = {id_return : action.id_return }
		const result = yield call(fetchReturn , payload)
		if(result.returnObject.images){
			const images = result.returnObject.images
			if(images.length !== 0) {
				const imageUrls = yield call(getUrlsFromKeys , result.returnObject.images)
				yield put({type : ON_UPDATE_RETURN_IMAGE_URLS , urls : imageUrls})
			}
		}
		
		yield put({type : ON_UPDATE_AD_INFO , ad_info : result.ad_info})
		yield put({type : ON_UPDATE_RETURN_DESCRIPTION , returnDescription : result.returnDescription})
		yield put({type : ON_UPDATE_RATING , rating : result.rating})		
		yield put({type : ON_UPDATE_RETURN_OBJECT , returnObject : result.returnObject})
		yield put({type : ON_UPDATE_RETURN_TYPE , returnType : result.returnType})
	} catch (e) {
		console.log("sagaで失敗取得")
		yield put({type : ON_FAIL_FETCH_RETURN , errorMessage : "取得に失敗しました" })
	}
}

function *onGetAdList(action) {
	try {
		yield put({type : SET_LOADING , loading : true})
		const ad_list = yield call(fetchAdList , {"id_user" : action.id_user})
		console.log(ad_list)
		yield put({type : SET_AD_LIST , ad_list : ad_list})
		yield put({type : SET_LOADING , loading : false})
	}catch(e) {
		//TODO : エラーハンドリング
	}
}

function *onGetReturnList() {
	try {
		var return_list = yield call(fetchReturnList)
		console.log(return_list)
		return_list = return_list.map((rt) => {
			rt.title = rt.returnDescription
			rt.link = "/return_page/" + rt.id_return
			rt.date = getDateFromUnixTime(rt.date)
			return rt
		})
		yield put({type : SET_RETURN_LIST , return_list : return_list})
	}catch(e) {
		//TODO : エラーハンドリング
	}
}

function *onGetAdListTopPage() {
	try {
		const ad_list = yield call(fetchAdList)
		const headImages = ad_list.map(ad => {
			if(ad.adObject) {
				if(ad.adObject.images) {
					return ad.adObject.images[0]
				}
			}
			return undefined
		})
		const urls = yield getUrlsFromKeys(headImages)
		const ad_list_with_url = ad_list.map( (ad , index) => {
			ad.url = urls[index]
			return ad
		})
		yield put({type : SET_AD_LIST_TOPPAGE , ad_list : ad_list_with_url})
	}catch(e) {
		//TODO : エラーハンドリング
	}
}

function *onFetchTweetDetail(action) {
	try {
		yield put({type :ON_CHANGE_TWEET_OBJECT_LOADING  , loading : true})
		console.log(action)
		console.log("id_tweet" , action.id_tweet)
		const tweetObject = yield call(fetchTweetDetail , action.id_tweet)
		yield put({type : ON_CHANGE_TWEET_OBJECT , tweetObject : tweetObject})
		yield put({type : ON_CHANGE_AD_OBJECT_TEXT , text : tweetObject.text})
		yield put({type :ON_CHANGE_TWEET_OBJECT_LOADING  , loading : false})
	}catch(e) {
		yield put({type : ON_CHANGE_TWEET_OBJECT , tweetObject : {}})
		yield put({type : ON_CHANGE_AD_OBJECT_TEXT , text : ""})
		yield put({type :ON_CHANGE_TWEET_OBJECT_LOADING  , loading : false})
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
	yield takeLatest(GET_AD_LIST , onGetAdList)
	yield takeLatest(GET_RETURN_LIST , onGetReturnList)
	yield takeLatest(GET_AD_LIST_TOPPAGE , onGetAdListTopPage)
	yield takeLatest(ON_FETCH_TWEET_DETAIL , onFetchTweetDetail)
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
