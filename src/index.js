import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';
import App from './components/App';
import TimeReport from './components/TimeReport';

const history = createHistory();
const middleware = routerMiddleware(history);
const rootReducer = combineReducers({
    ...reducers,
    routerReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(middleware),
);

render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/report" component={TimeReport}/>
        </div>
    </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
