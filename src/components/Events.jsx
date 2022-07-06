import React, {useState} from 'react'
import style from './../styles/events.module.css'
import Footer from './Footer'
import Header from './Header'
import holder from './../assets/event-holder.png'
import location from './../assets/location.svg'
import exp from "./../assets/export-yellow.png";
import EventsModal from './EventsModal'
export default function Events() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Our Brands Page</h3>
        <h1>JEFFERSON EVENTS</h1>
        <p>
          Connect with the Jefferson community to learn more about the
          hospitality industry
        </p>
      </section>
      <section className={style.gallery}>
        <img src={holder} alt="" />
        <img src={holder} alt="" />
        <img src={holder} alt="" />
      </section>
      <section className={style.main}>
        <div>
          <h3>Upcoming Events</h3>
          <span></span>
        </div>
        <section className={style.events}>
          <nav>
            <nav>
              <b>05</b>
              <span>June, 22</span>
            </nav>
            <strong>Hospitality Innovation Submit</strong>
            <small>
              <img src={location} alt="" /> Abuja, Nigeria
            </small>
            <p>
              Jefferson Hospitality takes its name from the word fashionable.
              Brushstrokes stylising this act is symbolically incorporated into
              our corporate logo and captures the fundamental essence of
              hospitality. the fundamental essence of hospitality.
            </p>
            <button
              onClick={() => {
                setShowModal(true);
              }}
            >
              Register here <img src={exp} alt="" />{" "}
            </button>
          </nav>
          <nav>
            <nav>
              <b>05</b>
              <span>June, 22</span>
            </nav>
            <strong>Hospitality Innovation Submit</strong>
            <small>
              <img src={location} alt="" /> Abuja, Nigeria
            </small>
            <p>
              Jefferson Hospitality takes its name from the word fashionable.
              Brushstrokes stylising this act is symbolically incorporated into
              our corporate logo and captures the fundamental essence of
              hospitality. the fundamental essence of hospitality.
            </p>
            <button
              onClick={() => {
                setShowModal(true);
              }}
            >
              Register here <img src={exp} alt="" />{" "}
            </button>
          </nav>
          <nav>
            <nav>
              <b>05</b>
              <span>June, 22</span>
            </nav>
            <strong>Hospitality Innovation Submit</strong>
            <small>
              <img src={location} alt="" /> Abuja, Nigeria
            </small>
            <p>
              Jefferson Hospitality takes its name from the word fashionable.
              Brushstrokes stylising this act is symbolically incorporated into
              our corporate logo and captures the fundamental essence of
              hospitality. the fundamental essence of hospitality.
            </p>
            <button
              onClick={() => {
                setShowModal(true);
              }}
            >
              Register here <img src={exp} alt="" />{" "}
            </button>
          </nav>
        </section>
      </section>
      <section className={style.subscribe}>
        <strong>STAY UPDATED</strong>
        <label>
          <input type="email" placeholder="Enter your Email Address" />
          <button>Subscribe</button>
        </label>
      </section>
      <Footer />
      {showModal && <EventsModal setShowModal={setShowModal} />}
    </div>
  );
}
