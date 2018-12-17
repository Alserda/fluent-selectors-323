import axios, { AxiosResponse } from 'axios';

import { IPureAction, ActionType } from 'data/actions';
import { FluentBundle } from 'fluent/compat';
import { negotiateLanguages } from 'fluent-langneg/compat';
import { IChangeLocalePayload } from './localeModels';
import { put } from 'redux-saga/effects';
import { doChangeLocales } from './localeActions';

import Locale from 'services/locale/locale';


export async function fetchMessages(locale: string): Promise<{ [index: string]: string }> {
  const response: AxiosResponse<string> = await axios.get(`${window.location.origin}/locale/${locale}.ftl`);

  return { [locale]: response.data };
}


const generateBundles = function* (currentLocales: string[], messages: object): any {
  for (const locale of currentLocales) {
    const bundle = new FluentBundle(locale);
    bundle.addMessages(messages[locale]);

    yield bundle;
  }
};


export function* onChangeLocales(action: IPureAction<ActionType.CHANGE_LOCALES_REQUEST, string[]>): any {
  const currentLocales = negotiateLanguages(
    action.payload,
    Locale.available,
    { defaultLocale: Locale.default }
  );

  const fetched = yield Promise.all(
    currentLocales.map(fetchMessages)
  );

  const messages = fetched.reduce(
    (obj: object, cur: object) => Object.assign(obj, cur)
  );

  const payload: IChangeLocalePayload = {
    userLocales: action.payload,
    currentLocales,
    bundles: generateBundles(currentLocales, messages),
  };

  yield put(doChangeLocales(payload));
}
