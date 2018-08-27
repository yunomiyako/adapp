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

export const ON_CHANGE_AD_TYPE  = "ON_CHANGE_AD_TYPE"
export function onChangeAdType(adType) {
	return {
		type: ON_CHANGE_AD_TYPE ,
		adType
	}
}


export const ON_CHANGE_TITLE  = "ON_CHANGE_TITLE"
export function onChangeTitle(title) {
	return {
		type: ON_CHANGE_TITLE ,
		title
	}
}


export const ON_CHANGE_RETURN_DESCRIPTION  = "ON_CHANGE_RETURN_DESCRIPTION"
export function onChangeReturnDescription(returnDescription) {
	return {
		type: ON_CHANGE_RETURN_DESCRIPTION ,
		returnDescription
	}
}


export const ON_CHANGE_AD_OBJECT  = "ON_CHANGE_AD_OBJECT"
export function onChangeAdObject(adObject) {
	return {
		type: ON_CHANGE_AD_OBJECT ,
		adObject
	}
}


export const ON_CHANGE_RETURN_TYPE  = "ON_CHANGE_RETURN_TYPE"
export function onChangeReturnType(returnType) {
	return {
		type: ON_CHANGE_RETURN_TYPE ,
		returnType
	}
}


export const ON_CHANGE_RETURN_OBJECT  = "ON_CHANGE_RETURN_OBJECT"
export function onChangeReturnObject(returnObject) {
	return {
		type: ON_CHANGE_RETURN_OBJECT ,
		returnObject
	}
}

export const ON_CHANGE_INDEX  = "ON_CHANGE_INDEX"
export function onChangeIndex(index) {
	return {
		type: ON_CHANGE_INDEX ,
		index
	}
}

export const CLEAR_STATE = "CLEAR_STATE"
export function clearState() {
	return {
		type: CLEAR_STATE
	}
}

export const ON_CHANGE_AD_CREATE_COMPLETED  = "ON_CHANGE_AD_CREATE_COMPLETED"
export function onChangeAdCreateCompleted(adCreateCompleted) {
	return {
		type: ON_CHANGE_AD_CREATE_COMPLETED ,
		adCreateCompleted
	}
}


export const ON_CHANGE_RETURN_CREATE_COMPLETED  = "ON_CHANGE_RETURN_CREATE_COMPLETED"
export function onChangeReturnCreateCompleted(returnCreateCompleted) {
	return {
		type: ON_CHANGE_RETURN_CREATE_COMPLETED ,
		returnCreateCompleted
	}
}

//API通信
export const ON_SUBMIT_ADCREATE = "ON_SUBMIT_ADCREATE"
export function onSubmitAdCreate(payload , callback) {
	return {
		type: ON_SUBMIT_ADCREATE ,
		payload,
		callback
	}
}