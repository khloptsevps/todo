'use client';

import React from 'react';

import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

const CustomButton = ({
  children,
  color,
  disabled,
  onClick,
}: CustomButtonProps) => {
  const btnColor = !color ? 'primary' : color;
  const handler = !onClick ? () => {} : onClick;
  const classes = `${styles.root} ${styles[btnColor]} ${
    disabled ? styles.disabled : ''
  }`;

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default CustomButton;
