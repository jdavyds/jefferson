import React, {useEffect, useState} from 'react'
import style from './../styles/home.module.css'
import Header from './Header'
import Footer from './Footer'
import hero from './../assets/homebg.png'
import vid from './../assets/Group 2.png'
import partner1 from './../assets/download 2.png'
import partner2 from './../assets/images (35) 1.png'
import partner3 from './../assets/images (36).png'
import partner4 from './../assets/images (8) (1).png'
import partner5 from './../assets/images (9).png'
import abt from './../assets/know.png'
import exp from './../assets/export.png'
import icon1 from './../assets/icon1.png'
import icon2 from './../assets/icon2.png'
import icon3 from './../assets/icon3.png'
import icon4 from "./../assets/icon4.png";
import icon5 from "./../assets/icon5.png";
import icon6 from "./../assets/icon6.png";
import icon7 from "./../assets/icon7.png";
import icon8 from "./../assets/icon8.png";
import success1 from './../assets/success1.png'
import success2 from "./../assets/success2.png";
import success3 from "./../assets/success3.png";
import success4 from "./../assets/images (8) (1).png";
import arrow from './../assets/Vector.png'
import invert from './../assets/invert.png'
import stars from './../assets/stars.png'
import project1 from './../assets/gallery1.png'
import project2 from "./../assets/gallery2.png";
import project3 from "./../assets/gallery3.png";
import project4 from "./../assets/gallery4.png";
import feedback from './../assets/feedback1.png'
import ph1 from './../assets/ph1.jpg'
import ph2 from "./../assets/ph2.jpg";
import ph3 from './../assets/ph3.jpg'
import ph4 from "./../assets/ph4.jpg";
import ph5 from "./../assets/ph5.jpg";
import ph6 from "./../assets/ph6.jpg";
import ph7 from "./../assets/ph7.jpg";
import ph8 from "./../assets/ph8.jpg";
import j1 from "./../assets/dezeen-magazine-logo-vector.png";
import j2 from "./../assets/space-logo.png";
import j3 from "./../assets/Heineken-Logo.png";
import j4 from "./../assets/lifestyle.png";
import j5 from "./../assets/ukh.png";
import j6 from "./../assets/hen.png";
import j7 from "./../assets/redson logo (1).png";
import j8 from "./../assets/LOGO 1.png";
import j9 from "./../assets/eagleplaza.png";
import j10 from "./../assets/rebear.png"
import j11 from "./../assets/jp 1.png";
import j12 from "./../assets/images (7).png";
import { Link } from "react-router-dom";

export default function Home() {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);


  function handleOne() {
      setOne(true);
      setTwo(false);
      setThree(false);
      setFour(false);
  }
  function handleTwo() {
      setTwo(true);
      setOne(false);
      setThree(false);
      setFour(false);
  }
  function handleThree() {
      setThree(true);
      setOne(false);
      setTwo(false);
      setFour(false);
  }
  function handleFour() {
      setFour(true);
      setOne(false);
      setTwo(false);
      setThree(false);
  }
   const [count, setCount] = useState(1);

   useEffect(() => {
    //  if(window.innerWidth > 768) {
    //    setInterval(() => {
    //      if (count === 1) {
    //        handleTwo();
    //        setTimeout(() => {
    //          setCount(2);
    //        }, 7000);
    //      } 
    //      if (count === 2) {
    //        handleThree();
    //        setTimeout(() => {
    //          setCount(3);
    //        }, 7000);            
    //      }
    //      if (count === 3) {
    //        handleFour();
    //        setTimeout(() => {
    //          setCount(4);
    //        }, 7000);
    //      }
    //      if (count === 4) {
    //        handleOne();
    //        setTimeout(() => {
    //          setCount(1);
    //        }, 2000);
    //      }
    //    }, 9000);
    //  }
     if(window.innerWidth > 768) {
       setTimeout(() => {
         if(count === 1) {
           handleTwo();
           setCount(2);
         }
         if(count === 2) {
            handleThree();
            setCount(3);
         }
          if(count === 3) {
            handleFour();
            setCount(4);
          }
          if(count === 4) {
            handleOne();
            setCount(1);
          }
       }, 9000);
     }
   }, [count]);
  return (
    <main>
      <Header />
      <section className={style.hero}>
        <div className={style.hero_left}>
          <img src={hero} alt="" className={style.big} />
        </div>
        <div className={style.hero_right}>
          <h2>
            We Upscale <b>Hospitality</b> <br /> Services
          </h2>
          <p>
            Dominate the Hospitality Industry with us. Build your hospitality
            business with us and truly live the dream of excellence and class
            you want to be famous for.
          </p>
          <p>Over 100+ businesses have confidence in our expertise.</p>
          <nav>
            <button className={style.hero_btn}>Request Consultation</button>
            <button className={style.hero_vid}>
              <img src={vid} alt="" /> Watch Video
            </button>
          </nav>
        </div>
      </section>
      <section className={style.partners}>
        <small>Over 100+ businesses growing with Jefferson Hospitality</small>
        <figure>
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner5} alt="" />
          <img src={partner4} alt="" />
          <img src={partner3} alt="" />
        </figure>
      </section>
      <section className={style.about}>
        <h2>GET TO KNOW WHAT WE DO</h2>
        <div className={style.abt}>
          <div className={style.abt_img}>
            <img src={abt} alt="" />
          </div>
          <div className={style.abt_info}>
            <p>
              Every business entering or growing in the hospitality industry
              desperately needs one thing: Thorough guidance from businesses who
              have already walked that path.
            </p>
            <p>
              At Jefferson Hospitality, we have created a clear path to success
              through time-tested strategies and progressive innovations. We are
              an innovative hospitality investment, management and development
              company with a focus on mid to upscale hotels, restaurants,
              nightlife venues, and resorts. We have also designed an immersive
              user experience that will ensure that you are professionally able
              to endear your customers to your brand. We hold a strong belief
              that business and pleasure can be found in one place-and that is
              your establishment.
            </p>
            <Link to="/">
              Learn More <img src={exp} alt="" />{" "}
            </Link>
            <nav>
              <span>
                <b>10+</b> <br /> Years of Experience
              </span>
              <span>
                <b>100+</b> <br /> Happy Customers
              </span>
            </nav>
          </div>
        </div>
      </section>
      <section className={style.expertise}>
        <h2>FIELDS OF EXPERTISE THAT OUR GREAT TEAM EXCELS IN</h2>
        <div>
          <nav>
            <figure style={{ background: "#DDFBF8" }}>
              <img src={icon1} alt="" />
            </figure>
            <h4>CONCEPT AND BRAND DEVELOPMENT</h4>
            <p>
              Your concept can be transformed into a vibrant brand personality.
              So we use your uniqueness to design a sustainable brand
              personality and concept that will attract your customers to you
              right from your start.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#EFD9F8" }}>
              <img src={icon2} alt="" />
            </figure>
            <h4>OPERATION STATEMENT DOCUMENTATION</h4>
            <p>
              We help you track your financial statements with accurate and real
              time information to show your performance and financial position
              at each stage of your company’s growth.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#FFEDE6" }}>
              <img src={icon3} alt="" />
            </figure>
            <h4>PROJECT MANAGEMENT</h4>
            <p>
              We help your business identify and manage risks, manage resources
              for your project successfully through smart budgeting and clear
              communications of goals and deliverables across the involved teams
              and stakeholders.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#f8a9114d" }}>
              <img src={icon4} alt="" />
            </figure>
            <h4>OPERATING SYSTEMS</h4>
            <p>
              Your company’s tools, processes and model of operation is
              carefully curated and incorporated into all levels of operation so
              you can have uniform satisfaction across all franchises and
              locations.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#FFE1E9" }}>
              <img src={icon5} alt="" />
            </figure>
            <h4>FRANCHISING</h4>
            <p>
              Want to expand into franchises? Ask us! Our vast resources allow
              you to properly plan and scale from one single location to
              several. We source suitable franchises and potential franchisees
              and negotiate on your behalf to ensure you successfully expand.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#DBEDFF" }}>
              <img src={icon6} alt="" />
            </figure>
            <h4>KITCHEN PLANNING AND OPERATIONAL DESIGN REVIEW</h4>
            <p>
              Based on your concepts, we work with equipment suppliers and/or
              kitchen specialists to ensure efficient back and front space
              planning, making sure that your equipment meets your exact
              specifications.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#DBF9ED" }}>
              <img src={icon7} alt="" />
            </figure>
            <h4>MARKET RESEARCH</h4>
            <p>
              Rare marketing insights are at our fingertips and we spare no
              expense to ensure you also operate with such in-depth knowledge as
              well. We reveal critical marketing information that will save you
              from costly mistakes as well as help you develop your project
              according to existing or future demand.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#FFFAD9" }}>
              <img src={icon8} alt="" />
            </figure>
            <h4>MANAGEMENT RECRUITMENT AND TRAINING</h4>
            <p>
              Being in the service industry has helped us source for, recruit,
              train and deploy suitable management staff that understand the
              delicate nature of optimum service in the hospitality business.
              Exceptional service will be the least of your worries with our
              armada of rigorously trained staff. From chefs, to hotels and
              restaurant managers, waiters, waitresses, cleaning experts-we
              handle their recruitment and training so you can be sure that you
              have the best employees for the job.
            </p>
          </nav>
        </div>
        <button>
          See more services <img src={exp} alt="" />{" "}
        </button>
      </section>
      <section className={style.success}>
        <h2>OUR SUCCESS STORIES</h2>
        <div>
          <div className={style.projects}>
            <nav onClick={handleOne} className={one ? style.pactive : ""}>
              <img src={success1} alt="" />
              <span>
                <b>Temple Grill</b>
                <img src={stars} alt="" />
              </span>
              <img src={one ? invert : arrow} alt="" />
            </nav>
            <p className={one ? style.show : ""}>
              Temple Grill is a progressive and innovative hospitality
              investment, management and development company
            </p>
            <figure className={one ? style.resShow : style.resHide}>
              <img src={project1} alt="" />
              <img src={project2} alt="" />
              <img src={project3} alt="" />
              <img src={project4} alt="" />
            </figure>
            <nav onClick={handleTwo} className={two ? style.pactive : ""}>
              <img src={success2} alt="" />
              <span>
                <b>SOHO bar and Resturant</b>
                <img src={stars} alt="" />
              </span>
              <img src={two ? invert : arrow} alt="" />
            </nav>
            <p className={two ? style.show : ""}>
              Soho is a progressive and innovative hospitality investment,
              management and development company
            </p>
            <figure className={two ? style.resShow : style.resHide}>
              <img src={project2} alt="" />
              <img src={project3} alt="" />
              <img src={project4} alt="" />
              <img src={project1} alt="" />
            </figure>
            <nav onClick={handleThree} className={three ? style.pactive : ""}>
              <img src={success3} alt="" />
              <span>
                <b>Redson Bet</b>
                <img src={stars} alt="" />
              </span>
              <img src={three ? invert : arrow} alt="" />
            </nav>
            <p className={three ? style.show : ""}>
              Redson is a progressive and innovative hospitality investment,
              management and development company
            </p>
            <figure className={three ? style.resShow : style.resHide}>
              <img src={project3} alt="" />
              <img src={project4} alt="" />
              <img src={project1} alt="" />
              <img src={project2} alt="" />
            </figure>
            <nav onClick={handleFour} className={four ? style.pactive : ""}>
              <img src={success4} alt="" />
              <span>
                <b>Cloudvista Restaurant</b>
                <img src={stars} alt="" />
              </span>
              <img src={four ? invert : arrow} alt="" />
            </nav>
            <p className={four ? style.show : ""}>
              Cloudvista Restaurant is a progressive and innovative hospitality
              investment, management and development company
            </p>
            <figure className={four ? style.resShow : style.resHide}>
              <img src={project4} alt="" />
              <img src={project3} alt="" />
              <img src={project2} alt="" />
              <img src={project1} alt="" />
            </figure>
            <button>
              See more projects <img src={exp} alt="" />
            </button>
          </div>
          <figure className={one ? style.projMain : style.projHide}>
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project3} alt="" />
            <img src={project4} alt="" />
          </figure>
          <figure className={two ? style.projMain : style.projHide}>
            <img src={ph1} alt="" />
            <img src={ph2} alt="" />
            <img src={ph3} alt="" />
            <img src={ph4} alt="" />
          </figure>
          <figure className={three ? style.projMain : style.projHide}>
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project3} alt="" />
            <img src={project4} alt="" />
          </figure>
          <figure className={four ? style.projMain : style.projHide}>
            <img src={ph5} alt="" />
            <img src={ph6} alt="" />
            <img src={ph7} alt="" />
            <img src={ph8} alt="" />
          </figure>
        </div>
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
              I find Jefferson Hospitality to be a patient, and meticulous
              support for me when I started up. For two years now, they have
              continued to be my first port of call for resources, advice and
              strategy with anything that comes up.
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
              We have utilized Jefferson’s resources on market research much
              more than we bargained for. They care so much for our restaurant
              Franchise that as many times as we needed design, print and other
              luxury items, we did not have to bother about where to source for
              them.
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
              Jefferson Hospitality is truly a community of professionals within
              the hospitality industry. Anyone we have successfully partnered
              with has that touch of Jefferson excellence that makes them true
              professionals in their niches. Collaboration is every bit as
              stress-free as they make it look.
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
              The building of our establishment would have gone sideways if we
              did not have Jefferson’s Hospitality’s dexterity to keep a tight
              rein on goals and deliverables.We were able to finish everything
              before the actual launch-which was a huge success.
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
              They welcome Greenhorns to the industry! I knew nothing about the
              business of opening a massage parlor, nor did I know what type of
              brand I was building. They transformed the vague idea I put out-
              fleshing it into a full-fledged brand that still makes my
              customers want to know more about us due to the sheer strength of
              it.
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
              We had a hard time hiring support staff for our already existing
              staff. Jefferson Hospitality made sure we had capable staff who
              were indoctrinated into our company’s culture.
            </p>
          </nav>
        </div>
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
          <img src={j3} alt="" />
          <img src={j4} alt="" />
          <img src={j5} alt="" />
          <img src={j6} alt="" />
          <img src={j7} alt="" />
          <img src={j8} alt="" />
          <img src={j9} alt="" />
          <img src={j10} alt="" />
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
    </main>
  );
}


