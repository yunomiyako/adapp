import React from "react"
import ReactDOM from "react-dom"

//install redux
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import logger from "./middleware/logger"


//reducerを呼び出す
import rootReducer from "./reducers"


import "./index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== "production" ?
	[require("redux-immutable-state-invariant").default(), logger] :
	[logger]

const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider> ,
	document.getElementById("root")
)
registerServiceWorker()
