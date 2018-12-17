import * as React from 'react';
import LanguageToggler from 'components/LanguageToggler';
import Locale from 'services/locale/Locale';
import { Localized } from 'fluent-react/compat';
import Translated from 'components/Translated';

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <main>
        <section>
          <h1>Language toggler:</h1>
          <LanguageToggler />
        </section>

        <section>
          <h1>Using Localized:</h1>

          <Localized id='title'>
            <p>
              Title fallback
            </p>
          </Localized>

          <Localized id='today-is' $date={new Date()}>
            <p>
              {'Today is { DATETIME($date, month: "long", day: "numeric") }.'}
            </p>
          </Localized>

          <Localized id='unread-emails' $emails_count={2}>
            <p>{'Amount of emails: {$emails_count}'}</p>
          </Localized>
        </section>

        <section>
          <h1>Using Translated.tsx:</h1>

          <Translated id='title'>
            Title fallback
          </Translated>

          <Translated id='today-is' $date={new Date()}>
            <p>
              {'Today is { DATETIME($date, month: "long", day: "numeric") }.'}
            </p>
          </Translated>

          <Translated id='unread-emails' $emails_count={2}>
            <p>{'Amount of emails: {$emails_count}'}</p>
          </Translated>

        </section>

      </main>
    );
  }
}

export default App;
