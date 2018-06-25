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
