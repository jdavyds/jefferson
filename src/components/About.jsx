 import React from 'react'
import Footer from './Footer'
import Header from './Header'
import stars from "./../assets/stars.png";
import feedback from "./../assets/feedback1.png";
import vid from "./../assets/Group 2.png";
import icon6 from "./../assets/icon6.png";
import icon7 from "./../assets/icon7.png";
import icon8 from "./../assets/icon8.png";
import vision from './../assets/visionbg.png'
import identity from "./../assets/identitybg.png";
import culture from "./../assets/culturebg.png";
import style from './../styles/about.module.css'
export default function About() {
  return (
    <div className={style.abt_page}>
      <Header />
      <section className={style.hero}>
        <h4>About Jefferson Hospitality</h4>
        <h1>
          An innovative, energetic, <br /> boutique hospitality <br /> company.
        </h1>
        <div>
          <img src={vid} alt="" />
          <p>
            Learn how we can help grow your <br /> hospitality business{" "}
            <button>Watch Video</button>
          </p>
        </div>
      </section>
      <section className={style.vision}>
        <h3>Our Vision</h3>
        <h2>
          We will set benchmarks of innovation and execute our business
          strategies and operations, thereby being the preferred choice of our
          customers.
        </h2>
        <p>
          <b>Jefferson Hospitality</b> will be an industry-leading hospitality
          company recognized as best-in-class in each of its selected product
          and service categories in the investment, management and development
          in the region of operations.
        </p>
        <figure>
          <img src={vision} alt="" />
        </figure>
        <button>Contact our Team</button>
      </section>
      <section className={style.identity}>
        <h3>Our Brand Identity</h3>
        <h2>
          Our Brand Identity symbolizes our commitment to our mission, guided by
          our core values to achieve our shared vision.
        </h2>
        <p>
          <b>Jefferson Hospitality</b> takes its name from the word fashionable
          Brushstrokes stylizing this act is symbolically incorporated into our
          corporate logo and captures the fundamental essence of hospitality.
        </p>
        <figure>
          <img src={identity} alt="" />
        </figure>
        <button>Contact our Team</button>
      </section>
      <section className={style.culture}>
        <h3>Our Culture</h3>
        <h2>Growing from within. The place for doers and dreamers.</h2>
        <p>
          <b>At Jefferson Hospitality</b> we will leverage on beginning – as a
          small, nimble challenger company with a big, creative, global vision –
          to inform where we are going. We offer the perfect environment to
          inspire doers and dreamers because we understand that the growth of
          our company is driven by the growth of our individual team members.
        </p>
        <figure>
          <img src={culture} alt="" />
        </figure>
        <button>Contact our Team</button>
      </section>
      <section className={style.values}>
        <div>
          <h3>Our Values</h3>
          <h2>
            We recognize that flexibility and adaptability are key enablers for
            successful business performance
          </h2>
          <button>Contact our Team</button>
        </div>
        <div className={style.value}>
          <nav>
            <figure style={{ background: "#DBF9ED" }}>
              <img src={icon7} alt="" />
            </figure>
            <h4>AUTHENTICITY</h4>
            <p>
              By being open and respectful to all, we will consistently deliver
              excellence to our customers, partners and ourselves.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#FFFAD9" }}>
              <img src={icon8} alt="" />
            </figure>
            <h4>TRUST</h4>
            <p>
              We rely on our employees and partners to provide the support and
              guidance we need to achieve our goals and satisfy the needs of our
              guests, business partners and internal customers.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#DBEDFF" }}>
              <img src={icon6} alt="" />
            </figure>
            <h4>RESILIENCE</h4>
            <p>
              Our resilience and strength in keeping ourselves aligned with our
              long-term strategies will reap superior results.
            </p>
          </nav>
        </div>
        <button>Contact our Team</button>
      </section>
      <section className={style.feedbacks}>
        <h2>WHAT OUR CLIENTS HAS TO SAY</h2>
        <div className={style.feedback}>
          <nav>
            <div>
              <img src={feedback} alt="" />
              <span>
                <b>Sandy Oluwatobi</b>
                <small>CEO BBC HOTELS</small>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Based on your concepts, we will work with equipment suppliers
              and/or kitchen{" "}
            </p>
          </nav>
          <nav>
            <div>
              <img src={feedback} alt="" />
              <span>
                <b>Sandy Oluwatobi</b>
                <small>CEO BBC HOTELS</small>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Based on your concepts, we will work with equipment suppliers
              and/or kitchen{" "}
            </p>
          </nav>
          <nav>
            <div>
              <img src={feedback} alt="" />
              <span>
                <b>Sandy Oluwatobi</b>
                <small>CEO BBC HOTELS</small>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Based on your concepts, we will work with equipment suppliers
              and/or kitchen{" "}
            </p>
          </nav>
          <nav>
            <div>
              <img src={feedback} alt="" />
              <span>
                <b>Sandy Oluwatobi</b>
                <small>CEO BBC HOTELS</small>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Based on your concepts, we will work with equipment suppliers
              and/or kitchen{" "}
            </p>
          </nav>
          <nav>
            <div>
              <img src={feedback} alt="" />
              <span>
                <b>Sandy Oluwatobi</b>
                <small>CEO BBC HOTELS</small>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Based on your concepts, we will work with equipment suppliers
              and/or kitchen{" "}
            </p>
          </nav>
          <nav>
            <div>
              <img src={feedback} alt="" />
              <span>
                <b>Sandy Oluwatobi</b>
                <small>CEO BBC HOTELS</small>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Based on your concepts, we will work with equipment suppliers
              and/or kitchen{" "}
            </p>
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
