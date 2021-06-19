
import React from 'react';
import Logo from '../logo/logo';


const CLASS_NAME_FOOTER = 'logo__link logo__link--light';

function Footer() {

  return(
    <footer className="page-footer">
      <Logo className={CLASS_NAME_FOOTER} />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}


export default Footer;
