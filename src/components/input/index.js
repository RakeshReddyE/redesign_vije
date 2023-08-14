import React from 'react';

const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type || 'text'}
      name={name}
      placeholder={placeholder}
      className={styles.inputTextViewStyle}
    />
  );
};

export default Input;
