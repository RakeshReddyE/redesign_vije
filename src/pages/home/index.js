import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import Button from '../../components/button';
import styles from './styles.module.css';
import Typewriter from 'typewriter-effect';
import {
  appDevelopmentIcon,
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
  bannerImg6,
  bannerImg7,
  bannerImg8,
  bannerImg9,
  bp1Og,
  bp1Zb,
  bp2Og,
  bp2Zb,
  bp3Og,
  bp3Zb,
  bp4Og,
  bp4Zb,
  bp5Og,
  bp5Zb,
  bytBooOg,
  bytBooZb,
  featuresSampleImg,
  imviOg,
  imviZb,
  moreSpaceOg,
  moreSpaceZb,
  mrStudioOg,
  mrStudioZb,
  trakrOg,
  trakrZb,
  uiuxDesignIcon,
  webDevelopmentIcon,
} from '../../resources/images';
import NavBar from '../../components/navbar';
import { useNavigate } from 'react-router';
import { LeftArrow, RightArrow, RightUpArrow } from '../../resources/svg';
import ScrollBooster from 'scrollbooster';
import ServiceCard from '../../components/servicecard';
import TestimonialsSection from '../../components/testimonialsection';
import RecentPostsSection from '../../components/recentpostssection';
import { insightsData } from '../../commondata';
import { Helmet } from 'react-helmet';

const Home = () => {
  const bannerImagesData = [
    bannerImg1,
    bannerImg2,
    bannerImg3,
    bannerImg4,
    bannerImg5,
    bannerImg6,
    bannerImg7,
    bannerImg8,
    bannerImg9,
  ];
  const recentPostData = [
    {
      image: bp1Og,
      hoverImg: bp1Zb,
      desc: 'Design Thinking and its importance in 2023?',
    },
    {
      image: bp2Og,
      hoverImg: bp2Zb,
      desc: 'Improving website’s SEO using ChatGPT',
    },
    {
      image: bp3Og,
      hoverImg: bp3Zb,
      desc: 'Optimizing your designs to make them VR-ready',
    },
    {
      image: bp4Og,
      hoverImg: bp4Zb,
      desc: 'Design Thinking and its importance in 2023?',
    },
    {
      image: bp5Og,
      hoverImg: bp5Zb,
      desc: 'Improving website’s SEO using ChatGPT',
    },
    {
      image: featuresSampleImg,
      hoverImg: bp1Zb,
      desc: 'Optimizing your designs to make them VR-ready',
    },
  ];
  const featuresData = [
    {
      image: trakrOg,
      hoverImg: trakrZb,
      projectName: 'Trakr',
      type: 'UI/UX design, Development',
    },
    {
      image: bytBooOg,
      hoverImg: bytBooZb,
      projectName: 'Bytboo',
      type: 'Web development',
    },
    {
      image: moreSpaceOg,
      hoverImg: moreSpaceZb,
      projectName: 'Morespace',
      type: 'Research & Wireframes',
    },
    {
      image: imviOg,
      hoverImg: imviZb,
      projectName: 'IMVI',
      type: 'UI/UX design, App development',
    },
    {
      image: mrStudioOg,
      hoverImg: mrStudioZb,
      projectName: 'MRstudio',
      type: 'UI/UX design, Development',
    },
  ];
  const servicesData = [
    {
      id: '01',
      name: 'App development',
      icon: appDevelopmentIcon,
      desc: 'Our app development services are the perfect fit for bold and creative companies looking to make a statement in the digital space.',
    },
    {
      id: '02',
      name: 'Web development',
      icon: webDevelopmentIcon,
      desc: 'From e-commerce to interactive web apps, our web services are tailored to meet your specific needs and help your business thrive online.',
    },
    {
      id: '03',
      name: 'UX/UI design',
      icon: uiuxDesignIcon,
      desc: 'We prioritize usability, accessibility, and visual appeal to create intuitive and engaging interfaces that delight users and drive engagement.',
    },
  ];

  const navigate = useNavigate();
  const journalRef = useRef(null);
  const [bannerImgIndex, setBannerImgIndex] = useState(0);
  const [featureCount, setFeatureCount] = useState(0);

  useEffect(() => {
    //on load scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });
    // text type writer animation
    const cursorElement = window.document.querySelector('.Typewriter__cursor');
    document.querySelector('.Typewriter').style.display = 'flex';
    const typeWriterElement = window.document.querySelector(
      '.Typewriter__wrapper'
    );
    // cursorElement.classList = styles.customCursorStyles;
    cursorElement.style.display = 'none';
    typeWriterElement.classList = styles.bannerBottomAnimTextStyles;

    //banner images changing
    const timer = setInterval(() => {
      setBannerImgIndex((prevIndex) =>
        prevIndex === bannerImagesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 800);
    return () => {
      /* cleanup */
      clearInterval(timer);
    };
  }, [bannerImagesData.length]);

  useEffect(() => {
    new ScrollBooster({
      viewport: document.getElementById('viewport'),
      content: document.getElementById('scrollEle'),
      scrollMode: 'transform',
      direction: 'horizontal',
      emulateScroll: false,
      onPointerDown: () => (document.body.style.cursor = 'grabbing'),
      onPointerUp: () => (document.body.style.cursor = 'default'),
    });
  }, []);

  const renderBannerSection = () => {
    return (
      <div className={styles.bannerMainContainerStyles}>
        <div className={styles.bannerTopContainerStyles}>
          <h4 className={styles.bannerHeadingStyles}>
            Crafting top-notch digital solutions.
          </h4>
          <div className={styles.bannerImageStyle}>
            <img
              src={bannerImagesData[bannerImgIndex]}
              alt="banner "
              className={styles.imageWidthStyles}
            />
          </div>
        </div>
      </div>
    );
  };
  const renderBannerInfoSection = () => {
    return (
      <div className={styles.bannerInfoMainContainerStyles}>
        <div className={styles.bannerBottomContainerStyles}>
          <p className={styles.bannerDescTextStyles}>
            We are a design & development agency based in Malmö, Skåne who
            reinvents the existing, scales the new, and develops digital
            solutions that will shape the future. Being both engineers &
            creatives, we understand the challenges of crafting digital products
            that satisfy both business and end-user needs.
          </p>
          <div className={styles.bannerBottomBtnGroupStyles}>
            <div className={styles.bannerBottomAnimContainerStyles}>
              <p className={styles.bannerBottomTextStyles}>In short, we de</p>
              <p className={styles.bannerBottomMobileTextStyles}>We de</p>
              <Typewriter
                options={{
                  // cursor: '',
                  strings: ['sign', 'velop', 'liver'],
                  deleteSpeed: 150,
                  delay: 150,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <Button
              btnName={'ABOUT US'}
              customBtnStyles={styles.aboutUsBtnStyles}
              onClick={() => navigate('/about')}
            />
          </div>
        </div>
      </div>
    );
  };
  const renderFeaturedSection = () => {
    return (
      <div className={styles.featuredMainContainerStyles}>
        <div className={styles.featureHeadBlockStyles}>
          <h5 className={styles.featureHeadingTextStyles}>Featured</h5>
          <p
            className={styles.allWorkMobileTextStyles}
            onClick={() => navigate('/projects')}
          >
            ALL <span className={styles.workTextStyles}>&nbsp;WORK</span>
            <RightUpArrow
              customStyles={styles.featureRightUpArrowStyles}
              pathStyles={styles.featureRightArrowPathStyles}
            />
          </p>
        </div>
        <div
          id="viewport"
          style={{ overflow: 'scroll' }}
          className={styles.featuresWrapperStyles}
        >
          <div
            className={styles.featuresContainerStyles}
            ref={journalRef}
            id="scrollEle"
          >
            {featuresData.map((item, index) => (
              <React.Fragment key={index}>
                <div className={styles.emptyDivStyles}></div>
                {index < 4 && (
                  <div
                    key={index}
                    className={styles.featureContainerStyle}
                    onClick={() => navigate(`/projects/${item.projectName}`)}
                    id="featureCard"
                  >
                    <div
                      className={
                        index % 2 === 0
                          ? styles.bigFeatureCardStyles
                          : styles.smallFeatureCardStyles
                      }
                    >
                      <img
                        src={item.image}
                        alt="feature"
                        className={styles.imageWidthStyles}
                      />
                      <img
                        src={item.hoverImg}
                        alt="feature card hover photograph"
                        className={styles.hoverImageStyles}
                      />
                    </div>
                    <p className={styles.projectNameTextStyles}>
                      {item.projectName}
                      <span>&nbsp;-&nbsp;{item.type}</span>
                    </p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <p
          className={styles.allWorkTextStyles}
          onClick={() => navigate(`/projects`)}
        >
          ALL WORK
          <RightUpArrow
            customStyles={styles.featureRightUpArrowStyles}
            pathStyles={styles.featureRightArrowPathStyles}
          />
        </p>
        <div className={styles.featuresMobileViewContainerStyles}>
          {featuresData.map((item, index) => {
            return (
              featureCount === index && (
                <div
                  key={index}
                  className={styles.featureContainerStyle}
                  onClick={() => navigate(`/projects/${item.projectName}`)}
                >
                  <div className={styles.bigFeatureCardStyles}>
                    <img
                      src={item.image}
                      alt="feature"
                      className={styles.imageWidthStyles}
                    />
                    <img
                      src={item.hoverImg}
                      alt="feature card hover photograph"
                      className={styles.hoverImageStyles}
                    />
                  </div>
                  <p className={styles.projectNameTextStyles}>
                    {item.projectName}
                    <span>&nbsp;-&nbsp;{item.type}</span>
                  </p>
                </div>
              )
            );
          })}
        </div>
        <div className={styles.featuresBottomStyles}>
          <div className={styles.featuresButtonGroupStyles}>
            <Button
              btnName={
                <LeftArrow
                  PathStyles={
                    featureCount === 0
                      ? styles.leftArrowDisablePathStyles
                      : styles.leftArrowPathStyles
                  }
                />
              }
              customBtnStyles={
                featureCount === 0
                  ? styles.disabledButtonStyles
                  : styles.leftArrowBtnStyles
              }
              onClick={() => {
                featureCount > 0 && setFeatureCount(featureCount - 1);
              }}
            />
            <Button
              btnName={
                <RightArrow
                  PathStyles={
                    featureCount === featuresData.length - 1
                      ? styles.rightArrowDisablePathStyles
                      : styles.rightArrowPathStyles
                  }
                />
              }
              customBtnStyles={
                featureCount === featuresData.length - 1
                  ? styles.disabledButtonStyles
                  : styles.rightArrowBtnStyles
              }
              onClick={() => {
                featureCount < featuresData.length - 1 &&
                  setFeatureCount(featureCount + 1);
              }}
            />
          </div>
          <p className={styles.featureCountTextStyles}>
            {`0${featureCount + 1}/0${featuresData.length}`}
          </p>
        </div>
      </div>
    );
  };
  const renderOurServicesSection = () => {
    return (
      <div className={styles.ourServicesMainContainerStyles}>
        <p className={styles.ourServicesDescTextStyles}>
          We provide cutting-edge digital solutions tailored to meet the unique
          needs of your business and help you thrive in today's competitive
          landscape.
        </p>
        <div className={styles.allServicesBlockStyles}>
          <div className={styles.servicesContainerStyles}>
            {servicesData.map(
              (item, index) =>
                index < 2 && (
                  <ServiceCard
                    onClick={() => navigate('/services', { state: item.name })}
                    service={item}
                    key={index}
                    customStyles={styles.serviceCardStyles}
                  />
                )
            )}
          </div>
          <div className={styles.servicesContainerStyles2}>
            {servicesData.map(
              (item, index) =>
                index > 1 &&
                index < 4 && (
                  <ServiceCard
                    onClick={() => navigate('/services', { state: item.name })}
                    service={item}
                    key={index}
                    customStyles={styles.serviceCardStyles}
                  />
                )
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.homeMainContainerStyles}>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/27027103.js"
        ></script>
      </Helmet>
      <NavBar theme={'dark'} />
      {renderBannerSection()}
      {renderBannerInfoSection()}
      <Divider />
      {renderFeaturedSection()}
      <Divider />
      {renderOurServicesSection()}
      <Divider />
      {<TestimonialsSection />}
      <Divider />
      <RecentPostsSection postsData={insightsData} />
      <Divider />
      <Footer />
    </div>
  );
};

export default Home;
