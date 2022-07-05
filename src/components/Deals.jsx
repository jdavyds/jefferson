import React from "react";
import style from "./../styles/deals.module.css";
import Footer from "./Footer";
import Header from "./Header";
import redsonbet from "./../assets/redson.png";
import connecthub from "./../assets/connect.png";
import soho from "./../assets/soho.png";
import temple from "./../assets/temple.png";
import cv from "./../assets/cv.png";
import holder from './../assets/deals-holder.png'
import arrright from "./../assets/arrow-right.png";
import barr from './../assets/barRight.png'
import barl from './../assets/barLeft.png'
import exp from "./../assets/export.png";
import { useNavigate } from "react-router-dom";

export default function Deals() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Our Deals Page</h3>
        <h1>Jefferson Deals Page</h1>
        <p>
          Planning its future by expanding its scope into modern <br />{" "}
          commercial and residential development with a{" "}
        </p>
        <label>
          <input type="text" placeholder="Search for brands" />
          <button>Search</button>
        </label>
      </section>
      <section className={style.brands}>
        <small>Some of our brand network</small>
        <figure>
          <img src={temple} alt="" />
          <img src={redsonbet} alt="" />
          <img src={connecthub} alt="" />
          <img src={cv} alt="" />
          <img src={soho} alt="" />
        </figure>
      </section>
      <section className={style.sort}>
        <h4>Latest</h4> <h4>Popular</h4>
      </section>
      <section className={style.deals}>
        <nav>
          <img src={holder} alt="" />
          <strong>Deal Title</strong>
          <p>Deal description</p>
          <button onClick={() => navigate(`/deals/deal-title`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={holder} alt="" />
          <strong>Deal Title</strong>
          <p>Deal description</p>
          <button onClick={() => navigate(`/deals/deal-title`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={holder} alt="" />
          <strong>Deal Title</strong>
          <p>Deal description</p>
          <button onClick={() => navigate(`/deals/deal-title`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={holder} alt="" />
          <strong>Deal Title</strong>
          <p>Deal description</p>
          <button onClick={() => navigate(`/deals/deal-title`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={holder} alt="" />
          <strong>Deal Title</strong>
          <p>Deal description</p>
          <button onClick={() => navigate(`/deals/deal-title`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
        <nav>
          <img src={holder} alt="" />
          <strong>Deal Title</strong>
          <p>Deal description</p>
          <button onClick={() => navigate(`/deals/deal-title`)}>
            Learn more <img src={exp} alt="" />{" "}
          </button>
        </nav>
      </section>
      <section className={style.pager}>
        <button>
          Next Page <img src={arrright} alt="" />
        </button>
        <nav>
          page{" "}
          <button>
            <img src={barl} alt="" />
          </button>
          <button>1</button>
          <button>
            <img src={barr} alt="" />
          </button>{" "}
          of 30
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
