/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDataFromApi } from '../../api';

export const BlocksContext = createContext();

const Provider = ({ children }) => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [totalCount, setTotalCount] = useState('');

  useEffect(() => {
    const blocksFromApi = getDataFromApi();
    setBlocks(blocksFromApi);
  }, [limit, offset]);

  const blocksContextValue = {
    limit,
    offset,
    totalCount,
    blocks,
  };

  return (
    <BlocksContext.Provider value={blocksContextValue}>
      {children}
    </BlocksContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
