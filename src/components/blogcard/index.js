import React from "react";
import styles from "./styles.module.css";

const BlogCard = props => {
  const { blog, size, onClick = () => {} } = props;
  return (
    <div
      onClick={onClick}
      className={
        size === "large" ? styles.largeBlogCardStyles : styles.blogCardStyles
      }
    >
      <div
        className={
          size === "large"
            ? styles.largeBlogCardImageStyles
            : styles.blogImageStyles
        }
      >
        <img src={blog.image} alt="blog" className={styles.imageWidthStyles} />
      </div>
      <div className={styles.blogDescContainerStyles}>
        <div className={styles.blogDescTopStyles}>
          <p
            className={
              size === "large"
                ? styles.largeBlogCardTitleTextStyles
                : styles.blogTitleTextStyles
            }
          >
            {blog.title}
          </p>
          <p className={styles.blogDescTextStyles}>{blog.desc}</p>
        </div>
        <p className={styles.authorNameTextStyles}>
          - {blog.author} <span>{blog.position}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
