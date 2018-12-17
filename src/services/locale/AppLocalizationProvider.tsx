import * as React from 'react';
import { connect } from 'react-redux';
import { LocalizationProvider } from 'fluent-react/compat';

import { IRootState } from 'store';
import { translationsAvailable } from 'data/locale/localeSelectors';


interface IStateToProps {
  bundles: any;
  translationsAvailable: boolean;
}

interface IProps extends IStateToProps { }

class AppLocalizationProvider extends React.Component<IProps> {
  public render(): React.ReactNode {
    if (!this.props.translationsAvailable) {
      return this.props.children;
    }

    return (
      <LocalizationProvider bundles={this.props.bundles}>
        {this.props.children}
      </LocalizationProvider>
    );
  }
}

const mapStateToProps = (state: IRootState): IStateToProps => ({
  bundles: state.locale.bundles,
  translationsAvailable: translationsAvailable(state),
});


export default connect(mapStateToProps)(AppLocalizationProvider);
