import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { useLocation } from 'react-router';
import Divider from '../../components/divider';
import RecentPostsSection from '../../components/recentpostssection';
import { insightsData } from '../../commondata';
import { Helmet } from 'react-helmet';

const IndividualBlog = () => {
  const location = useLocation();

  const [insight, setInsight] = useState();
  const [recentPosts, setRecentPots] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    var foundValue = insightsData.filter(
      (obj) => obj.title === decodeURI(location.pathname.split('/').pop())
    );
    let filteredInsights = insightsData.filter(
      (obj) => obj.title !== decodeURI(location.pathname.split('/').pop())
    );
    setRecentPots(filteredInsights);
    setInsight(foundValue[0]);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const renderBlogDetailsSection = () => {
    return (
      <div className={styles.blogDetailsContainerStyles}>
        <div className={styles.blogHeadingContainerStyles}>
          {insight?.headerText && (
            <h2 className={styles.blogTitleMainHeadingTextStyles}>
              {insight?.headerText}
            </h2>
          )}
          <p className={styles.blogDescTextStyles}>{insight?.desc}</p>
          {insight?.desc1 && (
            <p className={styles.blogDescTextStyles}>{insight?.desc1}</p>
          )}
          {insight?.desc2 && (
            <p className={styles.blogDescTextStyles}>{insight?.desc2}</p>
          )}
          <p className={styles.emailTextStyles}>
            <span>{insight?.author}</span>,{insight?.position}
          </p>
        </div>

        <div className={styles.blogImageStyles}>
          <img
            src={insight?.image}
            alt={insight?.alt}
            className={styles.imageWidthStyles}
          />
        </div>

        {insight?.blogContent.map((item, index) => (
          <div className={styles.blogBottomDescContainerStyles} key={index}>
            {item?.header && (
              <h6 className={styles.blogSubHeadingTextStyles}>
                {item?.header}
              </h6>
            )}
            {item?.subContent &&
              item?.subContent.map((item, index) => (
                <div
                  key={index}
                  className={styles.blogBottomDescContainerStyles}
                >
                  <h5 className={styles.listHeadingTextStyles}>
                    {item.header}
                  </h5>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                    className={styles.blogDescTextStyles}
                  />
                  {item?.subDesc?.map((desc, index) => (
                    <div key={index} className={styles.DescListContainerStyles}>
                      <h6 className={styles.listDescHeadStyles}>
                        {desc.header}
                      </h6>
                      <p className={styles.blogDescTextStyles}>{desc.desc}</p>
                    </div>
                  ))}
                </div>
              ))}
            {item?.content && (
              <p className={styles.blogDescTextStyles}>{item?.content}</p>
            )}
            {item?.content1 && (
              <p className={styles.blogDescTextStyles}>{item?.content1}</p>
            )}
            {item?.list &&
              item?.list.map((listData, index) => (
                <p className={styles.blogDescTextStyles} key={index}>
                  {listData?.li}
                </p>
              ))}
            {item?.content2 && (
              <p className={styles.blogDescTextStyles}>{item?.content2}</p>
            )}{' '}
            {item?.content3 && (
              <p className={styles.blogDescTextStyles}>{item?.content3}</p>
            )}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className={styles.blogPostMainContainerStyles}>
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
      {renderBlogDetailsSection()}
      <Divider />
      {recentPosts?.length > 0 && (
        <RecentPostsSection postsData={recentPosts} />
      )}
      <Divider />
      <Footer />
    </div>
  );
};

export default IndividualBlog;
