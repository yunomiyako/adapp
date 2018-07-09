// Actionの定義を書きます

export const ONCHANGETITLE  = "ONCHANGETITLE"
export function onChangeTitle(title) {
	return {
		type: ONCHANGETITLE,
		title
	}
}

export const ONSETIMAGE = "ONSETIMAGE"
export function onSetImage(image) {
	return {
		type : ONSETIMAGE,
		image
	}
}

export const ONCHANGEDESCRIPTION = "ONCHANGEDESCRIPTION"
export function onChangeDescription(description) {
	return {
		type : ONCHANGEDESCRIPTION ,
		description
	}
}

export const ONSETRETURNTYPE = "ONSETRETURNTYPE"
export function onSetReturnType(id) {
	return {
		type:ONSETRETURNTYPE,
		id
	}
}

export const ONCHANGERETURNTEXT = "ONCHANGERETURNTEXT"
export function onChangeReturnText(text) {
	return {
		type : ONCHANGERETURNTEXT,
		text
	}
}

export const ONCHANGEPICTURES = "ONCHANGEPICTURES"
export function onChangePictures(pictures) {
	return {
		type : ONCHANGEPICTURES,
		pictures
	}
}

export const ONCHANGERETURNPICTURES = "ONCHANGERETURNPICTURES"
export function onChangeReturnPictures(pictures) {
	return {
		type : ONCHANGERETURNPICTURES,
		pictures
	}
}

export const ONCLICKSUBMIT = "ONCLICKSUBMIT"
export function onClickSubmit() {
	return {
		type : ONCLICKSUBMIT
	}
}

export const POST_EXAMPLE_DATA = "POST_EXAMPLE_DATA"
export function postTest() {
	return {
		type : POST_EXAMPLE_DATA
	}
}

/*
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
*/
