import {createStore ,applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const initialState = {};
const middleware = [thunk]
export default createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension && window.devToolsExtension()
    )

)

