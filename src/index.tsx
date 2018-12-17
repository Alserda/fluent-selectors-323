import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import AppLocalizationProvider from 'services/locale/AppLocalizationProvider';

import { localeInstance } from 'services/locale/locale';

/* Redux */
import { store } from './store';

/* DOM element to render the application within */
const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <AppLocalizationProvider>
      <App />
    </AppLocalizationProvider>
  </Provider>,
  target,
);

localeInstance.init();
