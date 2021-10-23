import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlockList.module.scss';

const dayjs = require('dayjs');

const BlockList = ({ blocks, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.block}>
      <table className={styles.table}>
        <thead className={styles.item_wrapper}>
          <tr>
            <th className={styles.item}>
              <div className={styles.item_title}>Block ID</div>
            </th>
            <th className={styles.item}>
              <div className={styles.item_title}>Baker</div>
            </th>
            <th className={styles.item}>
              <div className={styles.item_title}>Timestamp</div>
            </th>
            <th className={styles.item}>
              <div className={styles.item_title}># of operations</div>
            </th>
            <th className={styles.item}>
              <div className={styles.item_title}>Volume</div>
            </th>
            <th className={styles.item}>
              <div className={styles.item_title}>Fee</div>
            </th>
            <th className={styles.item}>
              <div className={styles.item_title}>Endorsements</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((item) => {
            return (
              <>
                <tr key={item.baker}>
                  <td>
                    <div className={styles.row_title}>
                      {item.level.toLocaleString()}
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>{item.bakerName}</div>
                  </td>
                  <td>
                    <div className={styles.row_title}>
                      {dayjs.unix(item.timestamp).format('YYYY.MM.DD HH:mm:ss')}
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>
                      {item.number_of_operations}
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>
                      {(item.volume * 1e-7).toFixed(6)}
                      &#42793;
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>
                      {(item.fees * 1e-6).toFixed(6)}
                      &#42793;
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>{item.endorsements}</div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

BlockList.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BlockList;
