import React from 'react'
import style from './../styles/collections.module.css'
import Header from './Header'
import Footer from './Footer'
import hero from "./../assets/collections-hero.png";
import { useNavigate } from 'react-router-dom';
// import mayfair from "./../assets/brand-mayfair.png";
// import temple from "./../assets/brand-temple.png";
// import connecthub from "./../assets/brand-connecthub.png";
// import cv from "./../assets/brand-cv.png";
// import soho from "./../assets/brand-soho.png";
import exp from "./../assets/export.png";
import triangles from './../assets/triangles.png'
export default function Collections() {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <div>
          <h3>Our Collections</h3>
          <h2>
            Jefferson Collection <br /> Page
          </h2>
          <p>
            Planning its future by expanding its scope into modern commercial
            and residential development with a
          </p>
        </div>
        <figure>
          <img src={hero} alt="" className={style.big} />
          <img src={hero} alt="" className={style.big} />
          <img src={hero} alt="" className={style.big} />
        </figure>
      </section>
      <section className={style.brands}>
        <h2>OUR FEATURED BRANDS</h2>
        <div className={style.brand}>
          <figure>
            <img src={triangles} alt="" />
          </figure>
          <nav>
            <h3>
              {/* <img src={mayfair} alt="" /> */}
              Mayfair Design Studios
            </h3>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button
              onClick={() => navigate(`/collections/Mayfair Design Studios`)}
            >
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
        </div>
        <div className={style.brand}>
          <nav>
            <h3>
              {/* <img src={temple} alt="" /> */}
              Temple Grill
            </h3>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button onClick={() => navigate(`/collections/Temple Grill`)}>
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
          <figure>
            <img src={triangles} alt="" />
          </figure>
        </div>
        <div className={style.brand}>
          <figure>
            <img src={triangles} alt="" />
          </figure>
          <nav>
            <h3>
              {/* <img src={connecthub} alt="" /> */}
              Connecthub
            </h3>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button onClick={() => navigate(`/collections/Connecthub`)}>
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
        </div>
        <div className={style.brand}>
          <nav>
            <h3>
              {/* <img src={cv} alt="" /> */}
              Cloudvista
            </h3>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button onClick={() => navigate(`/collections/Cloudvista`)}>
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
          <figure>
            <img src={triangles} alt="" />
          </figure>
        </div>
        <div className={style.brand}>
          <figure>
            <img src={triangles} alt="" />
          </figure>
          <nav>
            <h3>
              {/* <img src={soho} alt="" /> */}
              Soho Bar and Restaurants
            </h3>
            <p>
              <strong>Jefferson Hospitality</strong> takes its name from the
              word fashionable Brushstrokes stylising this act is symbolically
              incorporated into our corporate logo and captures the fundamental
              essence of hospitality.{" "}
            </p>
            <button
              onClick={() => navigate(`/collections/Soho Bar and Restaurants`)}
            >
              Learn more <img src={exp} alt="" />{" "}
            </button>
          </nav>
        </div>
      </section>
      <section className={style.subscribe}>
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p>
          Our focus is on mid to upscale hotels, restaurants,nightlife venues,
          and resorts intelligently designed with user experience
        </p>
        <label>
          <input type="email" placeholder="Enter your Email Address" />
          <button>Subscribe</button>
        </label>
      </section>
      <Footer />
    </div>
  );
}
