import { IPureAction, ActionType } from 'data/actions';
import { IChangeLocalePayload } from './localeModels';

export const doRequestChangeLocales = (userLocales: string[]): IPureAction<ActionType.CHANGE_LOCALES_REQUEST, string[]> => ({
  type: ActionType.CHANGE_LOCALES_REQUEST,
  payload: userLocales,
});

export const doChangeLocales = (payload: IChangeLocalePayload): IPureAction<ActionType.CHANGE_LOCALES_RESPONSE, IChangeLocalePayload> => ({
  type: ActionType.CHANGE_LOCALES_RESPONSE,
  payload,
});

export const setNoTranslationsAvailable: IPureAction<ActionType.NO_LOCALES_AVAILABLE, void> = ({
  type: ActionType.NO_LOCALES_AVAILABLE,
  payload: undefined,
});
