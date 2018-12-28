import React from "react"
import ReactDOM from "react-dom"

//install redux
import { Provider } from "react-redux"
import { createStore, applyMiddleware , compose } from "redux"
import createSagaMiddleware from "redux-saga"

//reducerを呼び出す
import rootReducer from "./reducers"
import logger from "./middleware/logger"
import mySaga from "./middleware/saga"
import persistState from "redux-localstorage"

import "./index.css"
import MyApp from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

//import {StripeProvider} from "react-stripe-elements"

const sagaMiddleware = createSagaMiddleware()
// Be sure to ONLY add this middleware in development
const middleware = process.env.NODE_ENV !== "production" ?
	[ logger , sagaMiddleware] :
	[ sagaMiddleware ]
//require("redux-immutable-state-invariant").default()を消しました

const store = createStore(rootReducer, compose(applyMiddleware(...middleware) , persistState("AdCreateInfo")))
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware) ))


//register saga
sagaMiddleware.run(mySaga)

ReactDOM.render(
	<Provider store = {store}>
		<MyApp />
	</Provider>  ,
	document.getElementById("root")
)

registerServiceWorker()
