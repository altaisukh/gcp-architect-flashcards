import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
//import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase' //Swithced to provider

//import { reduxFirestore, getFirestore } from 'redux-firestore' // <- needed if using firestore
import { createFirestoreInstance, getFirestore } from 'redux-firestore' // <- needed if using firestore

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

const createStoreWithFirebase = compose(
	applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//	reactReduxFirebase(firebase, rrfConfig),
//	reduxFirestore(firebase)
	) (createStore)

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)


const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
}




render(<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<App />
			</ReactReduxFirebaseProvider>
		</Provider>, 
		document.getElementById('root'));
registerServiceWorker();