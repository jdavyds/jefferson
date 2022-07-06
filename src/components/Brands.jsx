import React from "react";
import style from "./../styles/brands.module.css";
import Footer from "./Footer";
import Header from "./Header";
import brand1 from "./../assets/brand1.png";
import brand2 from "./../assets/brand2.png";
import brand3 from "./../assets/brand3.png";
import mayfair from "./../assets/brand-mayfair.png";
import temple from "./../assets/brand-temple.png";
import connecthub from "./../assets/brand-connecthub.png";
import cv from "./../assets/brand-cv.png";
import soho from "./../assets/brand-soho.png";
import exp from "./../assets/export.png";
import { useNavigate } from "react-router-dom";

export default function Brands() {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Our Brands Page</h3>
        <h1>
          Helping Hospitality Brands <br /> Upscale Faster{" "}
        </h1>
        <p>
          Planning its future by expanding its scope into modern <br />{" "}
          commercial and residential development with a{" "}
        </p>
      </section>
      <section className={style.brands}>
        <h2>OUR FEATURED BRANDS</h2>
        <div className={style.brand}>
          <figure>
            <img src={brand1} alt="" />
          </figure>
          <nav>
            <div>
              <img src={mayfair} alt="" />
              Mayfair Design Studios
            </div>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button onClick={() => navigate(`/brands/Mayfair Design Studios`)}>
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
        </div>
        <div className={style.brand}>
          <nav>
            <div>
              <img src={temple} alt="" />
              Temple Grill
            </div>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button onClick={() => navigate(`/brands/Temple Grill`)}>
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
          <figure>
            <img src={brand2} alt="" />
          </figure>
        </div>
        <div className={style.brand}>
          <figure>
            <img src={brand3} alt="" />
          </figure>
          <nav>
            <div>
              <img src={connecthub} alt="" />
              Connecthub
            </div>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button onClick={() => navigate(`/brands/Connecthub`)}>
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
        </div>
        <div className={style.brand}>
          <nav>
            <div>
              <img src={cv} alt="" />
              Cloudvista
            </div>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button onClick={() => navigate(`/brands/Cloudvista`)}>
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
          <figure>
            <img src={brand1} alt="" />
          </figure>
        </div>
        <div className={style.brand}>
          <figure>
            <img src={brand1} alt="" />
          </figure>
          <nav>
            <div>
              <img src={soho} alt="" />
              Soho Bar and Restaurants
            </div>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button
              onClick={() => navigate(`/brands/Soho Bar and Restaurants`)}
            >
              Learn more <img src={exp} alt="" />{" "}
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
