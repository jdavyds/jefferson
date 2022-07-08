import React from 'react'
import style from "./../../styles/pages/awards.module.css";
import Header from './../subComponents/Header'
import award1 from './../../assets/award1.png'
import award2 from "./../../assets/award2.png";
import award3 from './../../assets/award3.png'
import award4 from "./../../assets/award4.png";
import award5 from "./../../assets/award5.png";
import award6 from "./../../assets/award6.png";
import Footer from './../subComponents/Footer';
export default function Awards() {
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Our Awards</h3>
        <h2>Some Of Our Ever Increasing Achievements</h2>
      </section>
      <section className={style.awards}>
        <figure>
          <img src={award1} alt="" />
          <img src={award2} alt="" />
        </figure>
        <figure>
          <img src={award3} alt="" />
          <img src={award4} alt="" />
        </figure>
        <figure>
          <img src={award5} alt="" />
          <img src={award6} alt="" />
        </figure>
      </section>
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
