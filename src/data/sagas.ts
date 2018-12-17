import { Action } from 'redux';
import { ActionType } from 'data/actions';
import { takeEvery } from 'redux-saga/effects';

import * as localeSagas from './locale/localeSagas';

/**
 * redux-saga doesn't support enum values by default,
 * so we're changing it to a boolean instead.
 *
 * @param type ActionType to check for.
 */
const patternMap = (type: ActionType) => (action: Action): boolean => (
  action.type === type
);

function* sagas(): any {
  yield takeEvery(patternMap(ActionType.CHANGE_LOCALES_REQUEST), localeSagas.onChangeLocales);
}

export default sagas;
