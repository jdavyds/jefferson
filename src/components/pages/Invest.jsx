import React, { useEffect, useState } from "react";
import style from "./../../styles/pages/invest.module.css";
import Footer from "./../subComponents/Footer";
import Header from "./../subComponents/Header";
import arrleft from "./../../assets/arrow-left.png";
import arrright from "./../../assets/arrow-right.png";
import { useParams } from "react-router-dom";
import { InvestDetails } from "./../subComponents/InvestDetails";
export default function Invest() {
  let params = useParams();
  const [info, setInfo] = useState({});
  const [current, setCurrent] = useState(false);
  const [trans, setTrans] = useState(0);
  function handleNext() {
    if (trans === 0) {
      setTrans(-100);
      setCurrent(true);
    }
    if (trans === -100) {
      return;
    }
  }
  function handleBack() {
    if (trans === 0) {
      return;
    }
    if (trans === -100) {
      setTrans(0);
      setCurrent(false);
    }
  }
  let transform_style = {
    transform: "translateX(" + trans + "% )",
  };
  useEffect(() => {
    InvestDetails.forEach((detail) => {
      if (detail.title === params.id) {
        setInfo(detail);
        console.log(detail);
      }
    });
  }, [params.id]);
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Invest in Hospitality</h3>
        <h2>{info.title}</h2>
        <p>How you can invest with us</p>
      </section>
      <section className={style.details}>
        <div>
          <h4>Our Process</h4>
          {info.process}
          <h4>Projects You Could Work On</h4>
          {info.description}
        </div>
      </section>
      <section className={style.gallery}>
        <h3>See some of our past work in this field</h3>
        <div>
          <figure style={transform_style}>
            <img src={info.gallery1} alt="" />
            <img src={info.gallery2} alt="" />
            <img src={info.gallery3} alt="" />
            <img src={info.gallery4} alt="" />
          </figure>
          <figure style={transform_style}>
            <img src={info.gallery5} alt="" />
            <img src={info.gallery6} alt="" />
            <img src={info.gallery7} alt="" />
            <img src={info.gallery8} alt="" />
          </figure>
        </div>
        <nav>
          <button onClick={handleBack} className={current ? "" : style.true}>
            <img src={arrleft} alt="" />
          </button>
          <button onClick={handleNext} className={current ? style.true : ""}>
            {" "}
            <img src={arrright} alt="" />
          </button>
        </nav>
      </section>
      <button className={style.btn}>Contact Our Team</button>
      <section className={style.subscribe}>
        <strong>STAY UPDATED</strong>
        <label>
          <input type="email" placeholder="Enter your Email Address" />
          <button>Subscribe</button>
        </label>
      </section>
      <Footer />
    </div>
  );
}
