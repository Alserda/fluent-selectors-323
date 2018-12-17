declare module 'fluent/compat' {
  class FluentBundle {
    constructor(locales: string | string[]);

    addMessages(source: string): Error[];
  }
}

declare module 'fluent-react/compat' {
  interface LocalizationProviderProps {
    bundles: any;
  }

  interface LocalizedProps {
//    id: string;
    [prop: string]: any;
  }

  class LocalizationProvider extends React.Component<LocalizationProviderProps> {}

  class Localized extends React.Component<LocalizedProps> {}
}


declare module 'fluent-langneg/compat' {
  interface LangNegOptions {
    defaultLocale: string;
  }

  function negotiateLanguages(
    requested: string[],
    available: string[],
    options?: LangNegOptions): string[];
}
