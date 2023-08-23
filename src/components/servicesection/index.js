import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Button from '../button';
import { LeftArrow, RightArrow } from '../../resources/svg';

const ServiceSection = (props) => {
  const {
    stepsData,
    stepCount,
    setStepCount,
    serviceId,
    serviceName,
    serviceDesc,
    serviceCardId,
  } = props;
  const [CardClassName, setCardClassName] = useState();

  useEffect(() => {
    const cardsEles = [...document.querySelectorAll(`#${serviceCardId}`)];
    const classNamesArr = cardsEles.map((item) => item.className);
    setCardClassName(classNamesArr);

    const eles = [...document.querySelectorAll('#serviceSection')];
    window.onscroll = (e) => {
      eles.forEach((item) => {
        if (item.getBoundingClientRect().top < -400) {
          item.classList.remove(styles.sectionBgStyles);
        } else if (item.getBoundingClientRect().top < window.innerHeight / 2) {
          item.classList.add(styles.sectionBgStyles);
        } else {
          item.classList.remove(styles.sectionBgStyles);
        }
      });
    };
  }, [stepCount]);

  const approachStepCard = (step) => {
    return (
      <div
        className={styles.approachCardStyles}
        style={{ background: step.bgColor }}
      >
        <div></div>
        <div className={styles.stepImageStyles}>
          <img
            src={step.image}
            alt="step icon"
            className={styles.imageWidthStyles}
          />
        </div>
        <p
          className={styles.stepNameStyles}
          style={{ color: step.color, borderTop: `1px solid ${step.color}33` }}
        >
          {step.id}.{step.name}
        </p>
      </div>
    );
  };

  const handleRightClick = () => {
    const cardsEles = [...document.querySelectorAll(`#${serviceCardId}`)];
    cardsEles.forEach((item, index) => {
      if (index === 0) {
        item.classList.remove(item.className);
        item.classList.add(CardClassName[CardClassName.length - 1]);
      } else {
        item.classList.remove(item.className);
        item.classList.add(CardClassName[index - 1]);
      }
    });
    if (stepCount === stepCount.length) {
      setStepCount(1);
    } else {
      setStepCount(stepCount + 1);
    }
  };

  const handleLeftClick = () => {
    const cardsEles = [...document.querySelectorAll(`#${serviceCardId}`)];
    cardsEles.forEach((item, index) => {
      item.classList.remove(item.className);
      if (index === cardsEles.length - 1) {
        item.classList.add(CardClassName[0]);
      } else {
        item.classList.add(cardsEles[index + 1].className);
      }
    });
    if (stepCount === 1) {
      setStepCount(stepCount.length);
    } else {
      setStepCount(stepCount - 1);
    }
  };

  return (
    <div
      className={styles.serviceSectionMainContainerStyles}
      id="serviceSection"
    >
      <div
        className={
          serviceId === '02'
            ? styles.serviceSectionInnerContainerStylesTwo
            : styles.serviceSectionInnerContainerStyles
        }
      >
        <div className={styles.serviceSectionTopStyles}>
          <h5 className={styles.serviceHeadTextStyles}>
            {serviceId}.{serviceName}
          </h5>
          <p className={styles.serviceDecTextStyles}>{serviceDesc}</p>
        </div>
        <div className={styles.approachStepsContainerStyles}>
          <div className={styles.approachStepsCardsContainerStyles}>
            {stepsData.map((item, index) => {
              return (
                <div
                  className={
                    (index === 0 && styles.approachCardOneStyles) ||
                    (index === 1 && styles.approachCardTwoStyles) ||
                    // (index > 1 && styles.approachCardHideStyles)||
                    // (index === 2 && styles.approachCardThreeStyles) ||
                    // (index > 2 && styles.approachCardHideStyles)
                    // (index === 3 && styles.approachCardFourStyles) ||
                    (index === stepsData.length - 1 &&
                      styles.approachCardLeftHideStyles) ||
                    (index > 1 && styles.approachCardHideStyles)
                  }
                  key={index}
                  id={serviceCardId}
                >
                  {approachStepCard(item)}
                  {/* <div className={styles.approachStepCardStyles}>
                    <p className={styles.stepNumberTextStyles}>0{item.id}</p>
                    <p className={styles.stepNameTextStyles}>{item.name}</p>
                  </div> */}
                </div>
              );
            })}
          </div>
          <div className={styles.approachStepsBottomContainerStyles}>
            <div className={styles.approachStepsButtonGroupStyles}>
              <Button
                btnName={
                  <LeftArrow
                    PathStyles={
                      stepCount === 1
                        ? styles.leftArrowDisablePathStyles
                        : styles.leftArrowPathStyles
                    }
                  />
                }
                customBtnStyles={
                  stepCount === 1
                    ? styles.disabledButtonStyles
                    : styles.leftArrowBtnStyles
                }
                onClick={() => stepCount !== 1 && handleLeftClick()}
              />
              <Button
                btnName={
                  <RightArrow
                    PathStyles={
                      stepCount === stepsData.length
                        ? styles.rightArrowDisablePathStyles
                        : styles.rightArrowPathStyles
                    }
                  />
                }
                customBtnStyles={
                  stepCount === stepsData.length
                    ? styles.disabledButtonStyles
                    : styles.rightArrowBtnStyles
                }
                onClick={() =>
                  stepCount !== stepsData.length && handleRightClick()
                }
              />
            </div>
            <p className={styles.stepCounterTextStyles}>
              0{stepCount}/0{stepsData.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
