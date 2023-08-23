import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import {
  step1Img,
  step2Img,
  step3Img,
  step4Img,
  step5Img,
  step6Img,
  step7Img,
  step8Img,
  // rightDownArrow,
  valuesIcon1,
  valuesIcon2,
  valuesIcon3,
  valuesIcon4,
} from '../../resources/images';
import Divider from '../../components/divider';
import Button from '../../components/button';
import { LeftArrow, RightArrow } from '../../resources/svg';
import ServiceCard from '../../components/servicecard';
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
      id: '01',
      icon: valuesIcon1,
      name: 'We are progressive',
      desc: "We bring a unique perspective to every project, constantly pushing the boundaries of what's possible. Our focus on progress and continuous improvement allows us to provide exceptional results for our clients.",
    },
    {
      id: '02',
      icon: valuesIcon2,
      name: 'We believe in synergy',
      desc: 'We understand the power of collaboration. Our commitment to synergy drives us to bring diverse perspectives and expertise together, creating a dynamic and magical experience for our clients.',
    },
    {
      id: '03',
      icon: valuesIcon3,
      name: 'We celebrate diversity',
      desc: 'We approach work with a celebration of diversity in ideas, people, knowledge, and cultures. Our inclusive mindset drives us to seek out new perspectives and create innovative solutions for our clients. By embracing diversity, we are able to provide a wider range of expertise and deliver exceptional results.',
    },
    {
      id: '04',
      icon: valuesIcon4,
      name: 'We act with integrity',
      desc: 'At our company, integrity drives every action we take and shapes the quality of everything we create. Our commitment to truthfulness and respect ensures that we consistently deliver exceptional results for our clients.',
    },
  ];
  const approachStepsData = [
    {
      id: '01',
      name: 'Onboarding',
      image: step1Img,
      bgColor: '#DADEE3',
      color: '#303E37',
    },
    {
      id: '02',
      name: 'Research',
      image: step2Img,
      bgColor: '#28292C',
      color: '#DADEE3',
    },
    {
      id: '03',
      name: 'Look testing',
      image: step3Img,
      bgColor: '#303E37',
      color: '#DADEE3',
    },
    {
      id: '04',
      name: 'Low fidelity',
      image: step4Img,
      bgColor: '#30313E',
      color: '#DADEE3',
    },
    {
      id: '05',
      name: 'High fidelity',
      image: step5Img,
      bgColor: '#DADEE3',
      color: '#303E37',
    },
    {
      id: '06',
      name: 'Get feedback',
      image: step6Img,
      bgColor: '#28292C',
      color: '#DADEE3',
    },
    {
      id: '07',
      name: 'Iterate',
      image: step7Img,
      bgColor: '#303E37',
      color: '#DADEE3',
    },
    {
      id: '08',
      name: 'Handoff',
      image: step8Img,
      bgColor: '#30313E',
      color: '#DADEE3',
    },
  ];
  const teamsData = [
    {
      name: 'Developing team',
      members: [
        { name: 'Person name', role: 'Developer' },
        { name: 'Person name', role: 'Developer' },
        { name: 'Person name', role: 'Developer' },
        { name: 'Person name', role: 'Developer' },
        { name: 'Person name', role: 'Developer' },
        { name: 'Person name', role: 'Developer' },
        { name: 'Person name', role: 'Developer' },
      ],
    },
    {
      name: 'Design team',
      members: [
        { name: 'Person name', role: 'Designer' },
        { name: 'Person name', role: 'Designer' },
        { name: 'Person name', role: 'Designer' },
        { name: 'Person name', role: 'Designer' },
      ],
    },
    {
      name: 'Management, Marketing, Sales',
      members: [
        { name: 'Person name', role: 'CEO' },
        { name: 'Person name', role: 'communication Manager' },
        { name: 'Person name', role: 'Role' },
        { name: 'Person name', role: 'Role' },
      ],
    },
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
          <h2 className={styles.aboutBannerHeadingStyles}>Since 2021</h2>
          {/* <div className={styles.rightDownArrowImageStyles}>
            <img
              src={rightDownArrow}
              alt="arrow icon"
              className={styles.imageWidthStyles}
            />
          </div> */}
          <p className={styles.aboutBannerDiscTextStyles}>
            Our vision is to change the world by developing the ideas of
            tomorrow. Creations that will alter the status quo and enable us to
            think and act for a better future.
          </p>
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
  const renderApproachStepsSection = () => {
    return (
      <div className={styles.approachMainContainerStyles}>
        <h2 className={styles.approachHeadingTextStyles}>
          Onboarding to handoff, here is how we approach every single project:
        </h2>
        <div className={styles.approachStepsContainerStyles}>
          <div className={styles.approachStepsCardsContainerStyles}>
            {approachStepsData.map((item, index) => {
              return (
                <div
                  className={
                    (index === 0 && styles.approachCardOneStyles) ||
                    (index === 1 && styles.approachCardTwoStyles) ||
                    // (index > 1 && styles.approachCardHideStyles)

                    // ||
                    // (index === 2 && styles.approachCardThreeStyles) ||
                    // (index > 2 && styles.approachCardHideStyles)
                    // (index === 3 && styles.approachCardFourStyles) ||
                    (index === 7 && styles.approachCardLeftHideStyles) ||
                    (index > 1 && styles.approachCardHideStyles)
                  }
                  key={index}
                  id="cards"
                >
                  {approachStepCard(item)}
                  {/* <div className={styles.approachStepCardStyles}>
                    <p className={styles.stepNumberTextStyles}>0{item.id}</p>
                    <p className={styles.stepNameTextStyles}>{item.name}</p>
                  </div> */}
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
                      stepCount === approachStepsData.length
                        ? styles.rightArrowDisablePathStyles
                        : styles.rightArrowPathStyles
                    }
                  />
                }
                customBtnStyles={
                  stepCount === approachStepsData.length
                    ? styles.disabledButtonStyles
                    : styles.rightArrowBtnStyles
                }
                onClick={() =>
                  stepCount !== approachStepsData.length && handleRightClick()
                }
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
    // return (
    //   <div className={styles.valuesMainContainerStyles}>
    //     <h2 className={styles.valuesHeadingTextStyles}>
    //       A strong team comes with strong values:
    //     </h2>
    //     <div className={styles.valuesContentContainer}>
    //       {teamValuesData.map((item, index) => (
    //         <div key={index} className={styles.valuesBlockStyles}>
    //           <h4 className={styles.valuesBlockHeadingTextStyles}>
    //             {item.head}
    //           </h4>
    //           <p className={styles.valuesBlockDescTextStyles}>{item.desc}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
    return (
      <div className={styles.teamValuesMainContainerStyles}>
        <div className={styles.valuesCardsContainerStyles}>
          <div className={styles.ValuesCardsTopContainerStyles}>
            <p className={styles.teamValuesHeadTextStyles}>
              A brand can only be as robust as their core values:
            </p>
            <ServiceCard
              service={teamValuesData[0]}
              customStyles={styles.teamValuesCardStyles}
              iconStyles={styles.teamValueIconStyles}
              teamValues={true}
            />
          </div>
          <div className={styles.valuesCardsMiddleContainerStyles}>
            <ServiceCard
              service={teamValuesData[1]}
              customStyles={styles.teamValuesCardStyles}
              iconStyles={styles.teamValueIconStyles}
              teamValues={true}
            />
            <ServiceCard
              service={teamValuesData[2]}
              customStyles={styles.teamValuesCardStyles}
              iconStyles={styles.teamValueIconStyles}
              teamValues={true}
            />
          </div>
          <div className={styles.valuesCardsBottomContainerStyles}>
            <ServiceCard
              service={teamValuesData[3]}
              customStyles={styles.teamValuesCardStyles}
              iconStyles={styles.teamValueIconStyles}
              teamValues={true}
            />
          </div>
        </div>
        <div className={styles.valuesCardsMobileViewContainerStyles}>
          <p className={styles.teamValuesHeadTextStyles}>
            A brand can only be as robust as their core values:
          </p>
          <div className={styles.teamsValueCardsMobileContainerStyles}>
            {teamValuesData.map((item, index) => (
              <ServiceCard
                key={index}
                service={item}
                customStyles={styles.teamValuesCardStyles}
                iconStyles={styles.teamValueIconStyles}
                customNameStyles={styles.teamNAmeTextStyles}
                teamValues={true}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  const teamCard = (team) => {
    return (
      <div className={styles.temCardContainerStyles}>
        <h5 className={styles.teamTypeTextStyles}>{team.name}</h5>
        <div className={styles.teamMembersListContainerStyles}>
          {team?.members?.map((member, index) => (
            <div key={index} className={styles.teamMemberNameTextStyles}>
              <div className={styles.dotSymbolStyles}></div>
              {member.name} &nbsp;
              <span className={styles.roleTextStyles}>({member.role})</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const renderOurTeamSection = () => {
    return (
      <div className={styles.ourTeamMainContainerStyles}>
        <h4 className={styles.ourTemHeadTextStyles}>
          We’re a team of problem solvers, designers, developers, and more
          importantly passionate individuals.{' '}
        </h4>
        <div className={styles.teamValuesCardsContainerStyles}>
          <div className={styles.teamCardsTopContainerStyles}>
            {teamCard(teamsData[0])}
            {teamCard(teamsData[1])}
          </div>
          <div className={styles.teamCardsBottomContainerStyles}>
            {teamCard(teamsData[2])}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.aboutMainContainerStyles}>
      <NavBar />
      {renderAboutBannerSection()}
      <Divider customDividerStyles={styles.dividerStyles} />
      {renderTeamValuesSection()}
      <Divider customDividerStyles={styles.dividerStyles} />
      {renderApproachStepsSection()}
      <Divider customDividerStyles={styles.dividerStyles} />
      {renderOurTeamSection()}
      <Divider customDividerStyles={styles.dividerStyles} />
      <Footer
        theme="dark"
        customFooterBottomStyles={styles.footerStyles}
        customFooterMainContainerStyles={styles.footerMainContainerStyles}
      />
    </div>
  );
};

export default About;
