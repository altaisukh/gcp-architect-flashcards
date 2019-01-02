import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore' // <- needed if using firestore
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './store/reducers/rootReducer'
import firebase from './config/fbConfig'
import thunk from 'redux-thunk'

import './index.css';

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const createStoreWIthFirebase = compose(
	applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
	reactReduxFirebase(firebase, rrfConfig),
	reduxFirestore(firebase)
	) (createStore)

const initialState = {}
const store = createStoreWIthFirebase(rootReducer, initialState)


render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();