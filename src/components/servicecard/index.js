import React from 'react';
import styles from './styles.module.css';
import { RightUpArrow } from '../../resources/svg';

const ServiceCard = (props) => {
  const { service, customStyles, teamValues, iconStyles, customNameStyles } =
    props;
  return (
    <div
      className={[styles.serviceCardContainerStyles, customStyles].join(' ')}
    >
      <div className={styles.serviceContentContainerStyles}>
        <p
          className={[styles.serviceNameTextStyles, customNameStyles].join(' ')}
        >
          {service.id}.{service.name}
        </p>
        <div className={[styles.serviceIonStyles, iconStyles].join(' ')}>
          <img
            src={service.icon}
            alt={`${service.name}`}
            className={styles.imageWidthStyles}
          />
        </div>
        <p className={styles.serviceDescTextStyles}>{service.desc}</p>
      </div>
      {!teamValues && (
        <RightUpArrow
          customStyles={styles.rightUpArrowStyles}
          pathStyles={styles.rightUpArrowPathStyles}
        />
      )}
    </div>
  );
};

export default ServiceCard;
