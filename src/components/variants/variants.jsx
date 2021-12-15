import React, { useState } from "react";
import "./variants.scss";
const singleProduct =
  "https://lh3.googleusercontent.com/Asov37bn3f3dSu086PZ5-keey-rLusH-E9ZcoT-AwlkNumNQM_KX6bWAdKWiQttFe3mmB5g=s40";
const products =
  "https://lh3.googleusercontent.com/sq4VFfXzwP3Rorjh7XIaOSifkop-5WHFkx5IbNWBuWajzSYJ45AwnbAGsuYab8-zB93JDw=s40";
const Variants = () => {
  const [open, setOpen] = useState(false);

  const showContent = () => {
    setOpen(!open);
  };

  return (
    <div className='variants-container'>
      <div className='variants-title'>Variants</div>
      <div className='variants-box'>
        <div className='variants-dropdown'>
          <div className='variants-dropdown-left-side'>
            <img src={products} alt='#' />
            <div>1xCoreProduct&reg;</div>
          </div>
          <div
            className='variants-dropdown-right-side change-button'
            onClick={showContent}>
            <span>Change</span>
            <i
              style={{ transform: open ? "" : "rotate(180deg)" }}
              className='fa fa-chevron-up change-arrow'
              aria-hidden='true'></i>
          </div>
        </div>
        <span className='horizontal-line'></span>
        {open && (
          <div className='variants-dropdown-content'>
            <div className='variants-dropdown-content-single'>
              <div className='variants-dropdown-left-side'>
                <img src={singleProduct} alt='#' />
                <div>
                  <span style={{ fontWeight: 700 }}>1x </span>
                  CoreProduct&reg;
                </div>
              </div>
              <div className='variants-dropdown-right-side'>$19.99</div>
            </div>
            <div className='variants-dropdown-content-single'>
              <div className='variants-dropdown-left-side'>
                <img src={singleProduct} alt='#' />
                <div>
                  <span style={{ fontWeight: 700 }}>1x </span>
                  CoreProduct&reg;
                </div>
              </div>
              <div className='variants-dropdown-right-side'>$19.99</div>
            </div>
            <div className='variants-dropdown-content-single'>
              <div className='variants-dropdown-left-side'>
                <img src={singleProduct} alt='#' />
                <div>
                  <span style={{ fontWeight: 700 }}>1x </span>
                  CoreProduct&reg;
                </div>
              </div>
              <div className='variants-dropdown-right-side'>$19.99</div>
            </div>
            <div className='save-changes-button'>
              <button>SAVE CHANGES</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Variants;
