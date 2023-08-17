import React from 'react';
import styles from './styles.module.css';
import { RightUpArrow } from '../../resources/svg';

const ServiceCard = (props) => {
  const { service, customStyles } = props;
  return (
    <div
      className={[styles.serviceCardContainerStyles, customStyles].join(' ')}
    >
      <div className={styles.serviceContentContainerStyles}>
        <p className={styles.serviceNameTextStyles}>
          {service.id}.{service.name}
        </p>
        <div className={styles.serviceIonStyles}>
          <img
            src={service.icon}
            alt={`${service.name}`}
            className={styles.imageWidthStyles}
          />
        </div>
        <p className={styles.serviceDescTextStyles}>{service.desc}</p>
      </div>
      <RightUpArrow
        customStyles={styles.rightUpArrowStyles}
        pathStyles={styles.rightUpArrowPathStyles}
      />
    </div>
  );
};

export default ServiceCard;
