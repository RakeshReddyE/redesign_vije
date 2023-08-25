import React, { useEffect } from 'react';
import ProjectCard from '../../components/projectcard';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import {
  bytBooOg,
  bytBooZb,
  featuresSampleImg,
  imviOg,
  imviZb,
  moreSpaceOg,
  moreSpaceZb,
  mrStudioOg,
  mrStudioZb,
  rdlaOg,
  rdlaZb,
  trakrOg,
  trakrZb,
} from '../../resources/images';
import Divider from '../../components/divider';
import { useNavigate } from 'react-router';
import { RightUpArrow } from '../../resources/svg';
import styles from './styles.module.css';
import { Helmet } from 'react-helmet';

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const projectEles = [...document.querySelectorAll('#project')];
    projectEles.forEach((item) => {
      item.style.gap = `calc(100% - ${
        item.childNodes[0].clientWidth + item.childNodes[1].clientWidth
      }px)`;
    });
  }, []);
  const projectCardsData = [
    {
      image: mrStudioOg,
      hoverImage: mrStudioZb,
      name: 'MRstudio',
      type: 'Web development',
    },
    {
      image: bytBooOg,
      hoverImage: bytBooZb,
      name: 'Bytboo',
      type: 'Web development',
    },
    {
      image: trakrOg,
      hoverImage: trakrZb,
      name: 'Trakr ',
      type: 'UI/UX design, Web development',
    },
    {
      image: imviOg,
      hoverImage: imviZb,
      name: 'IMVI',
      type: 'UI/UX design, App development',
    },
    {
      image: moreSpaceOg,
      hoverImage: moreSpaceZb,
      name: 'Morespace',
      type: 'Research for redesign & Wireframes',
    },
  ];
  const projects = [
    {
      image: rdlaOg,
      hoverImage: rdlaZb,
      name: 'RosholmDell',
      routeName: 'RosholmDell',
      type: 'Design, Development',
    },
    {
      image: featuresSampleImg,
      name: 'Foundi',
      type: 'Design, Development',
    },
    {
      image: featuresSampleImg,
      name: 'Prizbee',
      routeName: 'Prizbee',
      type: 'Development',
    },
    {
      image: featuresSampleImg,
      name: 'Brygghallen',
      routeName: 'Brygghallen',
      type: 'Development',
    },
    {
      image: featuresSampleImg,
      name: 'Gokaya',
      routeName: 'Gokaya',
      type: 'Development',
    },
    {
      image: featuresSampleImg,
      name: 'Timesheets',
      routeName: 'Timesheets',
      type: 'Development',
    },
    {
      image: featuresSampleImg,
      name: 'Comfoo',
      routeName: 'Comfoo',
      type: 'Development',
    },
    {
      image: featuresSampleImg,
      name: 'Wellness Studio',
      routeName: 'WellnessStudio',
      type: 'Design, Development',
    },
    {
      image: featuresSampleImg,
      name: 'Q Games',
      routeName: 'QGames',
      type: 'Design, Development',
    },
  ];
  // const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();
  // const [projectsData, setProjectsData] = useState(projects);
  // const tabsData = ['All', 'Design', 'Development', 'Research', 'Others'];
  // const handleTabClick = (item) => {
  //   setActiveTab(item);
  // };
  const renderProjectsBottomSections = () => {
    return (
      <div className={styles.projectsBottomSectionStyles}>
        {projects.map((item, index) => (
          <div
            className={styles.projectContainerStyles}
            id="project"
            key={index}
            // onClick={() => navigate(`/projects/${item.routeName}`)}
          >
            <div className={styles.projectNameContainerStyles} id="projectName">
              <RightUpArrow
                customStyles={styles.rightUpArrowStyles}
                pathStyles={styles.rightUpArrowPathStyles}
              />
              <p className={styles.projectNameTextStyles}>{item.name}</p>
            </div>
            <p className={styles.projectTypeTextStyles} id="projectType">
              -{item.type}
            </p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className={styles.projectsMainContainerStyles}>
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
        <div className={styles.projectsCardsOuterContainerStyles}>
          <div className={styles.individualProjectsContainerStyles}>
            <ProjectCard
              customCardStyles={styles.projectBigCardStyles}
              customImageStyles={styles.projectBigCardImageStyles}
              onClick={() => navigate('/projects/name')}
              project={projectCardsData[0]}
            />
          </div>
          <div className={styles.individualProjectsContainerStyles2}>
            <ProjectCard
              customCardStyles={styles.projectSmallCardStyles1}
              customImageStyles={styles.projectSmallCardImageStyles1}
              // onClick={() => navigate(`/projects/${projectCardsData[]}`)}
              project={projectCardsData[1]}
            />
          </div>
          <div className={styles.individualProjectsContainerStyles3}>
            <ProjectCard
              customCardStyles={styles.projectSmallCardStyles}
              customImageStyles={styles.projectSmallCardImageStyles}
              // onClick={() => navigate('/projects/name')}
              project={projectCardsData[2]}
            />
            <ProjectCard
              customCardStyles={styles.projectSmallCardStyles1}
              customImageStyles={styles.projectSmallCardImageStyles1}
              // onClick={() => navigate('/projects/name')}
              project={projectCardsData[3]}
            />
          </div>
          <div className={styles.individualProjectsContainerStyles}>
            <ProjectCard
              customCardStyles={styles.projectBigCardStyles}
              customImageStyles={styles.projectBigCardImageStyles}
              // onClick={() => navigate('/projects/name')}
              project={projectCardsData[4]}
            />
          </div>
        </div>
      </div>

      {renderProjectsBottomSections()}
      <Divider />
      <Footer />
    </div>
  );
};

export default Projects;
