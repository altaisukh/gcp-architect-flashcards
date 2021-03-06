import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore } from 'redux-firestore' 

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './store/reducers/rootReducer'
import firebase from './config/fbConfig'
import thunk from 'redux-thunk'

import './index.css';

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true }

const createStoreWithFirebase = compose(
	applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
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