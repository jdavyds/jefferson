import React from "react";
import style from "./../../styles/pages/firststart.module.css";
import Footer from "./../subComponents/Footer";
import Header from "./../subComponents/Header";
import send from './../../assets/card-send.png'
import holder from './../../assets/start-holder.png'
import illustration1 from './../../assets/Illustration 1.png'
import illustration2 from "./../../assets/Illustration 2.png";
import illustration3 from "./../../assets/Illustration 3.png";
import illustration4 from "./../../assets/Illustration 4.png";
import steps from './../../assets/steps.png'
export default function FirstStart() {
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>First start Page</h3>
        <h1>
          Your journey at Jefferson just <br /> got more profitable.
        </h1>
        <p>
          Our First Start package is all you need to progress on your journey to{" "}
          <br />
          the top of the hospitality industry. We make sure you are not alone on{" "}
          <br />
          your journey to success
        </p>
        <label>
          <button>Join Jefferson Life</button>
          <span>
            <img src={send} alt="" />
            $1000 subscribtion fee
          </span>
        </label>
      </section>
      <section className={style.details}>
        <div>
          <figure>
            <img src={holder} alt="" />
            <img src={holder} alt="" />
            <img src={holder} alt="" />
          </figure>
          <p>
            First Start is a package created for our first starters as Jefferson
            Life members that makes the onboarding process easier. You get
            hand-held advice and resources that helps you make profitable
            investments We believe in making sure that your first investment is
            successful, and the stepping stone to bigger investments.
          </p>
        </div>
        <div>
          <p>
            We give you access to a greater network of projects and business all
            over Africa, helping you to invest in new and potentially successful
            businesses upcoming businesses.
          </p>
          <figure>
            <img src={holder} alt="" />
            <img src={holder} alt="" />
            <img src={holder} alt="" />
          </figure>
        </div>
      </section>
      <section className={style.steps}>
        <h3>FIRST START MEMBERS ENJOY THE FOLLOWING BENEFITS</h3>
        <nav>
          <img src={illustration1} alt="" />
          Free unlimited virtual consultancy
        </nav>
        <nav>
          <img src={illustration2} alt="" />
          Free priority access to trainings <br /> and webinars
        </nav>
        <nav>
          <img src={illustration3} alt="" />
          Access to special events
        </nav>
        <nav>
          <img src={illustration4} alt="" />
          Up to 50% discounts from Jefferson <br /> brands and collections and off
          onsite <br /> or one-on-one consultancy
        </nav>
        <label>
          <button>Join Jefferson Life</button>
          <span>
            <img src={send} alt="" />
            $1000 subscribtion fee
          </span>
        </label>
        <img src={steps} alt="" />
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
