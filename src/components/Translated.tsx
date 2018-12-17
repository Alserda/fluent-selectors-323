import * as React from 'react';
import { connect } from 'react-redux';
import { Localized, LocalizedProps } from 'fluent-react/compat';

import { IRootState } from 'store';
import { translationsAvailable } from 'data/locale/localeSelectors';


interface IStateToProps {
  shouldTranslate: boolean;
}

interface IProps extends LocalizedProps, IStateToProps { }

const Translated: React.SFC<IProps> = ({ children, shouldTranslate, ...localizationProps }) => {
  if (!shouldTranslate) {
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }

  if (typeof children === 'string') {
    return (
      <Localized {...localizationProps}>
        {children}
      </Localized>
    );
  }

  return (
    <Localized {...localizationProps}>
      {children}
    </Localized>
  );
};


const mapStateToProps = (state: IRootState): IStateToProps => ({
  shouldTranslate: translationsAvailable(state),
});

export default connect(mapStateToProps)(Translated);
