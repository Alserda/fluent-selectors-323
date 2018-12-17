import { ActionType } from '../actions';

import * as localeMutators from './localeMutators';
import createReducer from 'data/services/createReducer';


export interface ILocaleState {
  userLocales: string[];
  currentLocales: string[];
  bundles: any;

  initialized: boolean;
  translationsAvailable: boolean;
}

const initialState: ILocaleState = {
  userLocales: [],
  currentLocales: [],
  bundles: undefined,

  initialized: false,
  translationsAvailable: false,
};

const handlers: { [index: number]: any } = {
  [ActionType.CHANGE_LOCALES_RESPONSE]: localeMutators.mutateLocales,
  [ActionType.NO_LOCALES_AVAILABLE]: localeMutators.mutateNoTranslationsAvailable,
};

export const localeReducer = createReducer<ILocaleState>(initialState, handlers);
