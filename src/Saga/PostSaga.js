import axios from 'axios';
import { call,put, takeLatest } from 'redux-saga/effects'

export function* watchFetchPost(){
    yield takeLatest('FETCH_POST_REQUEST', workFetchPost);
}


export function* workFetchPost() {
    try {
      // Try to call the API
      const uri = `https://jsonplaceholder.typicode.com/posts`;
      const response = yield call(axios.get, uri);
  
      // Dispatch the action to the reducers
      yield put({
        type: 'FETCH_POST_SUCCESS',
        payload: response.data
      });
    } catch (error) {

        yield put({
            type: 'FETCH_POST_FAILED',
            payload: error
          });

      // Act on the error
      console.log('Request failed! Could not fetch post.');
    }
  }