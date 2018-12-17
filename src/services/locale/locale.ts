import { store } from 'store';
import { doRequestChangeLocales, setNoTranslationsAvailable } from 'data/locale/localeActions';
import Querystring from 'services/querystring';
import { Language } from './Language';
import { fetchMessages } from 'data/locale/localeSagas';


export default class Locale {
  public static available: string[] = Object.values(Language);
  public static default: string = Language.enUS;

  public async init(): Promise<void> {
    const valid = await this.validateAvailableLanguages();

    if (!valid) {
      store.dispatch(setNoTranslationsAvailable);
      // return;
      return console.error('Languages aren\'t available. Did you forget to add these to the locale folder?');
    }

    const languages = this.getRequestedLanguages();
    store.dispatch(doRequestChangeLocales(languages));
  }

  private async validateAvailableLanguages(): Promise<boolean> {
    try {
      await Promise.all(Locale.available.map(fetchMessages));

      return true;
    } catch {
      return false;
    }
  }

  private getRequestedLanguages(): string[] {
    const languageByQueryString = Querystring.getValueByKey('lang');

    if (!languageByQueryString) {
      return navigator.languages as string[];
    }

    return [languageByQueryString];
  }

  public static createTranslatableId(str: string): string {
    return str.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '').replace(/ /gi, '-').toLowerCase();
  }
}

export const localeInstance = new Locale();
