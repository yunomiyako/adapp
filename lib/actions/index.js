"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitInformation = submitInformation;
// Actionの定義を書きます

var SUBMITINFORMATION = exports.SUBMITINFORMATION = "SUBMITINFORMATION";
function submitInformation(info) {
  return {
    type: SUBMITINFORMATION,
    info: info
  };
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