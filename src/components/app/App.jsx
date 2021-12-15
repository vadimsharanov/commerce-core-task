import React from "react";
import Payment from "../payment/payment";
import Total from "../total/total";
import Variants from "../variants/variants";

const App = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className=' col-12 col-sm-6 col-md-6 col-xl-6 variants-payment '>
          <div className='row-1'>
            <Variants></Variants>
          </div>
          <div className='row-2'>
            <Payment></Payment>
          </div>
        </div>
        <div className=' col-12 col-sm-4 col-md-4  col-xl-4 total-container'>
          <Total></Total>
        </div>
      </div>
    </div>
  );
};
export default App;
