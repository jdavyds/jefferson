import React, { useState, useEffect} from "react";
import style from "./../styles/brand.module.css";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { BrandDetail } from "./BrandDetail";
export default function Brand() {
    let navigate = useNavigate()
    let params = useParams();
    const [info, setInfo] = useState({});
    useEffect(() => {
      BrandDetail.forEach((detail) => {
        if (detail.title === params.id) {
          setInfo(detail);
          console.log(detail);
        }
      });
    }, [params.id]);
  return (
    <div>
      <Header />
      <section className={style.head}>
        <img src={info.logo} alt="" />
        <h1>{info.title}</h1>
      </section>
      <section className={style.heroGal}>
        <figure>
          <img src={info.hero1} alt="" />
          <img src={info.hero2} alt="" />
        </figure>
        <figure>
          <img src={info.heroMain} alt="" />
        </figure>
        <figure>
          <img src={info.hero3} alt="" />
          <img src={info.hero4} alt="" />
        </figure>
      </section>
      <section className={style.detail}>
        <h3>About Us</h3>
        {info.about}
        <h3>What we do?</h3>
        {info.what}
      </section>
      <section className={style.detGal}>
        <img src={info.more1} alt="" />
        <img src={info.more2} alt="" />
        <img src={info.more3} alt="" />
        <img src={info.more4} alt="" />
      </section>
      <section className={style.statement}>
        <h3>Our mission, Vision and Culture</h3>
        {info.statement}
        <button onClick={() => navigate(`/contact-us`)}>
          Contact Us
        </button>
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
