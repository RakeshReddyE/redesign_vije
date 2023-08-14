import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import styles from './styles.module.css';
import Button from '../../components/button';
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

export const RenderTestimonialsSection = (props) => {
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
      desc: `Vilje Tech built our complex eye coordination training app and
  streamlined development efficiently and qualitatively from MVP to a
  complete mobile application. They had clear and transparent
  communication and were highly involved throughout the project; we will
  continue working together. We highly recommend Vilje Tech.`,
      clientName: `Michael Malmqvist (CIO, IMVI Labs, Sweden)`,
    },
    {
      desc: `VINNOVA Tech built our complex eye coordination training app and
  streamlined development efficiently and qualitatively from MVP to a
  complete mobile application. They had clear and transparent
  communication and were highly involved throughout the project; we will
  continue working together. We highly recommend Vilje Tech.`,
      clientName: `Michael Malmqvist (CIO, VINNOVA Labs, Sweden)`,
    },
    {
      desc: `ROSHOLMDELL Tech built our complex eye coordination training app and
  streamlined development efficiently and qualitatively from MVP to a
  complete mobile application. They had clear and transparent
  communication and were highly involved throughout the project; we will
  continue working together. We highly recommend Vilje Tech.`,
      clientName: `Michael Malmqvist (CIO, ROSHOLMDELL Labs, Sweden)`,
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
                        <LeftArrow fillOpacity={index === 0 ? 0.5 : 1} />
                      }
                      customBtnStyles={
                        index === 0 && styles.disabledButtonStyles
                      }
                      onClick={() => {
                        handleLeftClick(index);
                      }}
                    />
                    <Button
                      btnName={
                        <RightArrow
                          fillOpacity={
                            index === clientTestimonials.length - 1 ? 0.5 : 1
                          }
                        />
                      }
                      customBtnStyles={
                        index === clientTestimonials.length - 1 &&
                        styles.disabledButtonStyles
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
                onMouseMove={(e) => {
                  document.querySelector(
                    `#hoveredImage${index}`
                  ).style.left = `${e.clientX}px`;
                }}
              >
                <p className={styles.clientNameTextStyles} key={index}>
                  {item}
                </p>
                <div
                  className={styles.hoveredProjectImageStyles}
                  id={`hoveredImage${index}`}
                >
                  <img
                    src={bannerImg1}
                    className={styles.imageWidthStyles}
                    alt="project"
                  />
                </div>
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
      type: '(UI/UX design, Development)',
    },
    {
      image: bytBooOg,
      hoverImg: bytBooZb,
      projectName: 'Bytboo',
      type: '(Web development)',
    },
    {
      image: moreSpaceOg,
      hoverImg: moreSpaceZb,
      projectName: 'Morespace',
      type: '(Research & Wireframes)',
    },
    {
      image: imviOg,
      hoverImg: imviZb,
      projectName: 'IMVI',
      type: '(UI/UX design, App development)',
    },
    {
      image: featuresSampleImg,
      hoverImg: bannerImg9,
      projectName: 'Trakr',
      type: '(UI/UX design, Development)',
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
    const typeWriterElement = window.document.querySelector(
      '.Typewriter__wrapper'
    );
    cursorElement.classList = styles.customCursorStyles;
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
                  cursor: '|',
                  strings: ['sign', 'velop', 'liver'],
                  deleteSpeed: 100,
                  // delay: 1000,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <Button
              btnName={'ABOUT US'}
              customBtnStyles={styles.aboutUsBtn}
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
        <h5 className={styles.featureHeadingTextStyles}>Featured</h5>
        <div id="viewport" style={{ overflow: 'scroll' }}>
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
                    onClick={() => navigate('/projects/name')}
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
                      <span>{item.type}</span>
                    </p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <p className={styles.allWorkTextStyles}>
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
                  onClick={() => navigate('/projects/name')}
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
                    <span>{item.type}</span>
                  </p>
                </div>
              )
            );
          })}
        </div>
        <div className={styles.featuresBottomStyles}>
          <div className={styles.featuresButtonGroupStyles}>
            <Button
              btnName={<LeftArrow fillOpacity={featureCount === 0 ? 0.5 : 1} />}
              customBtnStyles={
                featureCount === 0 && styles.disabledButtonStyles
              }
              onClick={() => {
                featureCount > 0 && setFeatureCount(featureCount - 1);
              }}
            />
            <Button
              btnName={
                <RightArrow
                  fillOpacity={
                    featureCount === featuresData.length - 1 ? 0.5 : 1
                  }
                />
              }
              customBtnStyles={
                featureCount === featuresData.length - 1 &&
                styles.disabledButtonStyles
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
        {/* <div className={styles.allServicesContainerStyles}>
          {servicesData.map((item, index) => (
            <div key={index} className={styles.serviceContainerStyles}>
              <Divider />
              <div className={styles.serviceContentStyles}>
                <div className={styles.serviceHeadingContainerStyles}>
                  <p className={styles.serviceIdTextStyles}>{`{${item.id}}`}</p>
                  <div className={styles.rightAngledBlueArrowIconStyles}>
                    <img
                      src={rightAngledBlueArrow}
                      alt="icon"
                      className={styles.imageWidthStyles}
                    />
                  </div>
                  <p className={styles.serviceNameTextStyles}>{item.name}</p>
                </div>
                <p className={styles.serviceDescTextStyles}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className={styles.servicesContainerStyles}>
          {servicesData.map(
            (item, index) =>
              index < 2 && <ServiceCard service={item} key={index} />
          )}
        </div>
        <div className={styles.servicesContainerStyles2}>
          {servicesData.map(
            (item, index) =>
              index > 1 &&
              index < 4 && <ServiceCard service={item} key={index} />
          )}
        </div>
      </div>
    );
  };
  const recentPostCard = (recentPost, index, customPostImageStyles) => {
    return (
      <div
        className={styles.recentPostStyles}
        key={index}
        onClick={() => navigate('/blogs/name')}
      >
        <div
          className={[
            styles.recentPostImgContainerStyles,
            customPostImageStyles,
          ].join(' ')}
        >
          <img
            className={styles.imageWidthStyles}
            src={recentPost.image}
            alt="Recent Post"
          />
          <img
            src={recentPost.hoverImg}
            alt="feature card hover photograph"
            className={styles.hoverImageStyles}
          />
        </div>
        <p className={styles.recentPostDescTextStyles}>{recentPost.desc}</p>
      </div>
    );
  };
  const renderRecentPostsSection = () => {
    return (
      <div className={styles.recentPostsMainContainerStyles}>
        <div className={styles.recentPostHeadingBlock}>
          <h4 className={styles.recentPostHeadingTextStyles}>Recent posts</h4>
          <Button
            btnName={'ALL POSTS'}
            onClick={() => navigate('/blogs')}
            customBtnStyles={styles.allPostsButtonStyles}
          />
        </div>
        <div className={styles.recentPostsCardsContainerStyles}>
          {recentPostData.map(
            (item, index) => index < 3 && recentPostCard(item, index)
          )}
        </div>
        <div className={styles.recentPostsCardsMobileViewContainerStyles}>
          {recentPostData && recentPostCard(recentPostData[0], 0)}
          <div
            className={styles.recentPostsCardsMobileViewMiddleContainerStyles}
          >
            {recentPostData?.map((item, index) => {
              let customPostImageStyles = styles.customPostImageStyles;
              return (
                index > 0 &&
                index <= 3 &&
                recentPostCard(item, index, customPostImageStyles)
              );
            })}
          </div>
          <Button
            btnName={'ALL POSTS'}
            onClick={() => navigate('/blogs')}
            customBtnStyles={styles.allPostsMobileViewButtonStyles}
          />
        </div>
      </div>
    );
  };
  return (
    <div className={styles.homeMainContainerStyles}>
      <NavBar theme={'dark'} />
      {renderBannerSection()}
      {renderBannerInfoSection()}
      <Divider />
      {renderFeaturedSection()}
      <Divider />
      {renderOurServicesSection()}
      <Divider />
      {<RenderTestimonialsSection />}
      <Divider />
      {renderRecentPostsSection()}
      <Divider />
      <Footer />
    </div>
  );
};

export default Home;
