import React from "react";
import style from "./../styles/trainings.module.css";
import Footer from "./Footer";
import Header from "./Header";
import group from "./../assets/group.png";
import hero1 from "./../assets/training1.png";
import hero2 from "./../assets/training2.png";
import arrdown from "./../assets/arrow-down.png";
import holder from './../assets/training-holder.png';
import exp from "./../assets/export.png";
import { useNavigate } from "react-router-dom";

export default function Trainings() {
  const navigate = useNavigate();
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
      <section>
        <h3>Training Categories</h3>
        <div>
          <button>Category 1</button>
          <button>Category 2</button>
          <button>Category 3</button>
          <button>Category 4</button>
        </div>
        <section>
          <nav>
            <img src={holder} alt="" />
            <h4>Jefferson Life Training</h4>
            <p>
              To be the industry-leading hospitality company , It takes an
              innovative group of passionate experts.
            </p>
            <button onClick={() => navigate(`/deals/deal-title`)}>
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
            <button onClick={() => navigate(`/deals/deal-title`)}>
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
            <button onClick={() => navigate(`/deals/deal-title`)}>
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
            <button onClick={() => navigate(`/deals/deal-title`)}>
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
            <button onClick={() => navigate(`/deals/deal-title`)}>
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
            <button onClick={() => navigate(`/deals/deal-title`)}>
              Register here <img src={exp} alt="" />{" "}
            </button>
          </nav>
        </section>
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
    </div>
  );
}
