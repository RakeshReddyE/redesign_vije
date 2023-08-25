import React, { useState } from 'react';
import styles from './styles.module.css';
import { RightUpArrow } from '../../resources/svg';
import { swedenFlag } from '../../resources/images';
import { useNavigate } from 'react-router';

const Footer = (props) => {
  const {
    theme,
    footerBottom,
    customFooterBottomStyles,
    customFooterMainContainerStyles,
  } = props;
  const [email, setEmail] = useState({ email: '' });
  const navigate = useNavigate();
  const renderFooterTopSection = () => {
    return (
      <div className={styles.footerTopContainerStyles}>
        <div className={styles.footerHeadingContainerStyles}>
          <h2
            className={
              theme === 'dark'
                ? styles.footerHeadingDarkTextStyles
                : styles.footerHeadingTextStyles
            }
            onClick={() => navigate('/contact')}
          >
            Get in touch
            <RightUpArrow
              customStyles={styles.rightUpArrowStyles}
              pathStyles={
                theme
                  ? styles.rightUpArrowDarkPathStyles
                  : styles.rightUpArrowPathStyles
              }
            />
          </h2>
        </div>
        <div className={styles.footerTopRightContainerStyles}>
          <p
            className={
              theme
                ? styles.footerTopDescDarkTextStyles
                : styles.footerTopDescTextStyles
            }
          >
            Stay up to date on projects we’ve recently launched, what we’re
            working on, and other news.
          </p>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className={
              theme ? styles.emailInputDarkStyles : styles.emailInputStyles
            }
            value={email.email}
            onChange={(e) => setEmail({ email: e.target.value })}
          />
          <p
            className={
              theme
                ? styles.subscribeDarkTextStyles
                : styles.subscribeTextStyles
            }
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
  const renderFooterBottomSection = () => {
    return (
      <div
        className={[
          styles.footerBottomContainerStyle,
          customFooterBottomStyles,
        ].join(' ')}
      >
        <div className={styles.footerLinksContainerStyles}>
          <div className={styles.addressLinkContainerStyles}>
            <p
              className={
                theme === 'dark'
                  ? styles.addressLinkDarkTextStyles
                  : styles.addressLinkTextStyles
              }
            >
              HETCH AB, HENCKELS TORG 3,
            </p>
            <p
              className={
                theme === 'dark'
                  ? styles.addressLinkDarkTextStyles
                  : styles.addressLinkTextStyles
              }
            >
              252 25 HELSINGBORG, SWEDEN
            </p>
          </div>
          <div className={styles.footerLinksSubContainerStyles}>
            <p
              className={
                theme === 'dark'
                  ? styles.footerLinkDarkTextStyles
                  : styles.footerLinkTextStyles
              }
            >
              HEJ@VILJETECH.COM
            </p>
            <p
              className={
                theme === 'dark'
                  ? styles.footerLinkDarkTextStyles
                  : styles.footerLinkTextStyles
              }
            >
              +46(0)724430170
            </p>
          </div>
          <div className={styles.footerLinksSubContainerStyles}>
            <p
              className={
                theme === 'dark'
                  ? styles.footerLinkDarkTextStyles
                  : styles.footerLinkTextStyles
              }
            >
              INSTAGRAM
            </p>
            <p
              className={
                theme === 'dark'
                  ? styles.footerLinkDarkTextStyles
                  : styles.footerLinkTextStyles
              }
            >
              LINKEDIN
            </p>
          </div>
          <div className={styles.footerLinksSubContainerStyles}>
            <p
              className={
                theme === 'dark'
                  ? styles.footerLinkDarkTextStyles
                  : styles.footerLinkTextStyles
              }
            >
              TERMS & SERVICES
            </p>
            <p
              className={
                theme === 'dark'
                  ? styles.footerLinkDarkTextStyles
                  : styles.footerLinkTextStyles
              }
              onClick={() => window.open('/privacypolicy', '_blank')}
            >
              COOKIE POLICY
            </p>
          </div>
        </div>
        <div className={styles.footerBottomBottomStyles}>
          <div>
            <p
              className={
                theme === 'dark'
                  ? styles.allRightsDarkTextStyles
                  : styles.allRightsTextStyles
              }
            >
              © 2023 - ALL RIGHTS RESERVED
            </p>
            <p
              className={
                theme === 'dark'
                  ? styles.allRightsDarkTextStyles
                  : styles.allRightsTextStyles
              }
            >
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

  return (
    <div
      className={[
        styles.footerMainContainerStyles,
        customFooterMainContainerStyles,
      ].join(' ')}
    >
      {!footerBottom && renderFooterTopSection()}
      {renderFooterBottomSection()}
    </div>
  );
};

export default Footer;
