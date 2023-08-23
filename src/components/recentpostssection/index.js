import React from 'react';
import styles from './styles.module.css';
import Button from '../button';
import { useNavigate } from 'react-router';

const RecentPostsSection = (props) => {
  const { postsData } = props;
  const navigate = useNavigate();
  const recentPostCard = (recentPost, index, customPostImageStyles) => {
    return (
      <div
        className={styles.recentPostStyles}
        key={index}
        onClick={() => navigate(`/insights/${recentPost.title}`)}
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
            src={recentPost.hoverImage}
            alt="feature card hover photograph"
            className={styles.hoverImageStyles}
          />
        </div>
        <p className={styles.recentPostDescTextStyles}>
          {recentPost.headerText}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.recentPostsMainContainerStyles}>
      <div className={styles.recentPostHeadingBlock}>
        <h4 className={styles.recentPostHeadingTextStyles}>Recent posts</h4>
        <Button
          btnName={'ALL POSTS'}
          onClick={() => navigate('/insights')}
          customBtnStyles={styles.allPostsButtonStyles}
        />
      </div>
      <div className={styles.recentPostsCardsContainerStyles}>
        {postsData.map(
          (item, index) => index < 3 && recentPostCard(item, index)
        )}
      </div>
      <div className={styles.recentPostsCardsMobileViewContainerStyles}>
        {postsData && recentPostCard(postsData[0], 0)}
        <div className={styles.recentPostsCardsMobileViewMiddleContainerStyles}>
          {postsData?.map((item, index) => {
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
          onClick={() => navigate('/insights')}
          customBtnStyles={styles.allPostsMobileViewButtonStyles}
        />
      </div>
    </div>
  );
};

export default RecentPostsSection;
