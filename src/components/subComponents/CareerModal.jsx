import React from "react";
import style from "./../../styles/subcomponents/careermodal.module.css";
import cancel from "./../../assets/cancel.svg";
const CareerModal = ({ setShowModal }) => {
  return (
    <div className={style.container}>
      <div className={style.main_container}>
        <button className={style.cancel} onClick={() => setShowModal(false)}>
          <img src={cancel} alt="" />
        </button>
        <h2>SUBMIT YOUR APPLICATION</h2>
        <form>
          <label>
            <span>Full Name <small>*</small></span>
            <input type="text" />
          </label>
          <label>
            <span>Email Address <small>*</small></span>
            <input type="email" name="" id="" />
          </label>
          <label>
            <span>Phone Number <small>*</small></span>
            <input type="tel" />
          </label>
          <label>
            <span>Resume/CV <small>*</small></span>
            <button className={style.file}>
              Attach Resume/CV
              <input type="file" accept="doc/*" required />
            </button>
          </label>
          <label>
            <span>Cover Letter <small>*</small></span>
            <button className={style.file}>
              Attach Cover Letter
              <input type="file" accept="doc/*" required />
            </button>
          </label>
          <label>
            <span>Additional Information <small>*</small></span>
            <textarea></textarea>
          </label>
          <button className={style.apply}>Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default CareerModal;
