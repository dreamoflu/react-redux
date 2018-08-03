import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { conter, addGun, removeGun,changeData } from './redux/redux'
const reduxDevTools = window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(conter,compose(
    applyMiddleware(thunk),
    reduxDevTools
));

// const store = createStore(conter, applyMiddleware(thunk))

// +++++++++++++++++++++++
// 未使用react-redux 插件时
// +++++++++++++++++++++++++++
// function render () {
//     ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} changeData={changeData}/>, document.getElementById('root'));
// }
// render()
// store.subscribe(render);



ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>),
document.getElementById('root'));

registerServiceWorker();
