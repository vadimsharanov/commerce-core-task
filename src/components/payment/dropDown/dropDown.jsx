import React, { useEffect, useRef, useState } from "react";
import "./dropDown.scss";
const DropDown = ({ data, title }) => {
  const [open, setOpen] = useState(false);

  const openDropDown = (e) => {
    e.preventDefault();
    if (open) {
      setOpen(false);
    }
    if (!open) {
      setOpen(true);
    }
  };
  useEffect(() => {
    const myshka = (e) => {
      if (e.target.parentNode !== ref.current) {
        // setOpen(false);
      }
    };
    document.addEventListener("mousedown", myshka);
    return () => {
      document.removeEventListener("mousedown", myshka);
    };
  }, [open]);

  const ref = useRef("");
  return (
    <div className='dropdown' onClick={openDropDown}>
      <div className='dropdown-button'>
        <div className='dropdown-title'>
          <span>*{title}</span>
          <span className='dropdown-title-select'>Select</span>
        </div>
      </div>
      <div className='dropdown-arrow'>
        <i
          style={{ transform: open ? "" : "rotate(180deg)" }}
          className='fa fa-chevron-up'
          aria-hidden='true'></i>
      </div>
      {/* <button onClick={openDropDown} className='dropdown-button'>
        Apie mus
      </button> */}
      {open && (
        <div className='apie-mus-dropdown-all-levels'>
          <div className='apie-mus-first-level'>
            {data.map((item, key) => (
              <span key={key}>{item.countryName}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
