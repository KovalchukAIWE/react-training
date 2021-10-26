/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import BlockList from '../../components/BlockList';
// import Pagination from '../../components/Pagination';
import getBlocks from '../../api';

import styles from './blocks.module.scss';

const Blocks = () => {
  // eslint-disable-next-line no-unused-vars
  const [blocks, setBlocks] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [offset, setOffset] = useState(15);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getData = async () => {
      const currentPage = offset / itemsPerPage + 1;
      const newBlocks = await getBlocks(itemsPerPage, offset);
      console.log(newBlocks, currentPage);
      setBlocks(newBlocks);
      setCurrPage(currentPage);
    };
    getData();
  }, [itemsPerPage, offset]);

  // const lastItemIndex = currentPage * itemsPerPage;
  // const firstItemIndex = lastItemIndex - itemsPerPage;
  // const currentItemIndex = blocks.slice(firstItemIndex, lastItemIndex);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // const nextPage = () => setCurrentPage((prev) => prev + 1);
  // const prevPage = () => setCurrentPage((prev) => prev - 1);

  function handleQuantityChange(e) {
    setItemsPerPage(e.target.value);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.page}>Page {currPage}</h2>
        <p className={styles.block_header}>Blocks list</p>
        <div>
          <p>Items per page</p>
          <select
            className={styles.select}
            defaultValue={itemsPerPage}
            onChange={handleQuantityChange}
          >
            <option defaultValue="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <BlockList blocks={blocks} />
      </div>
      {/* <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={blocks.length}
          // paginate={paginate}
        />
        <div className={styles.buttons}>
          <button className={styles.button} type="button">
            prev
          </button>
          <button className={styles.button} type="button">
            next
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Blocks;
