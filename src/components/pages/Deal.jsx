import React, {useState, useEffect} from 'react'
import style from "./../../styles/pages/deal.module.css";
import Footer from './../subComponents/Footer'
import Header from './../subComponents/Header'
import holder from "./../../assets/deals-holder.png";
import { useNavigate, useParams } from "react-router-dom";
import exp from "./../../assets/export.png";
import hero from "./../../assets/deal-holder.png";
import { DealDetails } from './../subComponents/DealDetails';
export default function Deal() {
  const navigate = useNavigate();
  const params = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    DealDetails.forEach((detail) => {
      if (detail.title === params.id) {
        setInfo(detail);
      }
    });
  }, [params.id]);
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <figure>
          <img src={hero} alt="" />
        </figure>
        <div>
          <h3>{info.title}</h3>
          {info.about}
          <h2>{info.price}</h2>
          <button onClick={() => navigate(`/`)}>
            Get Deal <img src={exp} alt="" />{" "}
          </button>
        </div>
      </section>
      <section className={style.head}>
        <h4>Similar Deals</h4>
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
