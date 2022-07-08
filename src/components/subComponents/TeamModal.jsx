import React from 'react'
import style from "./../../styles/subcomponents/teammodal.module.css";
import cancel from "./../../assets/cancel.svg";
const TeamModal = ({ image, name, position, info, setShowModal }) => {
  return (
    <div className={style.container}>
      <div className={style.main_container}>
        <button onClick={() => setShowModal(false)}>
          <img src={cancel} alt="" />
        </button>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <span>{position}</span>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default TeamModal
