import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/projectcard';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { featuresSampleImg } from '../../resources/images';
import styles from './styles.module.css';
import Divider from '../../components/divider';
import { useNavigate } from 'react-router';

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  // const projects = [
  //   {
  //     image: featuresSampleImg,
  //     name: "Trakr",
  //     type: "UI/UX design, Development",
  //   },
  //   {
  //     image: featuresSampleImg,
  //     name: "Trakr",
  //     type: "UI/UX design, Development",
  //   },
  //   {
  //     image: featuresSampleImg,
  //     name: "Trakr",
  //     type: "UI/UX design, Development",
  //   },
  //   {
  //     image: featuresSampleImg,
  //     name: "Trakr",
  //     type: "UI/UX design, Development",
  //   },
  //   {
  //     image: featuresSampleImg,
  //     name: "Trakr",
  //     type: "UI/UX design, Development",
  //   },
  // ];
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();
  // const [projectsData, setProjectsData] = useState(projects);
  const tabsData = ['All', 'Design', 'Development', 'Research', 'Others'];
  const handleTabClick = (item) => {
    setActiveTab(item);
  };
  return (
    <div className={styles.projectsMainContainerStyles}>
      <NavBar theme={'dark'} />
      <div className={styles.projectsContainerStyles}>
        <h2 className={styles.projectPageHeadingTextStyles}>Previous work</h2>
        {/* <div className={styles.tabNamesContainerStyles}>
          {tabsData.map((item, index) => (
            <p
              className={
                item === activeTab
                  ? styles.activeTabNameTextStyles
                  : styles.tabNameTextStyles
              }
              key={index}
              onClick={() => handleTabClick(item)}
            >
              {item}
            </p>
          ))}
        </div> */}
        <div className={styles.individualProjectsContainerStyles}>
          <ProjectCard
            customCardStyles={styles.projectBigCardStyles}
            customImageStyles={styles.projectBigCardImageStyles}
            onClick={() => navigate('/projects/name')}
            projectImage={featuresSampleImg}
            projectName={'Project title'}
            projectType={'UI/UX design, Development'}
            projectId={'01'}
          />
          {/* <ProjectCard
            customCardStyles={styles.projectSmallCardStyles}
            customImageStyles={styles.projectSmallCardImageStyles}
            onClick={() => navigate('/projects/name')}
            projectImage={featuresSampleImg}
            projectName={'RosholmDell'}
            projectType={'Development'}
            projectId={'02'}
          /> */}
        </div>
        <div className={styles.individualProjectsContainerStyles2}>
          <ProjectCard
            customCardStyles={styles.projectSmallCardStyles1}
            customImageStyles={styles.projectSmallCardImageStyles1}
            onClick={() => navigate('/projects/name')}
            projectImage={featuresSampleImg}
            projectName={'Foundi'}
            projectType={'UI/UX design, Development'}
            projectId={'03'}
          />
          {/* <ProjectCard
            customCardStyles={styles.projectBigCardStyles1}
            customImageStyles={styles.projectBigCardImageStyles1}
            onClick={() => navigate('/projects/name')}
            projectImage={featuresSampleImg}
            projectName={'Trakr'}
            projectType={'UI/UX design, Development'}
            projectId={'04'}
          /> */}
        </div>
        <div className={styles.individualProjectsContainerStyles}>
          <ProjectCard
            customCardStyles={styles.projectSmallCardStyles}
            customImageStyles={styles.projectSmallCardImageStyles}
            onClick={() => navigate('/projects/name')}
            projectImage={featuresSampleImg}
            projectName={'Project title'}
            projectType={'UI/UX design, Development'}
            projectId={'05'}
          />
          <ProjectCard
            customCardStyles={styles.projectSmallCardStyles}
            customImageStyles={styles.projectSmallCardImageStyles}
            onClick={() => navigate('/projects/name')}
            projectImage={featuresSampleImg}
            projectName={'Trakr'}
            projectType={'UI/UX design, Development'}
            projectId={'06'}
          />
        </div>
        <div className={styles.individualProjectsContainerStyles}>
          <ProjectCard
            customCardStyles={styles.projectBigCardStyles}
            customImageStyles={styles.projectBigCardImageStyles}
            onClick={() => navigate('/projects/name')}
            projectImage={featuresSampleImg}
            projectName={'RosholmDell'}
            projectType={'Development'}
            projectId={'02'}
          />
        </div>
      </div>
      <Divider />
      <Footer />
    </div>
  );
};

export default Projects;
