import React from "react";
import "./payment.scss";

const Payment = () => {
  return (
    <div className='payment-container'>
      <div className='payment-title'> TITLE</div>
      <form className='payment-form' action=''>
        <div className='customer-information'>
          <div>customer information</div>
          <div>field marked as </div>
          <div>
            <input type='text' />
            <input type='text' />
          </div>
          <div>
            <input type='text' />
          </div>
        </div>

        <div className='shipping-adress'>
          <div>shipping adress</div>
          <div>
            <input type='text' />
          </div>
          <div>
            <input type='text' />
          </div>
          <div>
            <span>dropdown</span>
            <span>dropdown</span>
            <input type='text' />
          </div>
        </div>
        <div>payment method is coming .... soon</div>
      </form>
    </div>
  );
};
export default Payment;
