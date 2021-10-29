import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../../components/Table';

import styles from './Blocks.module.scss';

export const Blocks = ({ blocks }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.page}>Page</h2>
      <p className={styles.block_header}>Blocks list</p>
      <div>
        <p>Items per page</p>
        <Table blocks={blocks} />
      </div>
    </div>
  );
  // eslint-disable-next-line no-unreachable
  Blocks.propTypes = {
    blocks: PropTypes.node.isRequired,
  };
};
