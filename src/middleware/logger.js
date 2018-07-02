const logger = store => next => action => {
	window.console.group(action.type)
	window.console.info("dispatching", action)

	let result = next(action)

	window.console.log("next state", store.getState())
	window.console.groupEnd(action.type)

	return result
}

export default logger
