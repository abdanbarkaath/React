import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger, { createLogger } from 'redux-logger'


//store 

//action
const Increment = "INCREMENT"
function add() {
    return {
        type: Increment,
        info: "to add"
    }
}

const Decrement = "Decrement"

function sub() {
    return {
        type: "Decrement",
        info: "to remove"
    }
}
//reducer
const initalNumber = {
    num: 0,
}
const initialSum = {
    sum: 5
}

//single reducer
// const reducer = (state = initalNumber, action) => {
//     switch (action.type) {
//         case Increment:
//             return {
//                 ...state,
//                 num: state.num + 1
//             }
//         case Decrement:
//             return {
//                 ...state,
//                 sum: state.sum - 1
//             }
//         default: return state
//     }
// }


//multiple reducer
const addreducer = (state = initalNumber, action) => {
    switch (action.type) {
        case Increment:
            return {
                ...state,
                num: state.num + 1
            }
        default: return state
    }
}
const subreducer = (state = initialSum, action) => {
    const newState = { ...state }
    switch (action.type) {
        case Decrement:
            return {
                ...state,
                sum: state.sum - 1
            }
        default: return state;
    }
}

const rootReducer = combineReducers({
    add: addreducer,
    sub: subreducer
})
let store = createStore(rootReducer,applyMiddleware(logger))
console.log("initial ", store.getState());

//dispatcher
const unsubscribe = store.subscribe(() => {})
store.dispatch(add())
store.dispatch(sub())
store.dispatch(add())
store.dispatch(sub())
unsubscribe();

ReactDOM.render(
    <App />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
