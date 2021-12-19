import React, { useState } from "react";
import DropDown from "./dropDown/dropDown";
import "./payment.scss";
import data from "./dropDownData/data.json";
const Payment = () => {
  const trial = "trial";
  const [country, setCountry] = useState("");
  const getCountry = (country) => {
    setCountry(country);
  };
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
          <div className='dropdown-section'>
            <DropDown
              data={data}
              getCountry={getCountry}
              title={"Country"}></DropDown>
            <DropDown
              data={data}
              country={country}
              title={"Region/State"}></DropDown>
            <input
              className='postal-code-input'
              placeholder='*Postal code'
              type='text'
            />
          </div>
        </div>
        <div className='payment-method'>
          <div className='form-title'>Payment Method </div>
          <span>
            <i className='fa fa-lock' aria-hidden='true'>
              {" "}
            </i>
            &nbsp;
            <span>All transactions are secure and encrypted</span>
          </span>
          <div className='payment-box'>
            <div className='payment-check'>
              <div className='checkbox-container'>
                <div className='checkbox'>
                  <div></div>
                </div>
                <div className='checkbox-text'>Credit Card</div>
              </div>
              <div>
                <img
                  src='https://lh3.googleusercontent.com/UZLln8OyyIlhbYwBFFyRWBPQmg_Tokhq0ypwwWEhej7lAjcIPKJqp-3pQ7qWkWUtI1VN=s170'
                  alt=''
                />
              </div>
            </div>
            <div className='payment-inputs'>
              <div className='payment-card-number'>
                <input placeholder='Card number' type='text' />
              </div>
              <div className='payment-mm-cvv'>
                <input placeholder='MM/YY' type='text' />
                <input placeholder={`CVV ${trial}`} type='text' />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Payment;
