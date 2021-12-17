import React, { useEffect, useRef, useState } from "react";
import "./dropDown.scss";
const DropDown = () => {
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
          <span>*Country</span>
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
            <span className='with-icon'>Kaip veikia Vinted?</span>
            <span>Programėlė</span>
            <span>Pagalba</span>
            <span>Aktualu</span>
            <span>Programėlė</span>
            <span>Pagalba</span>
            <span>Aktualu</span>
            <span>Programėlė</span>
            <span>Pagalba</span>
            <span>Aktualu</span>
            <span>Programėlė</span>
            <span>Pagalba</span>
            <span>Aktualu</span>
            <span>Programėlė</span>
            <span>Pagalba</span>
            <span>Aktualu</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
