import styles from './styles.module.css';
import React from 'react';
const Button = (props) => {
  const {
    btnName,
    customBtnStyles,
    onClick = () => {},
    btnImage,
    customButtonImageStyles,
  } = props;
  return (
    <div
      onClick={onClick}
      className={[styles.buttonStyles, customBtnStyles].join(' ')}
    >
      {btnName && btnName}
      {btnImage && (
        <img
          src={btnImage}
          alt="button icon"
          className={[styles.buttonImageStyles, customButtonImageStyles].join(
            ' '
          )}
        />
      )}
    </div>
  );
};

export default Button;
