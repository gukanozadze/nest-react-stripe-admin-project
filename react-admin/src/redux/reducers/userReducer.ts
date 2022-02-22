import { User } from '../../models/user'

const initialState = {
	user: new User(),
}
interface Action {
	type: string
	user: User
}

// eslint-disable-next-line default-param-last
export const userReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			}
		default:
			return state
	}
}
