import React, {useState, useEffect} from "react";
import style from "./../../styles/pages/training.module.css";
import Footer from "./../subComponents/Footer";
import Header from "./../subComponents/Header";
import clock from './../../assets/clock.svg'
import location from './../../assets/location.svg'
import share from './../../assets/share.png'
import { TrainingDetails } from "./../subComponents/TrainingDetails";
import { useNavigate, useParams } from "react-router-dom";
export default function Training() {
  let navigate = useNavigate();
  let params = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    TrainingDetails.forEach((detail) => {
      if (detail.title === params.id) {
        setInfo(detail);
        console.log(detail);
      }
    });
  }, [params.id]);
  return (
    <div>
      <Header />
      <main className={style.main}>
        <section className={style.hero}>
          <h3>Training Description</h3>
          <h2>{info.title}</h2>
          <small>
            <img src={clock} alt="" /> {info.date} <img src={location} alt="" />{" "}
            {info.location} <img src={share} alt="" /> Share this training
          </small>
          <h4>About Training</h4>
          {info.about}
        </section>
        <section className={style.form}>
          <h3>Register For Training</h3>
          <form>
            <input type="text" placeholder="First and last name" />
            <input type="text" placeholder="Address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email address" />
            <button onClick={() => navigate(`/`)}>Register</button>
          </form>
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
