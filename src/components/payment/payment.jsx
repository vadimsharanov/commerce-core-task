import React from "react";
import "./payment.scss";

const Payment = () => {
  return (
    <div className='payment-container'>
      <div className='payment-title'> TITLE</div>
      <form className='payment-form' action=''>
        <div className='customer-information'>
          <div className='customer-information-title'>
            <div className='form-title'>Customer Information</div>
            <span>Fields marked as (*) are required.</span>
          </div>
          <div className='first-last-names'>
            <input placeholder='*First name' type='text' />
            <input placeholder='*Last name' type='text' />
          </div>
          <div className='email-input'>
            <input placeholder='*Email' type='text' />
          </div>
        </div>

        <div className='shipping-adress'>
          <div className='form-title'>Shipping Adress</div>
          <div>
            <input placeholder='*Adress' type='text' />
          </div>
          <div>
            <input placeholder='*City' type='text' />
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
