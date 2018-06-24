import React from "react"
import ReactDOM from "react-dom"

//install redux
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import logger from "./middleware/logger"
import thunk from "redux-thunk"

//reducerを呼び出す
import rootReducer from "./reducers"


import "./index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== "production" ?
	[require("redux-immutable-state-invariant").default(), logger , thunk] :
	[logger , thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider> ,
	document.getElementById("root")
)
registerServiceWorker()
