export const signIn = () => {
	return (dispatch, getState, {getFirebase}) => {
		console.log(getFirebase)
		const firebase = getFirebase()
		firebase.auth.signInWithPopup()
		//.then(result => {
		//const user = result.user;
		//console.log(user);
		//dispatch({ type: 'LOGIN_SUCCESS'})
		//.catch((err) => {
		//	dispatch({type: "LOGIN_ERROR", err})
		//});
	//})


	}
}

export default signIn