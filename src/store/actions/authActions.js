import firebase from '../../config/fbConfig'

export const signIn = () => {
	return (dispatch) => {
		console.log("It is working")
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(() => {
			dispatch({ type: 'LOGIN_SUCCESS'});
		}).catch((err) => {
			dispatch({type: "LOGIN_ERROR", err})
		});
	}
};

export const signOut = () => {
	return (dispatch) => {
		firebase.auth().signOut()
		.then(
			dispatch({type: 'SIGNOUT_SUCCESS'})
		)
	}
};

