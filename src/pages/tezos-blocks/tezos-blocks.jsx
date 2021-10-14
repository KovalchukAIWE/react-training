import React, { useContext } from 'react';
import GetBlocks from '../../api';
import Context from '../../components/Context';

const TezosBlocks = () => {
  useContext(Context);
  return <GetBlocks />;
};

export default TezosBlocks;
