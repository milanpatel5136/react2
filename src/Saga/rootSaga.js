
import { all } from 'redux-saga/effects'
import { incrementWatcher,dicrementWatcher, multiWatcher} from './counterSaga';
import {watchFetchPost} from './PostSaga'


export default function* rootSaga()
{
    yield all ([incrementWatcher(),dicrementWatcher(),multiWatcher(),watchFetchPost()]);
}



