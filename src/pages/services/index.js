import React, { useEffect } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { RenderTestimonialsSection } from '../home';
import { rightDownArrow, rightUpArrow } from '../../resources/images';
import Divider from '../../components/divider';

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const chooseUsData = [
    {
      head: 'We are transparent',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor. Nam fringilla, urna non tristique euismod, mauris elit porttitor risus, eu laoreet diam turpis at sapien. Aliquam suscipit lorem et nibh eleifend cursus. Mauris at dapibus massa.',
    },
    {
      head: 'We are reliable',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor. Nam fringilla, urna non tristique euismod, mauris elit porttitor risus, eu laoreet diam turpis at sapien. Aliquam suscipit lorem et nibh eleifend cursus. Mauris at dapibus massa.',
    },
    {
      head: 'We explore',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor. Nam fringilla, urna non tristique euismod, mauris elit porttitor risus, eu laoreet diam turpis at sapien. Aliquam suscipit lorem et nibh eleifend cursus. Mauris at dapibus massa.',
    },
    {
      head: 'We are creative',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor. Nam fringilla, urna non tristique euismod, mauris elit porttitor risus, eu laoreet diam turpis at sapien. Aliquam suscipit lorem et nibh eleifend cursus. Mauris at dapibus massa.',
    },
  ];
  const servicesData = [
    {
      id: '01',
      head: 'App development',
      desc: 'We build and revamp mobile applications to inspire users, expand adaptation, and scale revenue. Vilje Tech works with your company to design, develop and deliver user-centric mobile apps. By having an iterative and thorough approach that encompasses strategy, research, UI/UX design, and front -and back-end development, we create something built to change the world.',
    },
    {
      id: '02',
      head: 'Web development',
      desc: 'A good website establishes your business, communicates your brand identity and builds customer relationships. Vilje Tech develops great websites that deliver all that and much more. By understanding your customer, we deliver websites that enhance your brand, focus on user experience and function lawlessly.',
    },
    {
      id: '03',
      head: 'UX/UI design',
      desc: 'User experience (UX) and user interface (UI) design are defining factors for any digital product. Our design process involves understanding user needs through research, wireframing, high-fidelity prototyping, and iterating based on user/business feedback. We strive to create holistic experiences that satisfy business needs and solve end-user problems.',
    },
  ];
  const renderBannerSection = () => {
    return (
      <div className={styles.bannerMainContainerStyles}>
        <h2 className={styles.bannerHeadingTextStyles}>
          We are a Scandinavian-based, full-stack developing company that
          creates websites and mobile applications that look and work
          exceptionally. By supplying holistic services within development, we
          have enabled startups and established companies into a new era of
          digitalization.
        </h2>
        <div className={styles.rightDownArrowImageStyles}>
          <img
            src={rightDownArrow}
            alt="arrow icon"
            className={styles.imageWidthStyles}
          />
        </div>
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
      <div className={styles.chooseUsMainContainerStyles}>
        <h2 className={styles.chooseUsHeadingTextStyles}>Why choose us:</h2>
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
      {renderOurServicesSection()}
      {renderVisionSection()}
      {renderChooseUsSection()}
      <div className={styles.testimonialContainerStyles}>
        <RenderTestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
