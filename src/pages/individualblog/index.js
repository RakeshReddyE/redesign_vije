import React, { useEffect } from 'react';
import styles from './styles.module.css';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { featuresSampleImg } from '../../resources/images';
import { useNavigate } from 'react-router';
import Divider from '../../components/divider';

const IndividualBlog = () => {
  const navigate = useNavigate();
  const recentPostData = [
    {
      image: featuresSampleImg,
      desc: 'Design Thinking and its importance in 2023?',
    },
    {
      image: featuresSampleImg,
      desc: 'Improving website’s SEO using ChatGPT',
    },
    {
      image: featuresSampleImg,
      desc: 'Optimizing your designs to make them VR-ready',
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const recentPostCard = (recentPost, index) => {
    return (
      <div
        className={styles.recentPostStyles}
        key={index}
        onClick={() => navigate('/blogs/name')}
      >
        <div className={styles.recentPostImgContainerStyles}>
          <img
            className={styles.imageWidthStyles}
            src={recentPost.image}
            alt="Recent Post"
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
          <h4 className={styles.recentPostHeadingTextStyles}>
            You might also like:
          </h4>
        </div>
        <div className={styles.recentPostsCardsContainerStyles}>
          {recentPostData.map((item, index) => recentPostCard(item, index))}
        </div>
      </div>
    );
  };
  const renderBlogDetailsSection = () => {
    return (
      <div className={styles.blogDetailsContainerStyles}>
        <div className={styles.blogHeadingContainerStyles}>
          <h2 className={styles.blogTitleMainHeadingTextStyles}>
            Design Thinking and its importance in 2023?
          </h2>
          <p className={styles.blogDescTextStyles}>
            Sed eu nulla sed lacus condimentum aliquet. Mauris turpis tellus,
            consectetur nec eros ac, vestibulum finibus eros. Donec et elementum
            lacus, ac convallis tellus. Fusce tincidunt ullamcorper purus, quis
            laoreet metus sodales id. Duis convallis congue nunc, vitae
            dignissim neque hendrerit eu. Donec vulputate sem semper, posuere
            leo id, interdum tellus. Aenean est tortor, feugiat lacinia aliquam
            sit amet, lobortis eu tortor. Nunc non ex massa. In at convallis
            metus, vel convallis nibh.
          </p>
          <p className={styles.emailTextStyles}>
            <span>Ida@viljetech.com</span> , 22 July 2023
          </p>
        </div>
        <div className={styles.blogImageStyles}>
          <img
            src={featuresSampleImg}
            alt="blog post photograph"
            className={styles.imageWidthStyles}
          />
        </div>
        <div className={styles.blogDescSectionStyles}>
          <p className={styles.blogDescTextStyles}>
            Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue
            nisi, eu elementum eros posuere nec. Curabitur a magna tortor. Nam
            fringilla, urna non tristique euismod, mauris elit porttitor risus,
            eu laoreet diam turpis at sapien. Aliquam suscipit lorem et nibh
            eleifend cursus. Mauris at dapibus massa. Nulla cursus blandit
            mattis. Sed pharetra quam ac tincidunt condimentum. Morbi commodo
            ultrices magna eget vestibulum. Proin at aliquam orci. Duis sit amet
            felis porta, ultrices turpis a, tempor purus. Nulla suscipit
            faucibus varius.
          </p>
          <p className={styles.blogDescTextStyles}>
            Sed eu nulla sed lacus condimentum aliquet. Mauris turpis tellus,
            consectetur nec eros ac, vestibulum finibus eros. Donec et elementum
            lacus, ac convallis tellus. Fusce tincidunt ullamcorper purus, quis
            laoreet metus sodales id. Duis convallis congue nunc, vitae
            dignissim neque hendrerit eu. Donec vulputate sem semper, posuere
            leo id, interdum tellus. Aenean est tortor, feugiat lacinia aliquam
            sit amet, lobortis eu tortor. Nunc non ex massa. In at convallis
            metus, vel convallis nibh.
          </p>
        </div>
        <h4 className={styles.blogQuoteHeadingTextStyles}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          interdum urna.”
        </h4>
        <div className={styles.blogImageStyles}>
          <img
            src={featuresSampleImg}
            alt="blog post photograph"
            className={styles.imageWidthStyles}
          />
        </div>
        <div className={styles.blogBottomDescContainerStyles}>
          <h6 className={styles.blogSubHeadingTextStyles}>01. Sub heading</h6>
          <p className={styles.blogDescTextStyles}>
            Sed eu nulla sed lacus condimentum aliquet. Mauris turpis tellus,
            consectetur nec eros ac, vestibulum finibus eros. Donec et elementum
            lacus, ac convallis tellus. Fusce tincidunt ullamcorper purus, quis
            laoreet metus sodales id. Duis convallis congue nunc, vitae
            dignissim neque hendrerit eu. Donec vulputate sem semper, posuere
            leo id, interdum tellus. Aenean est tortor, feugiat lacinia aliquam
            sit amet, lobortis eu tortor. Nunc non ex massa. In at convallis
            metus, vel convallis nibh.
          </p>
          <p className={styles.blogDescTextStyles}>
            Curabitur eleifend ipsum et odio pulvinar mattis. Nam eleifend augue
            nisi, eu elementum eros posuere nec. Curabitur a magna tortor. Nam
            fringilla, urna non tristique euismod, mauris elit porttitor risus,
            eu laoreet diam turpis at sapien. Aliquam suscipit lorem et nibh
            eleifend cursus. Mauris at dapibus massa.
          </p>
          <p className={styles.blogDescTextStyles}>
            Sed eu nulla sed lacus condimentum aliquet. Mauris turpis tellus,
            consectetur nec eros ac, vestibulum finibus eros. Donec et elementum
            lacus, ac convallis tellus. Fusce tincidunt ullamcorper purus, quis
            laoreet metus sodales id. Duis convallis congue nunc, vitae
            dignissim neque hendrerit eu. Donec vulputate sem semper, posuere
            leo id, interdum tellus. Aenean est tortor, feugiat lacinia aliquam
            sit amet, lobortis eu tortor. Nunc non ex massa. In at convallis
            metus, vel convallis nibh.
          </p>
        </div>
        <div className={styles.blogBottomDescContainerStyles}>
          <h6 className={styles.blogSubHeadingTextStyles}>02. Sub heading</h6>
          <p className={styles.blogDescTextStyles}>
            Sed eu nulla sed lacus condimentum aliquet. Mauris turpis tellus,
            consectetur nec eros ac, vestibulum finibus eros. Donec et elementum
            lacus, ac convallis tellus. Fusce tincidunt ullamcorper purus, quis
            laoreet metus sodales id. Duis convallis congue nunc, vitae
            dignissim neque hendrerit eu. Donec vulputate sem semper, posuere
            leo id, interdum tellus. Aenean est tortor, feugiat lacinia aliquam
            sit amet, lobortis eu tortor. Nunc non ex massa. In at convallis
            metus, vel convallis nibh.
          </p>
          <p className={styles.blogDescTextStyles}>
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
  return (
    <div className={styles.blogPostMainContainerStyles}>
      <NavBar theme={'dark'} />
      {renderBlogDetailsSection()}
      <Divider />
      {renderRecentPostsSection()}
      <Divider />
      <Footer />
    </div>
  );
};

export default IndividualBlog;
