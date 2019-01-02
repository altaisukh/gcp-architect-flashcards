export const createCard = (card) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		// make async call to database
		const firestore = getFirestore();
		firestore.collection('cards').add({
			...card, 
			authorId: "Jess",
			createdAt: new Date()

		}).then(() => {
			dispatch({ type: 'CREATE_CARD', card})
		}).catch((err) => {
			dispatch({ type: 'CREATE_CARD_ERROR', err})
		})
	}
};