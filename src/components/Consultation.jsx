import React from 'react'
import style from './../styles/consultation.module.css'
import Footer from './Footer'
import Header from './Header'
import redsonbet from "./../assets/redson.png";
import connecthub from "./../assets/connect.png";
import soho from "./../assets/soho.png";
import temple from "./../assets/temple.png";
import cv from './../assets/cv.png'
import info from './../assets/info-circle.png'
export default function Consultation() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <section className={style.hero}>
          <h3>Request a Consultation</h3>
          <h2>
            Innovative Ideas, <br /> Flawlessly Executed
          </h2>
          <p>
            To be the industry-leading hospitality company , It takes an
            innovative group of passionate experts. Seek a consultation from the
            people leading the way at Jefferson Hospitality.
          </p>
          <figcaption>Trusted by</figcaption>
          <figure>
            <img src={temple} alt="" />
            <img src={redsonbet} alt="" />
            <img src={connecthub} alt="" />
            <img src={cv} alt="" />
            <img src={soho} alt="" />
          </figure>
        </section>
        <section className={style.form}>
          <h3>Request a Consultation</h3>
          <form>
            <input type="text" placeholder="First and last name" />
            <input type="email" placeholder="Email address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Company name" />
            <label className={style.container}>
              <p>
                Free Consultation <img src={info} alt="" />
              </p>
              <input type="radio" checked="checked" name="radio" />
              <span className={style.checkmark}></span>
            </label>
            <label className={style.container}>
              <p>
                Paid Consultation <img src={info} alt="" />
              </p>
              <input type="radio" name="radio" />
              <span className={style.checkmark}></span>
            </label>
            <label>
              <button>Pick date and time</button>{" "}
              <span>25 june, 2022 10.30am</span>
            </label>
            <button>Request Consultation</button>
          </form>
        </section>
      </main>
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
