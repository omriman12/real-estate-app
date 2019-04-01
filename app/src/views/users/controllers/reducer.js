import * as constActions from './const';
import initialState from './initialState';

export default function reducer(state = initialState, action) {
    // console.log( action)
    switch (action.type) {
        case constActions.GET_USERS_SUCCESS:
            return Object.assign({}, state, {
                users: action.users
            });
        case constActions.ADD_USER_SUCCESS:
            return Object.assign({}, state, {
                users: [...state.users, action.userName]
            });
            
        default:
            return state;
    }
}
