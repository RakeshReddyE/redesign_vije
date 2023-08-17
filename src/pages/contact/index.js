import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import {
  bharathProfilePic,
  idaAlfonsiProfilePic,
} from '../../resources/images';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import { CrossMarkIcon } from '../../resources/svg';

const Contact = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const profilesData = [
    {
      image: bharathProfilePic,
      name: 'Bharath Panyala',
      designation: 'Chief Executive Officer, Vilje Tech',
      mail: 'bharath@viljetech.com',
      phoneNumber: '072 44 30 170',
    },
    {
      image: idaAlfonsiProfilePic,
      name: 'Ida Alfonsi',
      designation: 'Communication Manager, Vilje Tech',
      mail: 'Ida@viljetech.com',
      phoneNumber: '072 44 30 170',
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('Thank you for contacting us');
    setShowPopUp(true);
  };
  const renderPopUp = () => {
    return (
      <div className={styles.popUpContainerStyles}>
        <div
          className={
            // showPopUp ?
            styles.popUpContentStyles
            // : styles.popUpContentHideStyles
          }
        >
          <div className={styles.popUpContentInnerStyles}>
            <p className={styles.popUpContentTextStyles}>
              Thank you for writing to us, our team will respond back as soon as
              possible. Cheers!
            </p>
            <p
              className={styles.closeTextStyles}
              onClick={() => setShowPopUp(false)}
            >
              <CrossMarkIcon
                customStyles={styles.crossMarkIconStyles}
                pathStyles={styles.crossMarkIconPathStyles}
              />
              Close
            </p>
          </div>
        </div>
      </div>
    );
  };
  const renderProfilesRightSection = () => {
    return (
      <div className={styles.profilesRightContainerStyles}>
        {profilesData.map((item, index) => (
          <div key={index} className={styles.profileCardStyles}>
            <div className={styles.profileImageStyles}>
              <img
                src={item.image}
                alt="profile pic"
                className={styles.imageWidthStyles}
              />
            </div>
            <div className={styles.profileMiddleContainerStyles}>
              <p className={styles.profileNameTextStyles}>{item.name}</p>
              <p className={styles.designationTextStyles}>{item.designation}</p>
            </div>
            <div className={styles.profileBottomContainerStyles}>
              <p className={styles.mailTextStyles}>{item.mail}</p>
              <p className={styles.phoneNumberTextStyles}>{item.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const renderContactFormRightSection = () => {
    return (
      <form
        className={styles.contactFormStyles}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.contactFormInputsContainerStyles}>
          <input
            type={'text'}
            name="name"
            placeholder={'Full name*'}
            className={styles.inputTextViewStyle}
          />
          <input
            type={'email'}
            name="email"
            placeholder={'Email address*'}
            className={styles.inputTextViewStyle}
          />
          <input
            type={'text'}
            name="company"
            placeholder={'Company'}
            className={styles.inputTextViewStyle}
          />
          <textarea
            name="message"
            placeholder={'Tell us about your project*'}
            className={styles.inputTextAreaViewStyle}
          />
        </div>
        <div className={styles.contactFormBottomStyles}>
          <p className={styles.privacyPolicyTextStyles}>
            <input type="checkbox" className={styles.inputCheckboxViewStyle} />I
            read and agree with Vilje Tech’s
            <span onClick={() => window.open('/privacypolicy', '_blank')}>
              privacy policy
            </span>
          </p>
          <button className={styles.sendMessageTextStyles}>Send message</button>
        </div>
      </form>
    );
  };
  return (
    <div className={styles.contactMainContainerStyles}>
      <NavBar />
      <div className={styles.contactContainerStyles}>
        <h2 className={styles.contactHeadingTextStyles}>
          Wanna say hi or have a project, we’d love to hear from you.
        </h2>
        <div className={styles.profilesContainerStyles}>
          <p className={styles.idNumberTextStyles}>{`{01}`}</p>
          {renderProfilesRightSection()}
        </div>
        <div className={styles.contactFormContainerStyles}>
          <p className={styles.idNumberTextStyles}>{`{02}`}</p>
          {renderContactFormRightSection()}
        </div>
      </div>
      <Divider customDividerStyles={styles.customDividerStyles} />
      <Footer
        theme="dark"
        footerBottom={true}
        customFooterBottomStyles={styles.footerStyles}
        customFooterMainContainerStyles={styles.footerMainContainerStyles}
      />
      {showPopUp && renderPopUp()}
    </div>
  );
};

export default Contact;
