import React, {useState} from 'react'
import style from "./../../styles/pages/csr.module.css";
import Header from '../subComponents/Header';
import Footer from '../subComponents/Footer';
import hero from "./../../assets/community-hero.png";
import holder from "./../../assets/community-holder.png";
import arrleft from "./../../assets/arrow-left.png";
import arrright from "./../../assets/arrow-right.png";

export default function Csr() {
  const [current, setCurrent] = useState(false);
  const [trans, setTrans] = useState(0);
  function handleNext() {
    if (trans === 0) {
      setTrans(-100);
      setCurrent(true);
    }
    if (trans === -100) {
      return;
    }
  }
  function handleBack() {
    if (trans === 0) {
      return;
    }
    if (trans === -100) {
      setTrans(0);
      setCurrent(false);
    }
  }
  let transform_style = {
    transform: "translateX(" + trans + "% )",
  };
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <div>
          <h3>CSR/Community</h3>
          <h2>
            Our impact driven Social <br /> initiatives
          </h2>
          <p>
            To be the industry-leading hospitality company , It takes an
            innovative group of passionate experts. Get to know the people
            leading the way at Jefferson Hospitality.
          </p>
        </div>
        <figure>
          <img src={hero} alt="" className={style.big} />
        </figure>
      </section>
      <main className={style.main}>
        <section>
          <div className={style.detail}>
            <h3>Sport Sponsorship</h3>
            <p>
              To be the industry-leading hospitality company , It takes an
              innovative group of passionate experts. Get to know the people
              leading the way at Jefferson Hospitality.
            </p>
            <b>
              Our goal at Jefferson is to create a culture where people are
              passionate about sport{" "}
            </b>
          </div>
          <div className={style.gallery}>
            <div>
              <figure style={transform_style}>
                <img src={holder} alt="" />
              </figure>
              <figure style={transform_style}>
                <img src={holder} alt="" />
              </figure>
            </div>
            <nav>
              <button
                onClick={handleBack}
                className={current ? "" : style.true}
              >
                <img src={arrleft} alt="" />
              </button>
              <button
                onClick={handleNext}
                className={current ? style.true : ""}
              >
                {" "}
                <img src={arrright} alt="" />
              </button>
            </nav>
            <p>
              To be the industry-leading hospitality company , It takes an
              innovative group of passionate experts. Get to know the people
              leading the way at Jefferson Hospitality. To be the
              industry-leading hospitality company , It takes an innovative
              group of passionate experts. Get to know the people leading the
              way at Jefferson Hospitality.
            </p>
          </div>
        </section>
        <section>
          <div className={style.detail}>
            <h3>Charity Adoption</h3>
            <p>
              To be the industry-leading hospitality company , It takes an
              innovative group of passionate experts. Get to know the people
              leading the way at Jefferson Hospitality.
            </p>
            <b>
              Our goal at Jefferson is to create a culture where people are
              passionate about sport{" "}
            </b>
          </div>
          <div className={style.gallery}>
            <div>
              <figure style={transform_style}>
                <img src={holder} alt="" />
              </figure>
              <figure style={transform_style}>
                <img src={holder} alt="" />
              </figure>
            </div>
            <nav>
              <button
                onClick={handleBack}
                className={current ? "" : style.true}
              >
                <img src={arrleft} alt="" />
              </button>
              <button
                onClick={handleNext}
                className={current ? style.true : ""}
              >
                {" "}
                <img src={arrright} alt="" />
              </button>
            </nav>
            <p>
              To be the industry-leading hospitality company , It takes an
              innovative group of passionate experts. Get to know the people
              leading the way at Jefferson Hospitality. To be the
              industry-leading hospitality company , It takes an innovative
              group of passionate experts. Get to know the people leading the
              way at Jefferson Hospitality.
            </p>
          </div>
        </section>
        <section>
          <div className={style.detail}>
            <h3>Made in Africa (MIA)</h3>
            <p>
              To be the industry-leading hospitality company , It takes an
              innovative group of passionate experts. Get to know the people
              leading the way at Jefferson Hospitality.
            </p>
            <b>
              Our goal at Jefferson is to create a culture where people are
              passionate about sport{" "}
            </b>
          </div>
          <div className={style.gallery}>
            <div>
              <figure style={transform_style}>
                <img src={holder} alt="" />
              </figure>
              <figure style={transform_style}>
                <img src={holder} alt="" />
              </figure>
            </div>
            <nav>
              <button
                onClick={handleBack}
                className={current ? "" : style.true}
              >
                <img src={arrleft} alt="" />
              </button>
              <button
                onClick={handleNext}
                className={current ? style.true : ""}
              >
                {" "}
                <img src={arrright} alt="" />
              </button>
            </nav>
            <p>
              To be the industry-leading hospitality company , It takes an
              innovative group of passionate experts. Get to know the people
              leading the way at Jefferson Hospitality. To be the
              industry-leading hospitality company , It takes an innovative
              group of passionate experts. Get to know the people leading the
              way at Jefferson Hospitality.
            </p>
          </div>
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
