/* eslint-disable no-console */
import React, { useContext } from 'react';
import { BlocksContext } from '../Provider/Provider';
import styles from './Table.module.scss';

const dayjs = require('dayjs');

export const Table = () => {
  const { blocks } = useContext(BlocksContext);
  console.log(blocks);
  if (!blocks) return null;
  // console.log(blocks);

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
          {Object.values(blocks).map((item) => {
            console.log(item.level);
            return (
              <>
                <tr key={item.baker}>
                  <td>
                    <div className={styles.row_title}>{item.level}</div>
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
