import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar';
import Divider from '../../components/divider';
import Footer from '../../components/footer';
import { featuresSampleImg } from '../../resources/images';
import BlogCard from '../../components/blogcard';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
const Blogs = () => {
  const tabsData = ['All', 'Blogs', 'News'];
  const blogsData = [
    {
      id: 1,
      type: 'Blogs',
      image: featuresSampleImg,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'Design Thinking and its importance in 2023?',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor.',
    },
    {
      id: 2,
      type: 'News',
      image: featuresSampleImg,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'Improving website’s SEO using ChatGPT?',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor.',
    },
    {
      id: 3,
      type: 'News',
      image: featuresSampleImg,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'Optimizing your designs to make them VR-ready',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor.',
    },

    {
      id: 4,
      type: 'Blogs',
      image: featuresSampleImg,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'Improving website’s SEO using ChatGPT',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor.',
    },
    {
      id: 5,
      type: 'Blogs',
      image: featuresSampleImg,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'Design Thinking and its importance in 2023?',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor.',
    },
    {
      id: 6,
      type: 'News',
      image: featuresSampleImg,
      author: 'Ida Alfonsi ',
      position: '(Communication Manager, Vilje)',
      title: 'Improving website’s SEO using ChatGPT',
      desc: 'Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue nisi, eu elementum eros posuere nec. Curabitur a magna tortor.',
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
            News and insights from our team
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
        <div className={styles.singleBlogCardsContainerStyles}>
          {blogsData && (
            <BlogCard
              blog={cardsData[0]}
              size="large"
              customBlogCardStyles={styles.largeBlogCardStyles}
              onClick={() => navigate('/blogs/name')}
            />
          )}
        </div>
        <div className={styles.blogsCardsContainerStyles}>
          {cardsData.map((item, index) => {
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
