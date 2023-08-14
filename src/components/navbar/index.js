import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import {
  Logo,
  MinusIcon,
  MobileLogo,
  PlusIcon,
  RightDownArrow,
  RightThickTriangleIcon,
} from '../../resources/svg';
import { useLocation, useNavigate } from 'react-router';
import { AppDataContext } from '../../providers/appDataProvider';

const NavBar = (props) => {
  const { theme } = props;
  const { currentLanguage, setLanguage, strings } = useContext(AppDataContext);
  const { navbarStrings } = strings;
  const navigate = useNavigate();
  const location = useLocation();
  // const langRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    !showMenu && setShowLanguagePopup(false);
    document.body.style.cssText = showMenu
      ? 'overflow:hidden'
      : 'overflow:auto';
    setActiveLink(location.pathname);
  }, [showMenu, location.pathname]);

  // useEffect(() => {
  //   const lanBtn = document.getElementById('abc');
  //   const engBtn = document.getElementById('ENGLISH');
  //   const sweBtn = document.getElementById('SWEDISH');

  //   const handleClickOutside = (event) => {
  //     console.log(event.target, lanBtn);
  //     console.log(lanBtn.contains(event.target), 'condition');
  //     if (lanBtn.contains(event.target)) {
  //       setShowLanguagePopup(false);
  //     }
  //   };
  //   const handleEscapeKey = (event) => {
  //     if (event.key === 'Escape') {
  //       setShowLanguagePopup(false);
  //     }
  //   };
  //   if (showLanguagePopup) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //     document.addEventListener('keydown', handleEscapeKey);
  //   }
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     document.removeEventListener('keydown', handleEscapeKey);
  //   };
  // }, [showLanguagePopup]);

  const navLinksData = [
    { title: strings.navbarStrings.about, route: '/about' },
    { title: strings.navbarStrings.projects, route: '/projects' },
    { title: strings.navbarStrings.services, route: '/services' },
    { title: strings.navbarStrings.contact, route: '/contact' },
    { title: strings.navbarStrings.insights, route: '/blogs' },
  ];

  const handleLinkClick = (path) => {
    navigate(path);
    setActiveLink(path);
    setShowMenu(false);
  };
  const changeLanguage = (language) => {
    setShowLanguagePopup(false);
    setLanguage(language);
  };

  const renderLanguageButton = () => {
    return (
      <div
        className={
          showLanguagePopup
            ? styles.languageSelectionContainerStyles
            : styles.languageButtonContainerStyles
        }
        onClick={() => {
          !showLanguagePopup && setShowLanguagePopup(true);
        }}
        // ref={langRef}
      >
        {showLanguagePopup ? (
          <>
            {['English', 'Swedish'].map((item) => (
              <p
                key={item}
                className={
                  currentLanguage === item
                    ? theme
                      ? styles.activeLanguageDarkTextStyles
                      : styles.activeLanguageTextStyles
                    : theme
                    ? styles.inActiveLanguageDarkTextStyles
                    : styles.inActiveLanguageTextStyles
                }
                onClick={() => changeLanguage(item)}
                id={item}
              >
                {currentLanguage === item && (
                  <RightThickTriangleIcon
                    color={theme ? '#000AFF' : '#00ff9b'}
                  />
                )}
                {item}
              </p>
            ))}
          </>
        ) : (
          <>
            <p className={styles.languageTypeTextStyles}>
              {currentLanguage === 'ENGLISH' ? 'ENGLISH' : 'SWEDISH'}
              {/* {currentLanguage} */}
            </p>
            <RightDownArrow
              color={theme && '#fff'}
              customStyles={styles.RightDownArrowStyles}
            />
          </>
        )}
      </div>
    );
  };
  const renderNavbar = () => {
    return (
      <div
        className={
          theme === 'dark'
            ? showMenu
              ? styles.navBarDarkContainerStyles
              : styles.navbarLightStyles
            : showMenu
            ? styles.navBarContainerStyles
            : styles.navbarDarkStyles
        }
      >
        <div
          className={styles.navbarLeftStyles}
          onClick={() => handleLinkClick('/')}
        >
          <Logo
            color={theme === 'dark' ? (showMenu ? '#fff' : '#000') : '#000'}
            customStyles={styles.logoStyles}
          />
          <MobileLogo
            color={theme === 'dark' ? '#fff' : '#000'}
            customStyles={styles.mobileLogoStyles}
          />
        </div>
        <div className={styles.languageButtonViewStyles}>
          {showMenu && renderLanguageButton()}
        </div>
        <div
          className={styles.navbarRightStyles}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <MinusIcon color={theme === 'dark' && showMenu ? '#fff' : '#000'} />
          ) : (
            <PlusIcon color={theme === 'dark' && showMenu ? '#fff' : '#000'} />
          )}
          <p className={styles.menuTextStyles}>
            {showMenu ? navbarStrings.close : navbarStrings.menu}
          </p>
        </div>
      </div>
    );
  };
  const renderNavbarFooterSection = () => {
    return (
      <div
        className={
          theme
            ? styles.footerDarkBottomContainerStyle
            : styles.footerBottomContainerStyle
        }
      >
        <div className={styles.footerLeftContainerStyles}>
          <p
            className={
              theme ? styles.addressDarkTextStyles : styles.addressTextStyles
            }
          >
            HETCH AB, HENCKELS TORG 3,
          </p>
          <p
            className={
              theme ? styles.addressDarkTextStyles : styles.addressTextStyles
            }
          >
            252 25 HELSINGBORG, SWEDEN
          </p>
        </div>
        <div className={styles.footerMiddleContainerStyles}>
          <p
            className={
              theme ? styles.footerDarkLinkStyles : styles.footerLinkStyles
            }
          >
            HEJ@VILJETECH.COM
          </p>
          <p
            className={
              theme ? styles.footerDarkLinkStyles : styles.footerLinkStyles
            }
          >
            +46(0)724430170
          </p>
        </div>
        <div className={styles.footerRightContainerStyles}>
          <p
            className={
              theme ? styles.footerDarkLinkStyles : styles.footerLinkStyles
            }
          >
            INSTAGRAM
          </p>
          <p
            className={
              theme ? styles.footerDarkLinkStyles : styles.footerLinkStyles
            }
          >
            LINKEDIN
          </p>
        </div>
      </div>
    );
  };
  const renderNavbarMenuSection = () => {
    return (
      <div
        className={
          showMenu
            ? (theme === 'dark' && styles.navbarDarkMenuContainerStyles) ||
              styles.navbarMenuOpenContainerStyles
            : styles.navbarMenuCloseContainerStyles
        }
      >
        <div className={styles.navbarInnerContainerStyles}>
          <div className={styles.navbarTopMenuLinksContainerStyles}>
            <div className={styles.languageButtonMobileViewStyles}>
              {showMenu && renderLanguageButton()}
            </div>
            <div className={styles.navLinksContainerStyles}>
              {navLinksData?.map((navLink) => (
                <p
                  className={
                    activeLink === navLink.route
                      ? theme === 'dark'
                        ? styles.navLinkActiveDarkTextStyles
                        : styles.navLinkActiveTextStyles
                      : theme === 'dark'
                      ? styles.navLinkDarkTextStyles
                      : styles.navLinkTextStyles
                  }
                  onClick={() => handleLinkClick(navLink.route)}
                  key={navLink.title}
                >
                  {navLink.title}
                  {activeLink === navLink.route && '*'}
                </p>
              ))}
            </div>
          </div>
          {renderNavbarFooterSection()}
        </div>
      </div>
    );
  };
  return (
    <div className={[styles.navbarMainContainerStyles].join(' ')}>
      {renderNavbar()}
      {renderNavbarMenuSection()}
    </div>
  );
};

export default NavBar;
