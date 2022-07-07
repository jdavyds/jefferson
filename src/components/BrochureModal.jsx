import React from "react";
import style from "./../styles/eventsmodal.module.css";
import cancel from "./../assets/cancel.svg";
const BrochureModal = ({ setShowModal }) => {
  return (
    <div className={style.container}>
      <div className={style.main_container}>
        <button className={style.cancel} onClick={() => setShowModal(false)}>
          <img src={cancel} alt="" />
        </button>
        <h2>DOWNLOAD OUR BROCHURE</h2>
        <form>
          <label>
            <span>
              Full Name <small>*</small>
            </span>
            <input type="text" />
          </label>
          <label>
            <span>
              Email Address <small>*</small>
            </span>
            <input type="email" name="" id="" />
          </label>
          <button className={style.apply}>Get my brochure</button>
        </form>
      </div>
    </div>
  );
};

export default BrochureModal;
