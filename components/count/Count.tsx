import React from 'react';

import styles from './Count.module.scss';

interface CountProps {
  count: number;
}

export const Count = ({ count }: CountProps) => (
  <div className={styles.root}>
    <span className={styles.text}>{`${count} items left`}</span>
  </div>
);
