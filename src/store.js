import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const devTools = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const createStoreWithMiddlewares = applyMiddleware(reduxThunk)(createStore);

export default createStoreWithMiddlewares(rootReducer, devTools());
