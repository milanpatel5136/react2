
import {delay,put,takeLatest} from 'redux-saga/effects';


export function* incWorker() {
    yield delay(1000);
    yield put ({ type: 'PLUS' });
}

export function* incrementWatcher()
{
    yield takeLatest ('INCREMENT', incWorker)
}

export function* disWorker() 
{
    yield delay(1000);
    yield put ({ type: 'MINUS' });
}

export function* dicrementWatcher()
{
    yield takeLatest ('DICREMENT', disWorker)
}

export function* multiWorker() {
    yield delay(1000);
    yield put ({ type: 'MULTIPICATION' });
}

export function* multiWatcher()
{
    yield takeLatest ('MULTIPICATION', multiWorker)
}

