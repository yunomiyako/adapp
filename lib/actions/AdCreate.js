"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.onChangeAdType = onChangeAdType;
exports.onChangeTitle = onChangeTitle;
exports.onChangeReturnDescription = onChangeReturnDescription;
exports.onChangeAdObject = onChangeAdObject;
exports.onChangeReturnType = onChangeReturnType;
exports.onChangeReturnObject = onChangeReturnObject;
// Actionの定義を書きます
/*
{adType : "" ,
	title: "" ,
	returnDescription:""  ,
	adObject : { text:"" , images:[] , tweetUrl : "" , isNewlyCreated:true}  ,
	returnType: 1  ,
	returnObject : {text: "", images:[] , html : ""}
}
*/

var ON_CHANGE_AD_TYPE = exports.ON_CHANGE_AD_TYPE = "ON_CHANGE_AD_TYPE";
function onChangeAdType(adType) {
	return {
		type: ON_CHANGE_AD_TYPE,
		adType: adType
	};
}

var ON_CHANGE_TITLE = exports.ON_CHANGE_TITLE = "ON_CHANGE_TITLE";
function onChangeTitle(title) {
	return {
		type: ON_CHANGE_TITLE,
		title: title
	};
}

var ON_CHANGE_RETURN_DESCRIPTION = exports.ON_CHANGE_RETURN_DESCRIPTION = "ON_CHANGE_RETURN_DESCRIPTION";
function onChangeReturnDescription(returnDescription) {
	return {
		type: ON_CHANGE_RETURN_DESCRIPTION,
		returnDescription: returnDescription
	};
}

var ON_CHANGE_AD_OBJECT = exports.ON_CHANGE_AD_OBJECT = "ON_CHANGE_AD_OBJECT";
function onChangeAdObject(adObject) {
	return {
		type: ON_CHANGE_AD_OBJECT,
		adObject: adObject
	};
}

var ON_CHANGE_RETURN_TYPE = exports.ON_CHANGE_RETURN_TYPE = "ON_CHANGE_RETURN_TYPE";
function onChangeReturnType(returnType) {
	return {
		type: ON_CHANGE_RETURN_TYPE,
		returnType: returnType
	};
}

var ON_CHANGE_RETURN_OBJECT = exports.ON_CHANGE_RETURN_OBJECT = "ON_CHANGE_RETURN_OBJECT";
function onChangeReturnObject(returnObject) {
	return {
		type: ON_CHANGE_RETURN_OBJECT,
		returnObject: returnObject
	};
}