import React, {useState} from 'react'
import style from "./../../styles/pages/brochure.module.css";
import Footer from './../subComponents/Footer'
import Header from './../subComponents/Header'
import holder from "./../../assets/brochure-holder.png";
import exp from "./../../assets/download.svg";
import group from "./../../assets/group.png";
import BrochureModal from './../subComponents/BrochureModal';
export default function Brochure() {
    const [showModal, setShowModal] = useState(false);
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [trans, setTrans] = useState(0);
    function One() {
      setActive1(true);
      setActive2(false);
      setActive3(false);
      setTrans(0);
    }
    function Two() {
      setActive1(false);
      setActive2(true);
      setActive3(false);
      setTrans(-100);
    }
    function Three() {
      setActive1(false);
      setActive2(false);
      setActive3(true);
      setTrans(-200);
    }
    let transform_style = {
      transform: "translateX(" + trans + "% )",
    };
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Brochure Page</h3>
        <h1>
          Download our corporate brochures, <br /> data sheet and case study{" "}
          <br /> brochures
        </h1>
      </section>
      <section className={style.main}>
        <div>
          <button className={active1 ? style.active : ""} onClick={One}>
            Data Sheet brochures
          </button>
          <button className={active2 ? style.active : ""} onClick={Two}>
            Case study brochures
          </button>
          <button className={active3 ? style.active : ""} onClick={Three}>
            Hotel brochures
          </button>
        </div>
        <section>
          <div className={style.brochure} style={transform_style}>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
          </div>
          <div className={style.brochure} style={transform_style}>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
          </div>
          <div className={style.brochure} style={transform_style}>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
            <div>
              <nav>
                <img src={holder} alt="" />
                <h4>Data Sheet Title</h4>
                <button
              onClick={() => {
                setShowModal(true);
              }}
              >
                  Download <img src={exp} alt="" />{" "}
                </button>
              </nav>
              <span>
                <img src={group} alt="" />
                25 Downloads
              </span>
            </div>
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
      {showModal && <BrochureModal setShowModal={setShowModal} />}
    </div>
  );
}
