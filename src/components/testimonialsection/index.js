import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Divider from '../divider';
import Button from '../button';
import { LeftArrow, RightArrow } from '../../resources/svg';
// import { bannerImg1 } from '../../resources/images';

const TestimonialsSection = (props) => {
  const { customTestimonialContainerStyles } = props;
  const [showTestimonial, setShowTestimonial] = useState(0);
  useEffect(() => {}, []);
  const clientNamesData = [
    'Helsingborg',
    'Minc',
    'Vinnova',
    'RosholmDell',
    'Hetch',
  ];
  const clientTestimonials = [
    {
      desc: `Vilje Tech built our complex eye coordination training app and streamlined development efficiently and qualitatively from MVP to a complete mobile application. Our unique solution had several specially built functions which Vilje Tech developed. They had clear and transparent communication and were highly involved throughout the project; we will continue working together. We highly recommend Vilje Tech.`,
      clientName: `Michael Malmqvist (CIO, IMVI Labs, Sweden)`,
    },
    {
      desc: `Vilje Tech was in charge of building Bytboo's frontend when we rebuild the product from scratch. I am very happy with their work. Continuous updates along the way, pragmatic thinking presenting solutions to any obstacles we faced. The end result was spotless. I can definitely recommend Vilje Tech to any company in the same situation as Bytboo.`,
      clientName: `Herman Treschow (CEO, Bytboo AB)`,
    },
    {
      desc: `Vilje Tech has truly excelled in the reconstruction of our pre-existing website using our Figma design files. The scope of their work encompassed the frontend of our website, which was built in WordPress and Elementor. While the process and project management had occasional challenges as it was a slightly unconventional process for both parties, the end result has undeniably surpassed our expectations. The improved speed and responsiveness of our website are impressive, which has resulted in a high-performance website.`,
      clientName: `Marketing Manager, MRstudio`,
    },
  ];
  const handleRightClick = (index) => {
    if (index < clientTestimonials.length - 1) {
      setShowTestimonial(index + 1);
    }
  };
  const handleLeftClick = (index) => {
    if (index !== 0) {
      setShowTestimonial(index - 1);
    }
  };
  const testimonialCard = () => {
    return (
      <div className={styles.testimonialCardStyles}>
        {clientTestimonials.map((item, index) => {
          return (
            showTestimonial === index && (
              <React.Fragment key={index}>
                <p className={styles.testimonialContentTextStyles}>
                  {item.desc}
                </p>
                <p className={styles.testimonialClientNameTextStyles}>
                  {item.clientName}
                </p>
                <Divider />
                <div className={styles.testimonialBottomStyles}>
                  <div className={styles.featuresButtonGroupStyles}>
                    <Button
                      btnName={
                        <LeftArrow
                          PathStyles={
                            index === 0
                              ? styles.leftArrowDisablePathStyles
                              : styles.leftArrowPathStyles
                          }
                        />
                      }
                      customBtnStyles={
                        index === 0
                          ? styles.disabledButtonStyles
                          : styles.leftArrowBtnStyles
                      }
                      onClick={() => {
                        handleLeftClick(index);
                      }}
                    />
                    <Button
                      btnName={
                        <RightArrow
                          PathStyles={
                            index === clientTestimonials.length - 1
                              ? styles.rightArrowDisablePathStyles
                              : styles.rightArrowPathStyles
                          }
                        />
                      }
                      customBtnStyles={
                        index === clientTestimonials.length - 1
                          ? styles.disabledButtonStyles
                          : styles.rightArrowBtnStyles
                      }
                      onClick={() => {
                        handleRightClick(index);
                      }}
                    />
                  </div>
                  <p className={styles.testimonialClientNameTextStyles}>
                    {`0${index + 1}/0${clientTestimonials.length}`}
                  </p>
                </div>
              </React.Fragment>
            )
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={[
        styles.testimonialMainContainerStyles,
        customTestimonialContainerStyles,
      ].join(' ')}
    >
      <div className={styles.testimonialTopContainerStyles}>
        <div className={styles.testimonialTopLeftContainerStyles}>
          <p className={styles.testimonialLightDescTextStyles}>
            We are trusted by many <span>clients</span> and
            <span>partners</span> around Sweden:
          </p>
          <div className={styles.clientNamesListContainerStyles}>
            {clientNamesData.map((item, index) => (
              <div
                className={styles.clientNamesContainerStyles}
                key={index}
                // onMouseMove={(e) => {
                //   document.querySelector(
                //     `#hoveredImage${index}`
                //   ).style.left = `${e.clientX}px`;
                // }}
              >
                <p className={styles.clientNameTextStyles} key={index}>
                  {item}
                </p>
                {/* <div
                  className={styles.hoveredProjectImageStyles}
                  id={`hoveredImage${index}`}
                >
                  <img
                    src={bannerImg1}
                    className={styles.imageWidthStyles}
                    alt="project"
                  />
                </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* <div className={styles.testimonialTopRightContainerStyles}></div> */}
      </div>
      <div className={styles.testimonialBottomContainerStyles}>
        <p className={styles.testimonialLightDescTextStyles}>
          Know <span>what our clients have to say</span> about us:
        </p>
        {testimonialCard()}
      </div>
    </div>
  );
};

export default TestimonialsSection;
