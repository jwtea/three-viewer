import { fork } from 'redux-saga/effects';
import canvasFlow from './Sagas/canvas';

/**
 * Group saga flows for features
 */
export default function* rootSaga() {
  yield fork(canvasFlow);
}
