import * as qs from 'qs';

export default class Querystring {
  public static parse(): any {
    return qs.parse(window.location.search, { ignoreQueryPrefix: true });
  }

  public static getValueByKey(key: string): string {
    return Querystring.parse()[key];
  }

  public static stringify(obj: object): string {
    return qs.stringify(obj, { encode: true, addQueryPrefix: true });
  }
}
