import React from "react";
import style from "./../styles/careermodal.module.css";
import cancel from "./../assets/cancel.svg";
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
            <span>Full Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email Address</span>
            <input type="email" name="" id="" />
          </label>
          <label>
            <span>Phone Number</span>
            <input type="tel" />
          </label>
          <label>
            <span>Resume/CV</span>
            <button className={style.file}>
              Attach Resume/CV
              <input type="file" accept="doc/*" required />
            </button>
          </label>
          <label>
            <span>Cover Letter</span>
            <button className={style.file}>
              Attach Cover Letter
              <input type="file" accept="doc/*" required />
            </button>
          </label>
          <label>
            <span>Additional Information</span>
            <textarea></textarea>
          </label>
          <button className={style.apply}>Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default CareerModal;
