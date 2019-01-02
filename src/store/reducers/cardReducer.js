const initState = {
	cards: [
		{id: '1', front: "GCP Datastore", back: "NoSQL"},
		{id: '2', front: "GCP BigQury", back: "Table Partition"},
		{id: '3', front: "GCP Private", back: "Subnet"}

	]
}

const cardReducer = (state = initState, action) => {
	switch (action.type){
		case 'CREATE_CARD':
			console.log('created card', action.card)
			return state;
		case 'CREATE_CARD_ERROR':
			console.log('create card error', action.error)
			return state;
		default:
			return state;
	}
}

export default cardReducer