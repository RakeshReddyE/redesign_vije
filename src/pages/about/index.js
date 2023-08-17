import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { rightDownArrow } from '../../resources/images';
import Divider from '../../components/divider';
import Button from '../../components/button';
import { LeftArrow, RightArrow } from '../../resources/svg';
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const [stepCount, setStepCount] = useState(1);
  const whatWeDoListData = [
    {
      id: '01',
      name: 'Design',
      desc: 'We design a project structure unique to your idea. Initiated by thorough research to understand the market and user, we create a sturdy and strategically justified base to build the digital solution for your needs.',
    },
    {
      id: '02',
      name: 'Develop',
      desc: 'Our team of highly skilled developers can create any solution from simple websites to complex blockchain technologies. By following our custom development process we can ensure an adaptable and bug-free product.',
    },
    {
      id: '03',
      name: 'Deliver',
      desc: 'We deliver perfected projects. And our services don’t stop there. We maintain and update your website and application to keep them running smoothly and up to standards.',
    },
  ];
  const teamValuesData = [
    {
      head: 'We are progressive',
      desc: "We bring a unique perspective to every project, constantly pushing the boundaries of what's possible. Our focus on progress and continuous improvement allows us to provide exceptional results for our clients.",
    },
    {
      head: 'We believe in synergy',
      desc: 'We understand the power of collaboration. Our commitment to synergy drives us to bring diverse perspectives and expertise together, creating a dynamic and magical experience for our clients.',
    },
    {
      head: 'We celebrate diversity',
      desc: 'We approach work with a celebration of diversity in ideas, people, knowledge, and cultures. Our inclusive mindset drives us to seek out new perspectives and create innovative solutions for our clients. By embracing diversity, we are able to provide a wider range of expertise and deliver exceptional results.',
    },
    {
      head: 'We act with integrity',
      desc: 'At our company, integrity drives every action we take and shapes the quality of everything we create. Our commitment to truthfulness and respect ensures that we consistently deliver exceptional results for our clients.',
    },
  ];
  const approachStepsData = [
    { id: 1, name: 'Onboarding' },
    { id: 2, name: 'Research' },
    { id: 3, name: 'Look testing' },
    { id: 4, name: 'Low fidelity' },
    { id: 5, name: 'High fidelity' },
    { id: 6, name: 'Get feedback' },
    { id: 7, name: 'Iterate' },
    { id: 8, name: 'Handoff' },
  ];
  const [CardClassName, setCardClassName] = useState();
  useEffect(() => {
    const cardsEles = [...document.querySelectorAll('#cards')];
    const classNamesArr = cardsEles.map((item) => item.className);
    setCardClassName(classNamesArr);
  }, [stepCount]);
  const renderAboutBannerSection = () => {
    return (
      <div className={styles.aboutBannerOuterContainerStyles}>
        <div className={styles.aboutBannerInnerContainerStyles}>
          <h2 className={styles.aboutBannerHeadingStyles}>
            Our vision is to change the world by developing the ideas of
            tomorrow. Creations that will alter the status quo and enable us to
            think and act for a better future.
          </h2>
          <div className={styles.rightDownArrowImageStyles}>
            <img
              src={rightDownArrow}
              alt="arrow icon"
              className={styles.imageWidthStyles}
            />
          </div>
        </div>
      </div>
    );
  };
  const renderWhatWeDoSection = () => {
    return (
      <div className={styles.whatWeDoMainContainerStyles}>
        <h3 className={styles.whatWeDoHeadingTextStyles}>What we do:</h3>
        <div className={styles.whatWeDoRightContainerStyles}>
          {whatWeDoListData.map((item, index) => (
            <div key={index} className={styles.whatWeDoContainerStyles}>
              <Divider customDividerStyles={styles.customDividerStyles} />
              <div className={styles.whatWeDoContentStyles}>
                <p className={styles.whatWeDoNameTextStyles}>
                  {item.id}.{item.name}
                </p>
                <p className={styles.whatWeDoDescTextStyles}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const handleRightClick = () => {
    const cardsEles = [...document.querySelectorAll('#cards')];
    cardsEles.forEach((item, index) => {
      if (index === 0) {
        item.classList.remove(item.className);
        item.classList.add(CardClassName[CardClassName.length - 1]);
      } else {
        item.classList.remove(item.className);
        item.classList.add(CardClassName[index - 1]);
      }
    });
    if (stepCount === approachStepsData.length) {
      setStepCount(1);
    } else {
      setStepCount(stepCount + 1);
    }
  };
  const handleLeftClick = () => {
    const cardsEles = [...document.querySelectorAll('#cards')];
    cardsEles.forEach((item, index) => {
      item.classList.remove(item.className);
      if (index === cardsEles.length - 1) {
        item.classList.add(CardClassName[0]);
      } else {
        item.classList.add(cardsEles[index + 1].className);
      }
    });
    if (stepCount === 1) {
      setStepCount(approachStepsData.length);
    } else {
      setStepCount(stepCount - 1);
    }
  };
  const renderApproachStepsSection = () => {
    return (
      <div className={styles.approachMainContainerStyles}>
        <h2 className={styles.approachHeadingTextStyles}>
          How we approach every single project:
        </h2>
        <div className={styles.approachStepsContainerStyles}>
          <div className={styles.approachStepsCardsContainerStyles}>
            {approachStepsData.map((item, index) => {
              return (
                <div
                  className={
                    (index === 0 && styles.approachCardOneStyles) ||
                    (index === 1 && styles.approachCardTwoStyles) ||
                    (index === 2 && styles.approachCardThreeStyles) ||
                    (index === 3 && styles.approachCardFourStyles) ||
                    (index > 3 && styles.approachCardHideStyles)
                  }
                  key={index}
                  id="cards"
                >
                  <div className={styles.approachStepCardStyles}>
                    <p className={styles.stepNumberTextStyles}>0{item.id}</p>
                    <p className={styles.stepNameTextStyles}>{item.name}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className={styles.approachCardOneStyles}>
              <div className={styles.approachStepCardStyles}>
                <p className={styles.stepNumberTextStyles}>01</p>
                <p className={styles.stepNameTextStyles}>Onboarding</p>
              </div>
            </div>
            <div className={styles.approachCardTwoStyles}>
              <div className={styles.approachStepCardStyles}>
                <p className={styles.stepNumberTextStyles}>02</p>
                <p className={styles.stepNameTextStyles}>Onboarding</p>
              </div>
            </div>
            <div className={styles.approachCardThreeStyles}>
              <div className={styles.approachStepCardStyles}>
                <p className={styles.stepNumberTextStyles}>03</p>
                <p className={styles.stepNameTextStyles}>Onboarding</p>
              </div>
            </div>
            <div className={styles.approachCardFourStyles} >
              <div className={styles.approachStepCardStyles}>
                <p className={styles.stepNumberTextStyles}>04</p>
                <p className={styles.stepNameTextStyles}>Onboarding</p>
              </div>
            </div> */}
          </div>
          <div className={styles.approachStepsBottomContainerStyles}>
            <div className={styles.approachStepsButtonGroupStyles}>
              <Button
                btnName={<LeftArrow />}
                onClick={() => handleLeftClick()}
              />
              <Button
                btnName={<RightArrow />}
                onClick={() => handleRightClick()}
              />
            </div>
            <p className={styles.stepCounterTextStyles}>
              0{stepCount}/0{approachStepsData.length}
            </p>
          </div>
        </div>
      </div>
    );
  };
  const renderTeamValuesSection = () => {
    return (
      <div className={styles.valuesMainContainerStyles}>
        <h2 className={styles.valuesHeadingTextStyles}>
          A strong team comes with strong values:
        </h2>
        <div className={styles.valuesContentContainer}>
          {teamValuesData.map((item, index) => (
            <div key={index} className={styles.valuesBlockStyles}>
              <h4 className={styles.valuesBlockHeadingTextStyles}>
                {item.head}
              </h4>
              <p className={styles.valuesBlockDescTextStyles}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.aboutMainContainerStyles}>
      <NavBar />
      {renderAboutBannerSection()}
      {renderWhatWeDoSection()}
      <Divider />
      {renderApproachStepsSection()}
      <Divider />
      {renderTeamValuesSection()}
      <Divider />
      <Footer
        theme="dark"
        customFooterBottomStyles={styles.footerStyles}
        customFooterMainContainerStyles={styles.footerMainContainerStyles}
      />
    </div>
  );
};

export default About;
