import React from "react"
import ReactDOM from "react-dom"

//install redux
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

//TODO : uninstall
//import thunk from "redux-thunk"


//reducerを呼び出す
import rootReducer from "./reducers"
import logger from "./middleware/logger"
import mySaga from "./middleware/saga"



import "./index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

const sagaMiddleware = createSagaMiddleware()
// Be sure to ONLY add this middleware in development
const middleware = process.env.NODE_ENV !== "production" ?
	[ logger , sagaMiddleware] :
	[ sagaMiddleware ]
//require("redux-immutable-state-invariant").default()を消しました

const store = createStore(rootReducer, applyMiddleware(...middleware))

//register saga
sagaMiddleware.run(mySaga)

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider> ,
	document.getElementById("root")
)
registerServiceWorker()
