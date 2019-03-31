import * as constActions from './const';
// import actionsApi from '../api/api';
// import { ApiEndPoints } from '../../../Constants/ApiHelper/ApiUrls';

export function getUsers() {
    return { type: constActions.GET_USERS_ASYNC};
}

export function addUser(userName) {
    return { type: constActions.ADD_USER_ASYNC, userName};
}
