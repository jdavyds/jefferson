import React from 'react'
import style from "./../../styles/pages/partnership.module.css";
import Footer from './../subComponents/Footer'
import Header from './../subComponents/Header'
import down from './../../assets/down.png'
export default function PartnershipLife() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <section className={style.hero}>
          <h3>Partnership Life</h3>
          <h2>
            Innovative Ideas, <br /> Flawlessly Executed
          </h2>
          <p>
            To be the industry-leading hospitality company , It takes an
            innovative group of passionate experts. Seek a consultation from the
            people leading the way at Jefferson Hospitality.
          </p>
        </section>
        <section className={style.form}>
          <h3>Request a Consultation</h3>
          <form>
            <input type="text" placeholder="First and last name" />
            <input type="text" placeholder="Address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Company Website" />
            <label>
              <select name="purpose" id="sex">
                <option value="Consultant" selected="selected">Consultant</option>
                <option value="Shareholder">Shareholder</option>
                <option value="Investor">Investor</option>
              </select>
              <img src={down} alt="" />
            </label>
            <button>Register</button>
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
