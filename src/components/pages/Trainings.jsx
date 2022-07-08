import React, {useState} from "react";
import style from "./../../styles/pages/trainings.module.css";
import Footer from "./../subComponents/Footer";
import Header from "./../subComponents/Header";
import group from "./../../assets/group.png";
import hero1 from "./../../assets/training1.png";
import hero2 from "./../../assets/training2.png";
import arrdown from "./../../assets/arrow-down.png";
import holder from './../../assets/training-holder.png';
import exp from "./../../assets/export-yellow.png";
import { useNavigate } from "react-router-dom";

export default function Trainings() {
  const navigate = useNavigate();
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [trans, setTrans] = useState(0)
  function One() {
    setActive1(true)
    setActive2(false)
    setActive3(false);
    setActive4(false);
    setTrans(0)
  }
  function Two() {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setTrans(-100);
  }
  function Three() {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setTrans(-200);
  }
  function Four() {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setTrans(-300);
  }
  let transform_style = {
    transform: "translateX(" + trans + "% )",
  };
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <div>
          <h3>Our Trainings</h3>
          <h2>
            Jefferson Training <br /> Hub
          </h2>
          <p>
            Planning its future by expanding its scope into modern commercial
            and residential development with a
          </p>
          <nav>
            <button>
              See Trainings <img src={arrdown} alt="" />
            </button>
            <img src={group} alt="" />
            More than 100+ <br /> Trainings done
          </nav>
        </div>
        <figure>
          <div>
            <img src={hero1} alt="" className={style.big} />
          </div>
          <div>
            <img src={hero2} alt="" className={style.big} />
            <img src={hero2} alt="" className={style.big} />
          </div>
        </figure>
      </section>
      <section className={style.main}>
        <h3>Training Categories</h3>
        <div>
          <button className={active1 ? style.active : ""} onClick={One}>Category 1</button>
          <button className={active2 ? style.active : ""} onClick={Two}>Category 2</button>
          <button className={active3 ? style.active : ""} onClick={Three}>Category 3</button>
          <button className={active4 ? style.active : ""} onClick={Four}>Category 4</button>
        </div>
        <section>
          <div className={style.trainings} style={transform_style} >
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
          </div>
          <div className={style.trainings} style={transform_style} >
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
          </div>
          <div className={style.trainings} style={transform_style} >
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
          </div>
          <div className={style.trainings} style={transform_style} >
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
            <nav>
              <img src={holder} alt="" />
              <h4>Jefferson Life Training</h4>
              <p>
                To be the industry-leading hospitality company , It takes an
                innovative group of passionate experts.
              </p>
              <button
                onClick={() => navigate(`/trainings/Jefferson Life Training`)}
              >
                Register here <img src={exp} alt="" />{" "}
              </button>
            </nav>
          </div>
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
    </div>
  );
}
