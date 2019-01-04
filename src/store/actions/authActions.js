export const signIn = () => {
	return (dispatch, firebase) => {
		firebase.auth.signInWithPopup()
		.then(() => {
			dispatch({ type: 'LOGIN_SUCCESS'});
		}).catch((err) => {
			dispatch({type: "LOGIN_ERROR", err})
		});
	}
}

export default signIn