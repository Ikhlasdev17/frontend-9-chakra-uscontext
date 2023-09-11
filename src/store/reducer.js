export const initialState = {
	products: [],
	isLoading: false,
	basket: [],
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCHING_PRODUCTS': {
			return {
				...state,
				isLoading: true,
			}
		}
		case 'FETCHED_PRODUCTS': {
			return {
				...state,
				products: action.payload,
				isLoading: false,
			}
		}
		case 'ADD_TO_BASKET': {
			const existItem = state.basket.findIndex(
				item => item.idMeal === action.payload.idMeal
			)

			if (existItem !== -1) {
				return state
			}

			return {
				...state,
				basket: [action.payload, ...state.basket],
			}
		}
		case 'REMOVE_FROM_BASKET': {
			return {
				...state,
				basket: state.basket.filter(item => item.idMeal !== action.payload),
			}
		}
	}
}
