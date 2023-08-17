import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar';
import Divider from '../../components/divider';
import Footer from '../../components/footer';
import {
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
} from '../../resources/images';
import BlogCard from '../../components/blogcard';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
const Blogs = () => {
  const tabsData = ['All', 'Blogs', 'News', 'Others'];
  const blogsData = [
    {
      id: 1,
      type: 'Blogs',
      image: bp1Og,
      hoverImage: bp1Zb,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'Opinion: The future of design in robotic internet',
      desc: `Over the past week, major players in the AI ​​development world have announced that they will soon integrate AI into workplace tools such as email, Excel sheets, documents, etc. Given the speed at which AI integration is happening in various tools, the world where we ask AI to write an email and read the inbox is not very far off. In such a world, where human interaction with the graphical interface is minimal, design plays an important role. Because robots don't care about the aesthetics, accessibility and experience of a digital product as much as humans do.`,
    },
    {
      id: 2,
      type: 'News',
      image: bp2Og,
      hoverImage: bp2Zb,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'Improve your website’s SEO using ChatGPT',
      desc: `Search Engine Optimization (SEO) is an important part of web design and web development in today's digital era. With millions of websites vying for users' attention, it can be difficult and time-consuming to attract visitors to your website without optimizing its content. Creating and maintaining website content can be a laborious process that requires extensive research and analysis, especially when it comes to keyword research and content scouting. The challenge can be even more demanding for companies that have limited budgets, such as startups. Fortunately, there is a solution to this dilemma, and it's TOTALLY free!`,
    },
    {
      id: 3,
      type: 'News',
      image: bp3Og,
      hoverImage: bp3Zb,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'AIPRM: The revolutionary SEO extension for ChatGPT',
      desc: `As businesses move towards digital marketing, search engine optimization (SEO) becomes a critical element in ensuring online success. With the vast amount of content available online, it's essential to stand out from the crowd and optimise your content for search engines. This is where AIPRM comes in - the revolutionary SEO extension for ChatGPT that provides you with SEO prompts from other users.`,
    },
    {
      id: 4,
      type: 'Blogs',
      image: bp4Og,
      hoverImage: bp4Zb,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: '3 simple ways to improve your site’s user experience',
      desc: `The user experience (UX) of your website can make or break your online success. A great UX can lead to increased engagement, higher conversion rates, and better brand recognition, while a poor UX can result in high bounce rates, low customer satisfaction, and reduced sales. Learn how to improve the user experience in three easy steps.`,
    },
    {
      id: 5,
      type: 'Blogs',
      image: bp5Og,
      hoverImage: bp5Zb,
      author: 'Bharath Panyala ',
      position: '(CEO, Vilje)',
      title: 'Building long-lasting relationships: Key to make authentic sales',
      desc: `As the CEO of Vilje Tech, I strongly believe in building long-lasting relationships with our clients. Sales are not just about closing a deal; they are about fostering connections, understanding our clients' needs, and creating value that lasts beyond a transaction. As the great Zig Ziglar once said, "If people like you, they'll listen to you, but if they trust you, they'll do business with you."`,
    },
  ];
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [cardsData, setCardsData] = useState(blogsData);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const handleTabClick = (item) => {
    if (item === 'All') {
      setActiveTab(item);
      setCardsData(blogsData);
    } else {
      setActiveTab(item);
      const filteredCardsData = blogsData.filter((blog) => blog.type === item);
      setCardsData(filteredCardsData);
    }
  };

  const renderBlogsContainerSection = () => {
    return (
      <div className={styles.blogsContainerStyles}>
        <div className={styles.blogsTopContainerStyles}>
          <h2 className={styles.blogsPageHeadingTextStyles}>
            Stories, news, and insights from our team.
          </h2>
          <div className={styles.tabNamesContainerStyles}>
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
          </div>
        </div>
        {cardsData && cardsData.length > 0 && (
          <div className={styles.singleBlogCardsContainerStyles}>
            <BlogCard
              blog={cardsData[0]}
              size="large"
              customBlogCardStyles={styles.largeBlogCardStyles}
              onClick={() => navigate('/blogs/name')}
            />
          </div>
        )}
        {cardsData && cardsData.length > 0 && (
          <div className={styles.blogsCardsContainerStyles}>
            {cardsData?.map((item, index) => {
              if (index > 0) {
                return (
                  <BlogCard
                    blog={item}
                    key={index}
                    onClick={() => navigate('/blogs/name')}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        )}
        {cardsData.length === 0 && (
          <p className={styles.dataNotFoundTextStyles}>Data Not Found</p>
        )}
        {/* <div className={styles.blogsCardsContainerStyles}>
          {cardsData.map((item, index) => {
            if (index > 3 && index <= 6) {
              return <BlogCard blog={item} key={index} />;
            } else {
              return null;
            }
          })}
        </div> */}
      </div>
    );
  };
  return (
    <div className={styles.blogsMainContainerStyles}>
      <NavBar theme={'dark'} />
      {renderBlogsContainerSection()}
      <Divider />
      <Footer />
    </div>
  );
};

export default Blogs;
