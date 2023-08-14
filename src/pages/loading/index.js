import React, { useEffect } from 'react';
import styles from './styles.module.css';
const Loading = () => {
  useEffect(() => {
    document.body.style.cssText = 'overflow:hidden';
    return () => {
      document.body.style.cssText = 'overflow:auto';
    };
  }, []);
  return (
    <div className={styles.loadingMainContainerStyles}>
      <div className={styles.loadingContainerStyles}>
        <svg
          //   width="100"
          //   height="100"
          className={styles.imageStyles}
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={{ mixBlendMode: 'difference' }}>
            <path
              d="M6.16514 24C4.73394 24 3.66055 23.6514 2.94495 22.9541C2.24771 22.2752 1.89908 21.1468 1.89908 19.5688V14.6697C1.89908 14.0459 1.76147 13.5872 1.48624 13.2936C1.21101 13 0.715596 12.844 0 12.8257L0 10.9817C0.697248 10.9633 1.18349 10.8073 1.45872 10.5138C1.75229 10.2202 1.89908 9.76147 1.89908 9.13761V4.34862C1.89908 2.77064 2.24771 1.65138 2.94495 0.990824C3.66055 0.330275 4.73394 0 6.16514 0L6.66055 0V1.81651H6.22018C5.48624 1.81651 4.9633 2 4.65138 2.36697C4.3578 2.73394 4.21101 3.40367 4.21101 4.37615V9.30275C4.21101 10.6972 3.69725 11.5505 2.66972 11.8624V11.945C3.69725 12.2569 4.21101 13.1101 4.21101 14.5046V19.5413C4.21101 20.5138 4.3578 21.1835 4.65138 21.5505C4.9633 21.9174 5.48624 22.1009 6.22018 22.1009H6.66055V24H6.16514Z"
              fill="#000AFF"
            />
            <path
              d="M12.2514 20.7523L7.26971 6.52294H9.66421L12.6092 15.5505L13.5449 18.5505H13.6C13.9486 17.3761 14.2605 16.3761 14.5358 15.5505L17.5358 6.52294H19.8477L14.7284 20.7523H12.2514Z"
              fill="#000AFF"
            />
            <path
              d="M20.4579 24V22.1009H20.8983C21.6506 22.1009 22.1735 21.9266 22.4671 21.578C22.7607 21.2477 22.9075 20.5963 22.9075 19.6239V14.5872C22.9075 13.1927 23.4212 12.3394 24.4488 12.0275V11.945C23.4212 11.633 22.9075 10.7798 22.9075 9.38532V4.45872C22.9075 3.46789 22.7515 2.77982 22.4396 2.39449C22.146 2.00917 21.6322 1.81651 20.8983 1.81651H20.4579V0L20.9533 0C22.3845 0 23.4488 0.348624 24.146 1.04587C24.8616 1.72477 25.2194 2.85321 25.2194 4.43119V9.22018C25.2194 9.84404 25.357 10.3028 25.6322 10.5963C25.9075 10.8899 26.4029 11.0459 27.1185 11.0642V12.9083C26.4212 12.9266 25.9258 13.0826 25.6322 13.3761C25.357 13.6697 25.2194 14.1284 25.2194 14.7523V19.6514C25.2194 21.2294 24.8616 22.3486 24.146 23.0092C23.4488 23.6697 22.3845 24 20.9533 24H20.4579Z"
              fill="#000AFF"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;