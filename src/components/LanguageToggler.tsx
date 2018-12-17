import * as React from 'react';
import { Language } from 'services/locale/Language';
import { doRequestChangeLocales } from 'data/locale/localeActions';
import { connect } from 'react-redux';


interface IDispatchToProps {
  doRequestChangeLocales(userLocales: string[]): any;
}

const LanguageToggler: React.SFC<IDispatchToProps> = (props) => {
  const languageItems = Object.keys(Language).map((langKey) => (
    <button
      onClick={() => props.doRequestChangeLocales([Language[langKey]])}
      key={langKey}
    >{langKey}</button>
  ));

  return (
    <div>
      {languageItems}
    </div>
  );
};

const mapDispatchToProps: IDispatchToProps = { doRequestChangeLocales };

export default connect(undefined, mapDispatchToProps)(LanguageToggler);
