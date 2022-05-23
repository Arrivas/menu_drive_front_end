import PaymentRedFailed from '../../redirects/PaymentRedFailed';

import React from 'react';

interface SucessProps {}

const Sucess: React.FC<SucessProps> = () => {
  return (
    <>
      <PaymentRedFailed />
    </>
  );
};

export default Sucess;
