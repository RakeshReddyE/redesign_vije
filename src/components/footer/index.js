import React, { useState } from 'react';
import styles from './styles.module.css';
import { RightUpArrow } from '../../resources/svg';
import { swedenFlag } from '../../resources/images';

const Footer = () => {
  const [email, setEmail] = useState({ email: '' });
  const renderFooterBottomSection = () => {
    return (
      <div className={styles.footerBottomContainerStyle}>
        <div className={styles.footerLinksContainerStyles}>
          <div className={styles.addressLinkContainerStyles}>
            <p className={styles.addressLinkTextStyles}>
              HETCH AB, HENCKELS TORG 3,
            </p>
            <p className={styles.addressLinkTextStyles}>
              252 25 HELSINGBORG, SWEDEN
            </p>
          </div>
          <div className={styles.footerLinksSubContainerStyles}>
            <p className={styles.footerLinkTextStyles}>HEJ@VILJETECH.COM</p>
            <p className={styles.footerLinkTextStyles}>+46(0)724430170</p>
          </div>
          <div className={styles.footerLinksSubContainerStyles}>
            <p className={styles.footerLinkTextStyles}>INSTAGRAM</p>
            <p className={styles.footerLinkTextStyles}>LINKEDIN</p>
          </div>
          <div className={styles.footerLinksSubContainerStyles}>
            <p className={styles.footerLinkTextStyles}>TERMS & SERVICES</p>
            <p className={styles.footerLinkTextStyles}>COOKIE POLICY</p>
          </div>
        </div>
        <div className={styles.footerBottomBottomStyles}>
          <div>
            <p className={styles.allRightsTextStyles}>
              © 2023 - ALL RIGHTS RESERVED
            </p>
            <p className={styles.allRightsTextStyles}>
              REGISTRATION NO - 123xXX
            </p>
          </div>
          <div className={styles.flagImageContainerStyles}>
            <img
              src={swedenFlag}
              alt="sweden flag"
              className={styles.imageWidthStyles}
            />
          </div>
        </div>
      </div>
    );
  };
  const renderFooterTopSection = () => {
    return (
      <div className={styles.footerTopContainerStyles}>
        <div className={styles.footerHeadingContainerStyles}>
          <h2 className={styles.footerHeadingTextStyles}>
            Get in touch
            <RightUpArrow
              customStyles={styles.rightUpArrowStyles}
              pathStyles={styles.rightUpArrowPathStyles}
            />
          </h2>
        </div>
        <div className={styles.footerTopRightContainerStyles}>
          <p className={styles.footerTopDescTextStyles}>
            Stay up to date on projects we’ve recently launched, what we’re
            working on, and other news.
          </p>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className={styles.emailInputStyles}
            value={email.email}
            onChange={(e) => setEmail({ email: e.target.value })}
          />
          <p
            className={styles.subscribeTextStyles}
            onClick={() => {
              console.log(email);
              setEmail({ email: '' });
            }}
          >
            Subscribe
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.footerMainContainerStyles}>
      {renderFooterTopSection()}
      {renderFooterBottomSection()}
    </div>
  );
};

export default Footer;
