import React from "react";
import style from "./../../styles/pages/invests.module.css";
import Footer from "./../subComponents/Footer";
import Header from "./../subComponents/Header";
import hero from "./../../assets/servicesbg.png";
import holder from './../../assets/invest-holder.png'
import { useNavigate } from 'react-router-dom';
export default function Invests() {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>First start Page</h3>
        <h1>
          Innovative Ideas, Flawlessly <br /> Executed
        </h1>
        <p>
          To be the industry-leading hospitality company , It takes an <br />
          innovative group of passionate experts.
        </p>
        <img src={hero} alt="" />
        <button>Contact our team</button>
      </section>
      <section className={style.main}>
        <h2>See Areas You Can Invest In</h2>
        <div>
          <nav>
            <h3>Hotels and Resorts</h3>
            <h2>We will set benchmarks of innovation and execute </h2>
            <p>
              <b>Jefferson Hospitality</b> will be an industry-leading
              hospitality company recognised as best-in-class in each of its
              selected product and service categories in the investment,
              management and development in the region of operations
            </p>
            <button
              onClick={() =>
                navigate(`/invest-in-hospitality/Hotels and Resorts`)
              }
            >
              See more details
            </button>
          </nav>
          <figure>
            <img src={holder} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={holder} alt="" />
          </figure>
          <nav>
            <h3>Restaurants and Bar</h3>
            <h2>We will set benchmarks of innovation and execute </h2>
            <p>
              <b>Jefferson Hospitality</b> will be an industry-leading
              hospitality company recognised as best-in-class in each of its
              selected product and service categories in the investment,
              management and development in the region of operations
            </p>
            <button
              onClick={() =>
                navigate(`/invest-in-hospitality/Restaurants and Bar`)
              }
            >
              See more details
            </button>
          </nav>
        </div>
        <div>
          <nav>
            <h3>Clubs and Casino</h3>
            <h2>We will set benchmarks of innovation and execute </h2>
            <p>
              <b>Jefferson Hospitality</b> will be an industry-leading
              hospitality company recognised as best-in-class in each of its
              selected product and service categories in the investment,
              management and development in the region of operations
            </p>
            <button
              onClick={() =>
                navigate(`/invest-in-hospitality/Clubs and Casino`)
              }
            >
              See more details
            </button>
          </nav>
          <figure>
            <img src={holder} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={holder} alt="" />
          </figure>
          <nav>
            <h3>Parks and Gardens</h3>
            <h2>We will set benchmarks of innovation and execute </h2>
            <p>
              <b>Jefferson Hospitality</b> will be an industry-leading
              hospitality company recognised as best-in-class in each of its
              selected product and service categories in the investment,
              management and development in the region of operations
            </p>
            <button
              onClick={() =>
                navigate(`/invest-in-hospitality/Parks and Gardens`)
              }
            >
              See more details
            </button>
          </nav>
        </div>
        <div>
          <nav>
            <h3>Event Centers</h3>
            <h2>We will set benchmarks of innovation and execute </h2>
            <p>
              <b>Jefferson Hospitality</b> will be an industry-leading
              hospitality company recognised as best-in-class in each of its
              selected product and service categories in the investment,
              management and development in the region of operations
            </p>
            <button
              onClick={() => navigate(`/invest-in-hospitality/Event Centers`)}
            >
              See more details
            </button>
          </nav>
          <figure>
            <img src={holder} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={holder} alt="" />
          </figure>
          <nav>
            <h3>Health, Wellness and Spa</h3>
            <h2>We will set benchmarks of innovation and execute </h2>
            <p>
              <b>Jefferson Hospitality</b> will be an industry-leading
              hospitality company recognised as best-in-class in each of its
              selected product and service categories in the investment,
              management and development in the region of operations
            </p>
            <button
              onClick={() =>
                navigate(`/invest-in-hospitality/Health, Wellness and Spa`)
              }
            >
              See more details
            </button>
          </nav>
        </div>
        <div>
          <nav>
            <h3>Residential Lifestyle</h3>
            <h2>We will set benchmarks of innovation and execute </h2>
            <p>
              <b>Jefferson Hospitality</b> will be an industry-leading
              hospitality company recognised as best-in-class in each of its
              selected product and service categories in the investment,
              management and development in the region of operations
            </p>
            <button
              onClick={() =>
                navigate(`/invest-in-hospitality/Residential Lifestyle`)
              }
            >
              See more details
            </button>
          </nav>
          <figure>
            <img src={holder} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={holder} alt="" />
          </figure>
          <nav>
            <h3>Short Lets</h3>
            <h2>We will set benchmarks of innovation and execute </h2>
            <p>
              <b>Jefferson Hospitality</b> will be an industry-leading
              hospitality company recognised as best-in-class in each of its
              selected product and service categories in the investment,
              management and development in the region of operations
            </p>
            <button
              onClick={() => navigate(`/invest-in-hospitality/Short Lets`)}
            >
              See more details
            </button>
          </nav>
        </div>
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
