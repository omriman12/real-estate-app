import { put, takeEvery, all } from 'redux-saga/effects'
import * as constActions from './const';

function* gethUsers() {
   console.log('fetchUser inside');
   try {
      let users = ['omri', 'omri2'];
    //   const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: constActions.GET_USERS_SUCCESS, users: users});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* addUser(action) {
   console.log(`addUser inside`);
   console.log(action.userName);
   try {
    //   const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: constActions.ADD_USER_SUCCESS, userName: action.userName});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchGetUsersAsync() {
   yield takeEvery(constActions.GET_USERS_ASYNC, gethUsers)
}

function* watchAddUserAsync() {
   yield takeEvery(constActions.ADD_USER_ASYNC, addUser)
}

export function* rootSaga() {
   yield all([
      watchGetUsersAsync(),
      watchAddUserAsync()
   ])
}
