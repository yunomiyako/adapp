import React from "react"
import ReactDOM from "react-dom"

//install redux
import { Provider } from "react-redux"
import { createStore } from "redux"

//reducerを呼び出す
import rootReducer from "./reducers"

import "./index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider> ,
	document.getElementById("root")
)
registerServiceWorker()
