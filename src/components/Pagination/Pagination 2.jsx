import React from 'react';

import styles from './Pagination.module.scss';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.pages}>
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              className={styles.link}
              href="!#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
