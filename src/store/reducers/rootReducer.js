import authReducer from './authReducer'
import cardReducer from './cardReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
	auth: authReducer,
	card: cardReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
})

export default rootReducer