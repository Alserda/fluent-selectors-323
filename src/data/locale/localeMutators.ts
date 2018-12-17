import { ILocaleState } from './localeReducer';
import { IChangeLocalePayload } from './localeModels';

export const mutateLocales = (state: ILocaleState, payload: IChangeLocalePayload): ILocaleState => ({
  ...state,
  ...payload,
  initialized: true,
  translationsAvailable: true,
});

export const mutateNoTranslationsAvailable = (state: ILocaleState): ILocaleState => ({
  ...state,
  initialized: true,
  translationsAvailable: false,
});
