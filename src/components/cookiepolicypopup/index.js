import React from 'react';
import styles from './styles.module.css';
import { CrossMarkIcon, RightMarkIcon } from '../../resources/svg';

const CookiePolicyPopUp = (props) => {
  const { setShowCookiePopUp } = props;
  return (
    <div className={styles.cookiePolicyMainContainerStyles}>
      <div className={styles.cookiePolicyInnerContainerStyles}>
        <p className={styles.cookiePolicyTextStyles}>
          This site users functional cookies to gather insights and improve
          end-user experience.<span>Cookie policy</span>
        </p>
        <div className={styles.cookiePolicyRightContainerStyles}>
          <p
            className={styles.agreeTextStyles}
            onClick={() => setShowCookiePopUp(false)}
          >
            <RightMarkIcon
              customStyles={styles.rightMarkIconStyles}
              pathStyles={styles.rightMarkIconPathStyles}
            />
            Agree
          </p>
          <p
            className={styles.declineTextStyles}
            onClick={() => setShowCookiePopUp(false)}
          >
            <CrossMarkIcon
              customStyles={styles.crossMarkIconStyles}
              pathStyles={styles.crossMarkIconPathStyles}
            />
            Decline
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPopUp;
