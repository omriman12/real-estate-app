import { combineReducers } from 'redux';
import users from './views/users/controllers/reducer';

const rootReducer = combineReducers({
    users,
});

export default rootReducer; 