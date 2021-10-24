import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import BlockList from '../../components/BlockList';
import Pagination from '../../components/Pagination';
import getBlocks from '../../api';

import styles from './blocks.module.scss';

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    // const apiUrl = 'https://api.teztracker.com/v2/data/tezos/mainnet/blocks';
    const getData = () => {
      setLoading(true);
      // const newBlocks = await axios.get(apiUrl);
      const newBlocks = getBlocks;
      setBlocks(newBlocks.data);
      setLoading(false);
    };
    getData();
  }, [setBlocks]);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItemIndex = blocks.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  function handleQuantityChange(e) {
    setItemsPerPage(e.target.value);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.page}>Page {currentPage}</h2>
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
        <BlockList blocks={currentItemIndex} loading={loading} />
      </div>
      <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={blocks.length}
          paginate={paginate}
        />
        <div className={styles.buttons}>
          <button className={styles.button} type="button" onClick={prevPage}>
            prev
          </button>
          <button className={styles.button} type="button" onClick={nextPage}>
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Blocks;
