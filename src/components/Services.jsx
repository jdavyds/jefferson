import React from 'react'
import style from './../styles/services.module.css'
import Footer from './Footer';
import Header from './Header';
import hero from './../assets/servicesbg.png'
import j1 from "./../assets/dezeen-magazine-logo-vector.png";
import j2 from "./../assets/space-logo.png";
import heineken from "./../assets/Heineken-Logo.png";
import j4 from "./../assets/lifestyle.png";
import j5 from "./../assets/ukh.png";
import j6 from "./../assets/hen.png";
import j11 from "./../assets/jp 1.png";
import j12 from "./../assets/images (7).png";
import service1 from './../assets/service1.png'
import service2 from "./../assets/service2.png";
import service3 from "./../assets/service3.png";
import service4 from "./../assets/service4.png";
import service5 from "./../assets/service5.png";
import service6 from './../assets/service6.png'
import service7 from "./../assets/service7.png";
import service8 from "./../assets/service8.png";
import service9 from "./../assets/service9.png";
import service10 from "./../assets/service10.png";
import service11 from "./../assets/service11.png";
import service12 from "./../assets/service12.png";
import service13 from "./../assets/service13.png";
import service14 from "./../assets/service14.png";
import service15 from "./../assets/service15.png";
import exp from "./../assets/export.png";
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <div>
          <h3>Our Services</h3>
          <h2>
            Innovative Ideas, <br /> Flawlessly Executed
          </h2>
          <p>
            To be the industry-leading hospitality company , It takes an
            innovative group of passionate experts.
          </p>
          <nav>
            <button className={style.hero_btn}>Request Consultation</button>
          </nav>
        </div>
        <figure>
          <img src={hero} alt="" className={style.big} />
        </figure>
      </section>
      <section className={style.jpart}>
        <div>
          <span></span>
          <img src={j11} alt="" />
          <span></span>
        </div>
        <div>
          <img src={j1} alt="" />
          <img src={j12} alt="" />
          <img src={j2} alt="" />
          <img src={heineken} alt="" />
          <img src={j4} alt="" />
          <img src={j5} alt="" />
          <img src={j6} alt="" />
        </div>
      </section>
      <section className={style.services}>
        <nav>
          <img src={service1} alt="" />
          <strong>Hotel Consulting</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Hotel Consulting`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service2} alt="" />
          <strong>Project Development</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Project Development`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service3} alt="" />
          <strong>Revenue Management</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Revenue Management`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service4} alt="" />
          <strong>Investment and Acquisition</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button
            onClick={() => navigate(`/services/Investment and Acquisition`)}
          >
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service5} alt="" />
          <strong>Fund Raising</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Fund Raising`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service6} alt="" />
          <strong>Food and Beverage Innovation</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button
            onClick={() => navigate(`/services/Food and Beverage Innovation`)}
          >
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service7} alt="" />
          <strong>Contract Catering</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Contract Catering`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service8} alt="" />
          <strong>Set up and Growth</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Set up and Growth`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service9} alt="" />
          <strong>Asset Enhancement</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Asset Enhancement`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service10} alt="" />
          <strong>Franchising</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Franchising`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service11} alt="" />
          <strong>Procurement</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Procurement`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service12} alt="" />
          <strong>Partnership Brokerage</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Partnership Brokerage`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service13} alt="" />
          <strong>Hospitality PPP</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Hospitality PPP`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service14} alt="" />
          <strong>Training</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Training`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={service15} alt="" />
          <strong>Consultancy</strong>
          <p>
            Get to know the people leading the way at Jefferson Hospitality.
          </p>
          <button onClick={() => navigate(`/services/Consultancy`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
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
