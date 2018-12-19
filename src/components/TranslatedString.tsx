import * as React from 'react';
import Locale from 'services/locale/Locale';
import Translated from 'components/locale/Translated';

interface IProps {
  input: string;
}

const TranslatedString: React.SFC<IProps> = ({ input }) => {
  if (typeof input === 'undefined') {
    return null;
  }

  const translatableId = Locale.createTranslatableId(input);

  return (
    <Translated id={translatableId}>
      {input}
    </Translated>
  );
};

export default TranslatedString;
