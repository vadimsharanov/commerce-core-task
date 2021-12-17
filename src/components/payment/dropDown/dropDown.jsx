import React, { useEffect, useRef, useState } from "react";
import "./dropDown.scss";
const DropDown = ({ data, title, getCountry, country }) => {
  const selectCountry = data.filter((item) => item.countryName === country);
  // console.log(regions[0].regions, "regions");
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("Select");
  console.log();
  const openDropDown = (e) => {
    e.preventDefault();
    if (open) {
      setOpen(false);
    }
    if (!open) {
      setOpen(true);
    }
  };
  const setCountry = (f) => {
    setSelect(f.target.textContent);
    getCountry(f.target.textContent);
  };
  // useEffect(() => {
  //   const myshka = (e) => {
  //     if (e.target.parentNode !== ref.current) {
  //       // setOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", myshka);
  //   return () => {
  //     document.removeEventListener("mousedown", myshka);
  //   };
  // }, [open]);
  return (
    <div className='dropdown' onClick={openDropDown}>
      <div className='dropdown-button'>
        <div className='dropdown-title'>
          <span>*{title}</span>
          <span className='dropdown-title-select'>{select}</span>
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
        <div className='dropdown-content'>
          {typeof country === "undefined" &&
            data.map((item, key) => (
              <span onClick={setCountry} key={key}>
                {item.countryName}
              </span>
            ))}
          {country &&
            selectCountry[0].regions.map((item, key) => (
              <span onClick={setCountry} key={key}>
                {item.name}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
