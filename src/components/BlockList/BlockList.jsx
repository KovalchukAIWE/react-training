import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlockList.module.scss';

const numeral = require('numeral');

const BlockList = ({ array, loading }) => {
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
          {array.map((item) => {
            return (
              <>
                <tr key={item.level}>
                  <td>
                    <div className={styles.row_title}>
                      {item.level.toLocaleString()}
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>{item.baker}</div>
                  </td>
                  <td>
                    <div className={styles.row_title}>
                      {numeral(item.timestamp).format('00.00.00 00:00:00')}
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>
                      {item.number_of_operations}
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>
                      {item.volume}
                      &#42793;
                    </div>
                  </td>
                  <td>
                    <div className={styles.row_title}>
                      {numeral(item.fees).format('0')}
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
  array: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
};

export default BlockList;
