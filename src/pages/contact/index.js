import React, { useEffect } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import {
  bharathProfilePic,
  idaAlfonsiProfilePic,
} from '../../resources/images';
const Contact = () => {
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
      <form className={styles.contactFormStyles}>
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
            <span> privacy policy</span>
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
          Have a project or query, we would love to hear from you.
        </h2>
        <div className={styles.profilesContainerStyles}>
          <p className={styles.idNumberTextStyles}>01</p>
          {renderProfilesRightSection()}
        </div>
        <div className={styles.contactFormContainerStyles}>
          <p className={styles.idNumberTextStyles}>02</p>
          {renderContactFormRightSection()}
        </div>
      </div>
    </div>
  );
};

export default Contact;
