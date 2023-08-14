import React, { useEffect } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import { featuresSampleImg, rightAngledArrow } from '../../resources/images';
import Divider from '../../components/divider';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router';

const IndividualProject = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const renderProjectBannerSection = () => {
    return (
      <div className={styles.projectBannerContainerStyles}>
        <p className={styles.navigationTextStyles}>
          <span onClick={() => navigate('/')}>Home</span> -{' '}
          <span onClick={() => navigate('/projects')}> Project</span> -{' '}
          <span className={styles.presentPageLinkTextStyles}>Project Name</span>{' '}
        </p>
        <h3 className={styles.projectTitleTextStyles}>Product name</h3>
        <div className={styles.projectBannerImageStyles}>
          <img
            src={featuresSampleImg}
            alt="project"
            className={styles.imageWidthStyles}
          />
        </div>
        <div className={styles.projectBannerBottomContainerStyles}>
          <div className={styles.projectBannerBottomLeftStyles}>
            <p>© 2023</p>
            <div className={styles.websiteTextStyles}>
              WEBSITE
              <div className={styles.rightAngledArrowIconStyles}>
                <img
                  src={rightAngledArrow}
                  alt="right arrow icon"
                  className={styles.imageWidthStyles}
                />
              </div>
            </div>
          </div>
          <div className={styles.projectBannerBottomDescContainerStyles}>
            <p className={styles.projectBannerBottomDescTextStyles}>
              <span>Services offered:</span> Redesign of the existing website
              with brand new design language including change of typography.
            </p>
            <p className={styles.projectBannerBottomDescTextStyles}>
              <span>Overview:</span> Curabitur eleifend ipsum et odio pulvinar
              mattis. Nam eleifend augue nisi, eu elementum eros posuere nec.
              Curabitur a magna tortor. Nam fringilla, urna non tristique
              euismod, mauris elit porttitor risus, eu laoreet diam turpis at
              sapien. Aliquam suscipit lorem et nibh eleifend cursus. Mauris at
              dapibus massa. Nulla cursus blandit mattis. Sed pharetra quam ac
              tincidunt condimentum. Morbi commodo ultrices magna eget
              vestibulum. Proin at aliquam orci. Duis sit amet felis porta,
              ultrices turpis a, tempor purus. Nulla suscipit faucibus varius.
            </p>
          </div>
        </div>
      </div>
    );
  };
  const renderArchitectureSection = () => {
    return (
      <div className={styles.architectureMainContainerStyles}>
        <h2 className={styles.architectureHeadingStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          interdum urna.
        </h2>
        <div className={styles.architectureImageStyles}>
          <img
            src={featuresSampleImg}
            alt="project"
            className={styles.imageWidthStyles}
          />
        </div>
        <div className={styles.architectureDescContainerStyles}>
          <p className={styles.architectureDescTextStyles}>
            <span>Information architecture:</span> Sed eu nulla sed lacus
            condimentum aliquet. Mauris turpis tellus, consectetur nec eros ac,
            vestibulum finibus eros. Donec et elementum lacus, ac convallis
            tellus. Fusce tincidunt ullamcorper purus, quis laoreet metus
            sodales id. Duis convallis congue nunc, vitae dignissim neque
            hendrerit eu. Donec vulputate sem semper, posuere leo id, interdum
            tellus. Aenean est tortor, feugiat lacinia aliquam sit amet,
            lobortis eu tortor. Nunc non ex massa. In at convallis metus, vel
            convallis nibh.
          </p>
          <p className={styles.architectureDescTextStyles}>
            Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue
            nisi, eu elementum eros posuere nec. Curabitur a magna tortor. Nam
            fringilla, urna non tristique euismod, mauris elit porttitor risus,
            eu laoreet diam turpis at sapien. Aliquam suscipit lorem et nibh
            eleifend cursus. Mauris at dapibus massa.
          </p>
        </div>
      </div>
    );
  };
  const renderTypographyAndWireframesSection = () => {
    return (
      <div className={styles.typographyMainContainerStyles}>
        <div className={styles.typographyImageStyles}>
          <img
            src={featuresSampleImg}
            alt="project"
            className={styles.imageWidthStyles}
          />
        </div>
        <div className={styles.typographyDescContainerStyles}>
          <p className={styles.typographyThickDescTextStyles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
            interdum urna. Pellentesque dictum venenatis arcu, a venenatis diam
            malesuada non.
          </p>
          <p className={styles.typographyDescTextStyles}>
            <span>Typography & Wireframes:</span> Sed eu nulla sed lacus
            condimentum aliquet. Mauris turpis tellus, consectetur nec eros ac,
            vestibulum finibus eros. Donec et elementum lacus, ac convallis
            tellus. Fusce tincidunt ullamcorper purus, quis laoreet metus
            sodales id. Duis convallis congue nunc, vitae dignissim neque
            hendrerit eu. Donec vulputate sem semper, posuere leo id, interdum
            tellus. Aenean est tortor, feugiat lacinia aliquam sit amet,
            lobortis eu tortor. Nunc non ex massa. In at convallis metus, vel
            convallis nibh.
          </p>
        </div>
      </div>
    );
  };
  const renderHighFidelitySection = () => {
    return (
      <div className={styles.highFidelityMainContainerStyles}>
        <h2 className={styles.highFidelityHeadingStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          interdum urna.
        </h2>
        <div className={styles.highFidelityImageStyles}>
          <img
            src={featuresSampleImg}
            alt="project"
            className={styles.imageWidthStyles}
          />
        </div>{' '}
        <div className={styles.highFidelityImageStyles}>
          <img
            src={featuresSampleImg}
            alt="project"
            className={styles.imageWidthStyles}
          />
        </div>
        <div className={styles.highFidelityDescContainerStyles}>
          <p className={styles.highFidelityDescTextStyles}>
            <span>High fidelity designs:</span> Sed eu nulla sed lacus
            condimentum aliquet. Mauris turpis tellus, consectetur nec eros ac,
            vestibulum finibus eros. Donec et elementum lacus, ac convallis
            tellus. Fusce tincidunt ullamcorper purus, quis laoreet metus
            sodales id. Duis convallis congue nunc, vitae dignissim neque
            hendrerit eu. Donec vulputate sem semper, posuere leo id, interdum
            tellus. Aenean est tortor, feugiat lacinia aliquam sit amet,
            lobortis eu tortor. Nunc non ex massa. In at convallis metus, vel
            convallis nibh.
          </p>
          <p className={styles.highFidelityThickDescTextStyles}>
            Sed eu nulla sed lacus condimentum aliquet. Mauris turpis tellus,
            consectetur nec eros ac, vestibulum finibus eros. Donec et elementum
            lacus, ac convallis tellus. Fusce tincidunt ullamcorper purus, quis
            laoreet metus sodales id. Duis convallis congue nunc, vitae
            dignissim neque hendrerit eu.
          </p>
          <p className={styles.highFidelityDescTextStyles}>
            Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue
            nisi, eu elementum eros posuere nec. Curabitur a magna tortor. Nam
            fringilla, urna non tristique euismod, mauris elit porttitor risus,
            eu laoreet diam turpis at sapien. Aliquam suscipit lorem et nibh
            eleifend cursus. Mauris at dapibus massa.
          </p>
        </div>
      </div>
    );
  };
  const renderResultAndReviewSection = () => {
    return (
      <div className={styles.resultReviewMainContainerStyles}>
        <p className={styles.resultDescTextStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          interdum urna. Pellentesque dictum venenatis arcu, a venenatis diam
          malesuada non.
        </p>
        <div className={styles.reviewContainerStyles}>
          <p className={styles.reviewDescTextStyles}>
            “Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend
            augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor.
            Nam fringilla, urna non tristique euismod, mauris elit porttitor
            risus, eu laoreet diam turpis at sapien. Aliquam suscipit lorem et
            nibh eleifend cursus. Mauris at dapibus massa. Nulla cursus blandit
            mattis.”
          </p>
          <Divider />
          <p className={styles.clientNameTextStyles}>
            Michael Malmqvist (CEO, Company name, Sweden)
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.projectMainContainerStyles}>
      <NavBar theme={'dark'} />
      {renderProjectBannerSection()}
      <Divider />
      {renderArchitectureSection()}
      <Divider />
      {renderTypographyAndWireframesSection()}
      <Divider />
      {renderHighFidelitySection()}
      <Divider />
      {renderResultAndReviewSection()}
      <Divider />
      <Footer />
    </div>
  );
};

export default IndividualProject;
