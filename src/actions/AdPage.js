export const FETCH_EXAMPLE_DATA  = "FETCH_EXAMPLE_DATA"
export function fetchExampleData() {
	return {
		type: FETCH_EXAMPLE_DATA
	}
}

export const EXAMPLE_FETCH_SUCCEEDED = "EXAMPLE_FETCH_SUCCEEDED"
export function exampleFetchSucceeded(data) {
	return {
		type : EXAMPLE_FETCH_SUCCEEDED ,
		data
	}
}

export const EXAMPLE_FETCH_FAILED = "EXAMPLE_FETCH_FAILED"
export function exampleFetchFailed(message) {
	return {
		type : EXAMPLE_FETCH_FAILED ,
		message
	}
}
