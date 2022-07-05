import React, { useState, useEffect} from 'react'
import style from './../styles/collection.module.css'
import Footer from './Footer';
import Header from './Header';
import arrleft from "./../assets/arrow-left.png";
import arrright from "./../assets/arrow-right.png";
import { CollectionDetail } from './CollectionDetail';
import { useNavigate, useParams } from "react-router-dom";
export default function Collection() {
    let navigate = useNavigate();
    let params = useParams();
    const [info, setInfo] = useState({});
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
    useEffect(() => {
      CollectionDetail.forEach((detail) => {
        if (detail.title === params.id) {
          setInfo(detail);
          console.log(detail);
        }
      });
    }, [params.id]);
  return (
    <div>
      <Header />
      <section className={style.intro}>
        <div>
          <img src={info.logo} alt="" />
          {info.title}
        </div>
        {info.about}
      </section>
      <section className={style.work}>
        <h3>See some of our Work</h3>
        <div>
          <figure style={transform_style}>
            <img src={info.img1} alt="" />
          </figure>
          <figure style={transform_style}>
            <img src={info.img2} alt="" />
          </figure>
        </div>
        <nav>
          <button onClick={handleBack} className={current ? "" : style.true}>
            <img src={arrleft} alt="" />
          </button>
          <button onClick={handleNext} className={current ? style.true : ""}>
            {" "}
            <img src={arrright} alt="" />
          </button>
        </nav>
      </section>
      <section className={style.contact}>
        <h3>Would you like to get in touch with us?</h3>
        <button onClick={() => navigate(`/contact-us`)}>Contact Us</button>
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
