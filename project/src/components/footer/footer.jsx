
import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';


const CLASS_NAME_FOOTER = 'logo__link logo__link--light';

function Footer({isIndex}) {

  return(
    <footer className="page-footer">
      <Logo className={CLASS_NAME_FOOTER} isIndex={isIndex} />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}


Footer.propTypes = {
  isIndex: PropTypes.bool,
};


export default Footer;
