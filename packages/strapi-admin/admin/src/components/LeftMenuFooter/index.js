/**
*
* LeftMenuFooter
*
*/

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types';

import LocaleToggle from 'containers/LocaleToggle';

import styles from './styles.scss';
import messages from './messages.json';
defineMessages(messages);

function LeftMenuFooter({ version }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className={styles.leftMenuFooter}>
      <FormattedMessage {...messages.poweredBy} />
      <a href="http://strapi.io" target="_blank"> Strapi</a>
      <span>&nbsp;(v{version})</span>
      <LocaleToggle />
    </div>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
