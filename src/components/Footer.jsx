import React from 'react'
import style from './../styles/footer.module.css'
import logo from "./../assets/Jefferson  logo.png";
import seal from './../assets/seal.png'
import fb from './../assets/facebook.svg'
import twitter from './../assets/twitter.svg'
import ig from './../assets/instagram.svg'
import linkedin from './../assets/linkedin.svg'
import youtube from './../assets/twitter.svg'
import { Link, Outlet } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <main>
        <div className={style.footer_abt}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p>
            Our focus is on mid to upscale hotels, restaurants,nightlife venues,
            and resorts intelligently designed with user experience
          </p>
          <img src={seal} alt="" />
        </div>
        <div className={style.footer_nav}>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/">Culture</Link>
            <Link to="/">Brands</Link>
            <Link to="/">CRS/Community</Link>
            <Link to="/">Awards</Link>
            <Link to="/careers">Career</Link>
          </nav>
          <nav>
            <Link to="/">Services</Link>
            <Link to="/">Invest in Hospitality</Link>
            <Link to="/">Collections</Link>
            <Link to="/">Deals</Link>
            <Link to="/">Events</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Download Brochure</Link>
          </nav>
          <nav>
            <Link to="/">Jefferson Life</Link>
            <Link to="/">First Start</Link>
            <Link to="/">Partnership Life</Link>
            <Link to="/">Made In Africa (MIA)</Link>
            <Link to="/">Trainings</Link>
            <Link to="/">Webinar</Link>
            <Link to="/">Consultation</Link>
          </nav>
          <nav>
            <Link to="/">Case Study</Link>
            <Link to="/">Insight Blog</Link>
            <Link to="/">Media/Press</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Affiliate</Link>
            <Link to="/">Support</Link>
            <Link to="/">Contact</Link>
          </nav>
        </div>
        <div className={style.footer_contact}>
          <h3>Contact</h3>
          <p>
            Jefferson Hospitality Inc <br /> Dalton House, 60 Windsor Road{" "}
            <br /> London, Greater London <br /> SW19 2RR <br /> United Kingdom
          </p>
          <p>
            Jefferson Hospitality Inc <br /> ARTISAN PLACE <br /> Suite 4, Plot
            284, Cadastral Zone B06 <br /> Mabushi District, Abuja <br />{" "}
            Nigeria
          </p>
        </div>
      </main>
      <section>
        <nav>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Services</Link>
          <Link to="/">Accessibility</Link>
          <Link to="/">GDPR Agreement</Link>
          <Link to="/">NDPR Agreement</Link>
        </nav>
        <div>
          <span>© 2022 Jefferson Hospitality Inc. | All rights reserved.</span>
          <nav className={style.socials}>
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={ig} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </nav>
        </div>
      </section>
      <Outlet />
    </footer>
  );
}
