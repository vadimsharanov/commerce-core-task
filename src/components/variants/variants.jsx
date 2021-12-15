import React from "react";
import "./variants.scss";

const singleProduct =
  "https://lh3.googleusercontent.com/Asov37bn3f3dSu086PZ5-keey-rLusH-E9ZcoT-AwlkNumNQM_KX6bWAdKWiQttFe3mmB5g=s40";
const products =
  "https://lh3.googleusercontent.com/sq4VFfXzwP3Rorjh7XIaOSifkop-5WHFkx5IbNWBuWajzSYJ45AwnbAGsuYab8-zB93JDw=s40";
const Variants = () => {
  return (
    <div className='variants-container'>
      <div className='variants-title'>Title</div>
      <div className='variants-box'>
        <div className='variants-dropdown'>
          <div className='variants-dropdown-left-side'>
            <img src={products} alt='' />
            <div>1xCoreProduct &reg;</div>
          </div>
          <div className='variants-dropdown-right-side'>
            <span>Change</span>
            <span>&#8250;</span>
          </div>
        </div>
        <div className='variants-dropdown-content'>
          <div className='variants-dropdown-content-single'>
            <div className='variants-dropdown-left-side'>
              <img src={products} alt='' />
              <div>1xCoreProduct &reg;</div>
            </div>
            <div className='variants-dropdown-right-side'>$19.99</div>
          </div>
          <div className='variants-dropdown-content-single'>
            <div className='variants-dropdown-left-side'>
              <img src={products} alt='' />
              <div>1xCoreProduct &reg;</div>
            </div>
            <div className='variants-dropdown-right-side'>$19.99</div>
          </div>
          <div className='variants-dropdown-content-single'>
            <div className='variants-dropdown-left-side'>
              <img src={products} alt='' />
              <div>1xCoreProduct &reg;</div>
            </div>
            <div className='variants-dropdown-right-side'>$19.99</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Variants;
