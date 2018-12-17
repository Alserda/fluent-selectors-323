import * as reselect from 'reselect';
import { IRootState } from 'store';
import { ILocaleState } from './localeReducer';

export const translationsAvailable = reselect.createSelector<IRootState, ILocaleState, boolean>(
  (state) => state.locale,
  (localeState) => localeState.initialized && localeState.translationsAvailable
);

