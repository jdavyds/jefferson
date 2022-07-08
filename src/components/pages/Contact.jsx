import React from 'react'
import style from "./../../styles/pages/contact.module.css";
import Footer from './../subComponents/Footer'
import Header from './../subComponents/Header'
import contact from './../../assets/contactus.png'
import call from './../../assets/call.png'
import map from './../../assets/map.png'
import sms from './../../assets/sms.png'
export default function Contact() {
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h2>Contact Us</h2>
        <h3>Any questions or remarks? Just send us a message</h3>
      </section>
      <section className={style.contact}>
        <figure>
          <img src={contact} alt="" />
        </figure>
        <form>
          <label>
            <span>
              Name <small>*</small>
            </span>
            <input type="text" placeholder="Enter first and last name" />
          </label>
          <label>
            <span>
              Email Address <small>*</small>
            </span>
            <input type="email" placeholder="Enter email address" />
          </label>
          <label>
            <span>
              Phone Number <small>*</small>
            </span>
            <input type="tel" placeholder="Enter Phone Number" />
          </label>
          <label>
            <span>
              How can we help? <small>*</small>
            </span>
            <textarea placeholder="Tell us how we can help...."></textarea>
          </label>
          <button>Send Message</button>
        </form>
      </section>
      <section className={style.details}>
        <nav>
          <img src={call} alt="" />
          <p>07033857285</p>
        </nav>
        <nav>
          <img src={map} alt="" />
          <p>
            Jefferson Hospitality Inc <br /> ARTISAN PLACE <br /> Suite 4, Plot
            284, Cadastral Zone B06 <br /> Mabushi District, Abuja <br />{" "}
            Nigeria
          </p>
        </nav>
        <nav>
          <img src={sms} alt="" />
          <p>
            info@jeffersonhospitality.co.uk <br />{" "}
            info.ng@jeffersonhospitality.co.uk
          </p>
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
