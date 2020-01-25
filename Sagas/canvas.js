import { take, put, takeEvery } from 'redux-saga/effects';

/**
 * Handle display of the next loaded item
 * @param {*} action
 */
function* showNextItem() {
  // Tell the camera to lock controls and return to a safe position
  yield put({ type: 'RESET_CAMERA' });
  yield take('CAMERA_RESET_COMPLETE');

  yield put({ type: 'SHOW_NEXT_ITEM' });
  yield take('ITEM_DISPLAYED');
  yield put({ type: 'CAMERA_RESET' });
}

/**
 * Start pump sagas
 */
function* canvasFlow() {
  yield takeEvery('NEXT_ITEM', showNextItem);
}

export default canvasFlow;
