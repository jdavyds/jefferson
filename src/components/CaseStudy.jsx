import React from "react";
import style from "./../styles/casestudy.module.css";
import Footer from "./Footer";
import Header from "./Header";
import redsonbet from "./../assets/redson.png";
import connecthub from "./../assets/connect.png";
import soho from "./../assets/soho.png";
import temple from "./../assets/temple.png";
import cv from "./../assets/cv.png";
import holder from "./../assets/study.png";
import holder1 from "./../assets/case-holder.png";

export default function CaseStudy() {
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
        <figure>
          <img src={holder} alt="" />
        </figure>
      </main>
      <section className={style.cases}>
        <h1>
          <b>An innovative,</b> energetic ,<br /> boutique hospitality <br />{" "}
          company.
        </h1>
        <div>
          <nav>
            <img src={holder1} alt="" />
            <h3>Temple Grill</h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>
          </nav>
          <nav>
            <img src={holder1} alt="" />
            <h3>Temple Grill</h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>
          </nav>
          <nav>
            <img src={holder1} alt="" />
            <h3>Temple Grill</h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>
          </nav>
          <nav>
            <img src={holder1} alt="" />
            <h3>Temple Grill</h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>
          </nav>
          <nav>
            <img src={holder1} alt="" />
            <h3>Temple Grill</h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>
          </nav>
          <nav>
            <img src={holder1} alt="" />
            <h3>Temple Grill</h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>
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
