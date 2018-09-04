export const ON_UPDATE_RETURN_TYPE  = "ON_UPDATE_RETURN_TYPE"
export function onUpdateReturnType(returnType) {
	return {
		type: ON_UPDATE_RETURN_TYPE,
		returnType
	}
}

export const ON_UPDATE_RETURN_OBJECT  = "ON_UPDATE_RETURN_OBJECT"
export function onUpdateReturnObject(returnObject) {
	return {
		type: ON_UPDATE_RETURN_OBJECT,
		returnObject
	}
}

export const ON_CHANGE_RATE  = "ON_CHANGE_RATE"
export function onChangeRate(rate) {
	return {
		type: ON_CHANGE_RATE ,
		rate
	}
}

export const ON_FETCH_RETURN = "ON_FETCH_RETURN"
export function onFetchReturn(id_return) {
	return {
		type : ON_FETCH_RETURN , 
		id_return
	}
}
