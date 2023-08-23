import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';

const BlogCard = (props) => {
  const { blog, size } = props;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/insights/${blog.title}`)}
      className={
        size === 'large' ? styles.largeBlogCardStyles : styles.blogCardStyles
      }
    >
      <div
        className={
          size === 'large'
            ? styles.largeBlogCardImageStyles
            : styles.blogImageStyles
        }
      >
        <img src={blog?.image} alt="blog" className={styles.imageWidthStyles} />
        <img
          src={blog?.hoverImage}
          alt={blog.alt}
          className={styles.hoveredImageStyles}
        />
      </div>
      <div className={styles.blogDescContainerStyles}>
        <div className={styles.blogDescTopStyles}>
          <p
            className={
              size === 'large'
                ? styles.largeBlogCardTitleTextStyles
                : styles.blogTitleTextStyles
            }
          >
            {blog?.headerText}
          </p>
          <p className={styles.blogDescTextStyles}>{blog?.desc}</p>
        </div>
        <p className={styles.authorNameTextStyles}>
          - {blog?.author}
          {/* <span>{blog.position}</span> */}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
