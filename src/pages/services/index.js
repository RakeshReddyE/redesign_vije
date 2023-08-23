import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import {
  rightDownArrow,
  rightUpArrow,
  step1Img,
  step2Img,
  step3Img,
  step4Img,
  step5Img,
} from '../../resources/images';
import Divider from '../../components/divider';
import TestimonialsSection from '../../components/testimonialsection';
import ServiceSection from '../../components/servicesection';

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [appDevStepCount, setAppDevStepCount] = useState(1);
  const [webDevStepCount, setWebDevStepCount] = useState(1);
  const [uiUxDevStepCount, setUiUxDevStepCount] = useState(1);

  const chooseUsData = [
    {
      head: 'We’re transparent',
      desc: 'Throughout the project our main priority is to have clear and transparent communication between us and our clients.',
    },
    {
      head: 'We’re reliable',
      desc: 'We understand your journey and always try to create a project journey that fits your one of a kind products.',
    },
    {
      head: 'We explore',
      desc: 'For each new project we conduct client, branding and product-research to provide our clients with solutions proven to be adjusted to their unique market.',
    },
    {
      head: 'We’re creative',
      desc: 'We are natural creatives that want to inspire our clients to go beyond the status quo in design and innovation.',
    },
  ];
  const servicesData = [
    {
      id: '01',
      uuid: 'appCards',
      head: 'App development',
      stepCount: appDevStepCount,
      setStepCount: setAppDevStepCount,
      desc: 'We build and revamp mobile applications to inspire users, expand adaptation, and scale revenue. Vilje Tech works with your company to design, develop and deliver user-centric mobile apps. By having an iterative and thorough approach that encompasses strategy, research, UI/UX design, and front -and back-end development, we create something built to change the world.',
      stepsData: [
        {
          id: '01',
          name: 'Backend',
          image: step1Img,
          bgColor: '#DADEE3',
          color: '#303E37',
        },
        {
          id: '02',
          name: 'Frontend',
          image: step2Img,
          bgColor: '#28292C',
          color: '#DADEE3',
        },
        {
          id: '03',
          name: 'Testing',
          image: step3Img,
          bgColor: '#303E37',
          color: '#DADEE3',
        },
        {
          id: '04',
          name: 'Deploying',
          image: step4Img,
          bgColor: '#30313E',
          color: '#DADEE3',
        },
      ],
    },
    {
      id: '02',
      uuid: 'webCards',
      head: 'Web development',
      stepCount: webDevStepCount,
      setStepCount: setWebDevStepCount,
      desc: 'A good website establishes your business, communicates your brand identity and builds customer relationships. Vilje Tech develops great websites that deliver all that and much more. By understanding your customer, we deliver websites that enhance your brand, focus on user experience and function lawlessly.',
      stepsData: [
        {
          id: '01',
          name: 'Backend',
          image: step1Img,
          bgColor: '#DADEE3',
          color: '#303E37',
        },
        {
          id: '02',
          name: 'Frontend',
          image: step2Img,
          bgColor: '#28292C',
          color: '#DADEE3',
        },
        {
          id: '03',
          name: 'Testing',
          image: step3Img,
          bgColor: '#303E37',
          color: '#DADEE3',
        },
        {
          id: '04',
          name: 'Deploying',
          image: step4Img,
          bgColor: '#30313E',
          color: '#DADEE3',
        },
      ],
    },
    {
      id: '03',
      head: 'UX/UI design',
      uuid: 'uiuxCards',
      stepCount: uiUxDevStepCount,
      setStepCount: setUiUxDevStepCount,
      desc: 'User experience (UX) and user interface (UI) design are defining factors for any digital product. Our design process involves understanding user needs through research, wireframing, high-fidelity prototyping, and iterating based on user/business feedback. We strive to create holistic experiences that satisfy business needs and solve end-user problems.',
      stepsData: [
        {
          id: '01',
          name: 'Empathize',
          image: step1Img,
          bgColor: '#DADEE3',
          color: '#303E37',
        },
        {
          id: '02',
          name: 'Define',
          image: step2Img,
          bgColor: '#28292C',
          color: '#DADEE3',
        },
        {
          id: '03',
          name: 'Ideate',
          image: step3Img,
          bgColor: '#303E37',
          color: '#DADEE3',
        },
        {
          id: '04',
          name: 'Prototype',
          image: step4Img,
          bgColor: '#30313E',
          color: '#DADEE3',
        },
        {
          id: '05',
          name: 'Test',
          image: step5Img,
          bgColor: '#DADEE3',
          color: '#303E37',
        },
      ],
    },
  ];

  // const appDevStepsData = [
  //   {
  //     id: '01',
  //     name: 'Backend',
  //     image: step1Img,
  //     bgColor: '#DADEE3',
  //     color: '#303E37',
  //   },
  //   {
  //     id: '02',
  //     name: 'Frontend',
  //     image: step2Img,
  //     bgColor: '#28292C',
  //     color: '#DADEE3',
  //   },
  //   {
  //     id: '03',
  //     name: 'Testing',
  //     image: step3Img,
  //     bgColor: '#303E37',
  //     color: '#DADEE3',
  //   },
  //   {
  //     id: '04',
  //     name: 'Deploying',
  //     image: step4Img,
  //     bgColor: '#30313E',
  //     color: '#DADEE3',
  //   },
  // {
  //   id: '05',
  //   name: 'High fidelity',
  //   image: step5Img,
  //   bgColor: '#DADEE3',
  //   color: '#303E37',
  // },
  // {
  //   id: '06',
  //   name: 'Get feedback',
  //   image: step6Img,
  //   bgColor: '#28292C',
  //   color: '#DADEE3',
  // },
  // {
  //   id: '07',
  //   name: 'Iterate',
  //   image: step7Img,
  //   bgColor: '#303E37',
  //   color: '#DADEE3',
  // },
  // {
  //   id: '08',
  //   name: 'Handoff',
  //   image: step8Img,
  //   bgColor: '#30313E',
  //   color: '#DADEE3',
  // },
  // ];
  const renderBannerSection = () => {
    return (
      <div className={styles.bannerMainContainerStyles}>
        <h2 className={styles.bannerHeadingTextStyles}>
          We’re a Scandinavian-based company
        </h2>
        {/* <div className={styles.rightDownArrowImageStyles}>
          <img
            src={rightDownArrow}
            alt="arrow icon"
            className={styles.imageWidthStyles}
          />
        </div> */}
        <p className={styles.bannerDescTextStyles}>
          - that creates websites and mobile applications that look and work
          exceptionally. By supplying holistic services within development &
          design, we have enabled startups and established companies into a new
          era of digitalization.
        </p>
      </div>
    );
  };
  const renderOurServicesSection = () => {
    return (
      <div className={styles.ourServicesMainContainerStyes}>
        <h2 className={styles.ourServicesHeadingTextStyles}>Our services:</h2>
        <div className={styles.servicesContentContainerStyles}>
          {servicesData.map((item, index) => (
            <div key={index} className={styles.serviceContainerStyles}>
              <h3 className={styles.serviceTypeTextStyles}>
                {item.id}.{item.head}
              </h3>
              <div className={styles.serviceRightContainerStyles}>
                <p className={styles.serviceDescTextStyles}>{item.desc}</p>
                <p className={styles.stepsInvolvedTextStyles}>
                  STEPS INVOLVED
                  <img
                    src={rightUpArrow}
                    alt="arrow icon"
                    className={styles.rightUpArrowImageStyles}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const renderVisionSection = () => {
    return (
      <div className={styles.visionOuterContainStyles}>
        <div className={styles.visionMainContainStyles}>
          <h2 className={styles.visionHeadingTextStyles}>
            “We build intelligent digital solutions that empower startups and
            established companies to pursue their full potential, innovate with
            confidence, and achieve sustainable growth in today's dynamic
            market.”
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
  const renderChooseUsSection = () => {
    return (
      <div className={styles.chooseUsContainerStyles}>
        <h2 className={styles.chooseUsHeadingTextStyles}>
          We build intelligent digital solutions that empower startups and
          established companies to pursue their full potential, innovate with
          confidence, and achieve sustainable growth in today's dynamic market.
        </h2>
        <div className={styles.chooseUsContentContainer}>
          {chooseUsData.map((item, index) => (
            <div key={index} className={styles.chooseUsBlockStyles}>
              <h4 className={styles.chooseUsBlockHeadingTextStyles}>
                {item.head}
              </h4>
              <p className={styles.chooseUsBlockDescTextStyles}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.servicesMainContainerStyles}>
      <NavBar theme={'dark'} />
      {renderBannerSection()}
      <Divider />
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          stepsData={service.stepsData}
          stepCount={service.stepCount}
          setStepCount={service.setStepCount}
          serviceId={service.id}
          serviceName={service.head}
          serviceDesc={service.desc}
          serviceCardId={service.uuid}
        />
        // {/* <Divider /> */}
      ))}
      <div className={styles.chooseUsMainContainerStyles}>
        {renderChooseUsSection()}
      </div>
      <div className={styles.testimonialContainerStyles}>
        <TestimonialsSection />
      </div>
      <Divider />
      <Footer />
    </div>
  );
};

export default Services;
