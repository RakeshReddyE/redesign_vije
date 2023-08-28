import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import {
  featuresSampleImg,
  rightAngledArrow,
  rightUpArrow,
  swedenFlag,
  testimonialSampleProfile,
} from '../../resources/images';
import Divider from '../../components/divider';
import Footer from '../../components/footer';
import { useLocation, useNavigate } from 'react-router';
import { projectsData } from '../../commondata';
import { Helmet } from 'react-helmet';

const IndividualProject = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    var foundValue = projectsData.filter(
      (obj) => obj.title === decodeURI(location.pathname.split('/').pop())
    );
    setProject(foundValue[0]);
  }, [location.pathname]);

  // console.log(project);

  const bannerSection = () => {
    return (
      <div className={styles.bannerSectionStyles}>
        <h4 className={styles.bannerHeaderStyles}>{project?.headerText}</h4>
        <div className={styles.bannerImgStyles}>
          <img
            src={project?.bannerImage}
            alt=""
            className={styles.imageWidth}
          />
        </div>
        <div className={styles.bannerTextStyles}>
          <p className={styles.bannerLeftTextStyles}>© {project?.year}</p>
          <div className={styles.bannerRightStyles}>
            <p className={styles.bannerParaStyles}>
              <span className={styles.bannerSpanStyles}>Services offered:</span>
              &nbsp;
              {project?.servicesOffered}
            </p>
            <p className={styles.bannerParaStylesOne}>
              <span className={styles.bannerSpanStylesOne}>Overview:</span>
              &nbsp;
              {project?.overview}
            </p>
          </div>
        </div>
        <div className={styles.bannerViewStyles}>
          <div className={styles.bannerFlagStyles}>
            <img src={swedenFlag} alt="" />
          </div>

          <div className={styles.bannerGapStylesOne}>
            <p className={styles.bannerViewBottomStyles}>© 2022</p>
            <div className={styles.bannerGapStyles}>
              <p
                className={styles.bannerViewTextStyles}
                onClick={() =>
                  project.webLink && window.open(project.webLink, '_blank')
                }
              >
                {project?.webLink ? 'VIEW SITE' : 'VIEW APP'}
              </p>
              <div className={styles.bannerViewImgStyles}>
                <img src={rightUpArrow} alt="" className={styles.imageWidth} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const eyeCoordinationSection = () => {
    return (
      <div className={styles.eyeCoordinationSectionStyles}>
        <h4 className={styles.coordinationHeaderStyles}>
          {project?.section2.headText}
        </h4>
        <div className={styles.coordinationImgStyles}>
          <img
            src={project?.section2.image}
            alt=""
            className={styles.imageWidth}
          />
        </div>
        {project?.section2.desc && (
          <div className={styles.coordinationParaStyles}>
            <p className={styles.coordinationParaTextStyles}>
              {project?.section2.desc}
            </p>
            <p className={styles.coordinationParaTextStylesOne}>
              {project?.section2.desc2}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      project?.section3 && (
        <div className={styles.eyeCoordinationSectionStyles}>
          <h4 className={styles.coordinationHeaderStyles}>
            {project?.section3.headText}
          </h4>
          {project?.section3.images &&
            project?.section3.images.map((image, index) => (
              <div className={styles.coordinationImgStyles} key={index}>
                <img src={image} alt="" className={styles.imageWidth} />
              </div>
            ))}
          {project?.section3.desc && (
            <div className={styles.coordinationParaStyles}>
              <p className={styles.coordinationParaTextStyles}>
                {project?.section3.desc}
              </p>
              <p className={styles.coordinationParaTextStylesOne}>
                {project?.section3.desc2}
              </p>
            </div>
          )}
        </div>
      )
    );
  };
  const renderSection4 = () => {
    return (
      project?.section4 && (
        <div className={styles.eyeCoordinationSectionStyles}>
          <h4 className={styles.coordinationHeaderStyles}>
            {project?.section4.headText}
          </h4>
          {project?.section4.images &&
            project?.section4.images.map((image, index) => (
              <div className={styles.coordinationImgStyles} key={index}>
                <img src={image} alt="" className={styles.imageWidth} />
              </div>
            ))}
          {project?.section4.desc && (
            <div className={styles.coordinationParaStyles}>
              <p className={styles.coordinationParaTextStyles}>
                {project?.section3.desc}
              </p>
              <p className={styles.coordinationParaTextStylesOne}>
                {project?.section3.desc2}
              </p>
            </div>
          )}
        </div>
      )
    );
  };
  const gatherInsightsSection = () => {
    return (
      project?.reasearchResult && (
        <div className={styles.insightsSectionStyles}>
          {project?.reasearchResult.title && (
            <h4 className={styles.coordinationHeaderStyles}>
              {project?.reasearchResult.title}
            </h4>
          )}
          {project?.reasearchResult.images &&
            project?.reasearchResult.images.map((image, index) => (
              <div className={styles.gatherInsightsImgStyles} key={index}>
                <img src={image} alt="" className={styles.imageWidth} />
              </div>
            ))}
          <p className={styles.gatherInsightsHeaderStyles}>
            {project?.reasearchResult.headText}
          </p>
          <div className={styles.insightsUserStyles}>
            {project?.reasearchResult.results.map((result, index) => (
              <div
                className={styles.insightsUsageInstructionsStyles}
                key={index}
              >
                <h4 className={styles.insightsUsageHeaderStyles}>
                  {result.pencent}
                </h4>
                <p className={styles.insightsUsageParaStyles}>{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    );
  };

  const wireFramesSection = () => {
    return (
      project?.wireFrames && (
        <div className={styles.wireFramesSectionStyles}>
          <h4 className={styles.wireFrameHeaderStyles}>
            {project?.wireFrames.headText}
          </h4>
          {project?.wireFrames.images.map((image, index) => (
            <div className={styles.wireFramesImgStyles} key={index}>
              <img src={image} alt="" className={styles.imageWidth} />
            </div>
          ))}

          {project?.wireFrames.desc && (
            <div className={styles.wireFramesParaStyles}>
              <p className={styles.wireFramesParaTextStyles}>
                {project?.wireFrames.desc}
              </p>
              {project?.wireFrames.desc2 && (
                <p className={styles.wireFramesParaTextStyles}>
                  {project?.wireFrames.desc2}
                </p>
              )}
            </div>
          )}
        </div>
      )
    );
  };

  const experinceMiviSection = () => {
    return (
      project?.imagesSection && (
        <div className={styles.experinceMiviSectionStyles}>
          <h4 className={styles.experinceHeaderStyles}>
            {project?.imagesSection.headText}
          </h4>
          {project?.imagesSection.images.map((image, index) => {
            return (
              <div className={styles.experinceImageStyles} key={index}>
                <img src={image} alt="" className={styles.imageWidth} />
              </div>
            );
          })}
          {project?.imagesSection.desc && (
            <div className={styles.experinceParaStyles}>
              <p className={styles.experinceParaTextStyles}>
                {project?.imagesSection.desc}
              </p>
              <p className={styles.experinceParaTextStylesOne}>
                {project?.imagesSection.desc2}
              </p>
            </div>
          )}
          {project?.imagesSection.outcome && (
            <div className={styles.imagesOutComeSection}>
              {project?.imagesSection.outcome && (
                <div>
                  <p className={styles.outcomeParaStyles}>
                    <span className={styles.outcomeSpanStyles}>Outcome: </span>
                    {project?.imagesSection.outcome}
                  </p>
                </div>
              )}

              {project?.imagesSection.technologiesUSed && (
                <div className={styles.outcomeTechnologyStyles}>
                  <p className={styles.outcomeTechnologyTextStyles}>
                    Technologies used while building the product:
                  </p>
                  {project?.imagesSection.technologiesUSed.map(
                    (technology, index) => (
                      <p
                        className={styles.outcomeTechnologyTextStylesOne}
                        key={index}
                      >
                        {technology}
                      </p>
                    )
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )
    );
  };

  const developingAppSection = () => {
    return (
      project?.developingProcess && (
        <div className={styles.developingAppStyles}>
          <p className={styles.developingAppHeaderStyles}>
            {project?.developingProcess.head}
          </p>

          <div className={styles.developingMapStyles}>
            {project?.developingProcess.steps.map((step, index) => {
              return (
                <div className={styles.developingGapStyles} key={index}>
                  <h4 className={styles.developingHeaderStyles}>{step.name}</h4>
                  <p className={styles.developingParaStyles}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      )
    );
  };

  const outcomeSection = () => {
    return (
      project?.testimonials && (
        <div className={styles.outcomeSectionStyles}>
          {project?.outcome && (
            <p className={styles.outcomeParaStyles}>
              <span className={styles.outcomeSpanStyles}>Outcome: </span>
              {project?.outcome}
            </p>
          )}
          {project?.testimonials && (
            <div className={styles.testimonialCardStyles}>
              <p className={styles.testimonialParaStyles}>
                {project?.testimonials.desc}
              </p>
              <Divider />
              <div className={styles.testimonialImgSectionStyles}>
                <div className={styles.testimonialImgStyles}>
                  <img
                    src={project?.testimonials.image}
                    alt=""
                    className={styles.imageWidthStyles}
                  />
                </div>
                <div className={styles.testimonialParaBottomStyles}>
                  <p className={styles.testimonialParaStylesOne}>
                    {project?.testimonials.name}
                  </p>
                  <p className={styles.testimonialParaStylesTwo}>
                    {project?.testimonials.companyName}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className={styles.outcomeTechnologyStyles}>
            <p className={styles.outcomeTechnologyTextStyles}>
              Technologies used while building the product:
            </p>
            {project?.technologiesUSed &&
              project?.technologiesUSed.map((technology, index) => (
                <p
                  className={styles.outcomeTechnologyTextStylesOne}
                  key={index}
                >
                  {technology}
                </p>
              ))}

            {/* <p className={styles.outcomeTechnologyTextStylesTwo}>2.Firebase</p>
          <p className={styles.outcomeTechnologyTextStylesThree}>3. Figma</p> */}
          </div>
        </div>
      )
    );
  };

  return (
    <div className={styles.newIndividualProject}>
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
      {bannerSection()}
      {eyeCoordinationSection()}
      {renderSection3()}
      {gatherInsightsSection()}
      {wireFramesSection()}
      {renderSection4()}
      {experinceMiviSection()}
      {developingAppSection()}
      {outcomeSection()}
      <Divider />
      <Footer />
    </div>
  );
};

export default IndividualProject;
