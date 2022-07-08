import React from "react";
import style from "./../../styles/pages/media.module.css";
import Footer from "./../subComponents/Footer";
import Header from "./../subComponents/Header";
import holder1 from "./../../assets/blog-holder1.png";
import holder2 from "./../../assets/blog-holder2.png";
import holder3 from "./../../assets/blog-holder3.png";
import exp from "./../../assets/export-yellow.png";
import down from './../../assets/up-black.png'
import { useNavigate } from "react-router-dom";

export default function Media() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <section className={style.head}>
        <h2>Media/Press</h2>
        <nav>
          <button className={style.active}>All</button>
          <button>Featured</button>
          <button>Popular</button>
          <button>Hospitality</button>
          <button>Next Category</button>
        </nav>
      </section>
      <h3 className={style.h3}>Most Recent</h3>
      <section className={style.main}>
        <div>
          <figure>
            <img src={holder1} alt="" />
          </figure>
          <small>July 1 2022</small>
          <h3>
            Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum dolor
            sit ament
          </h3>
          <p>Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......</p>
          <button onClick={() => navigate(`/insight-blog/blog-post`)}>
            Read more <img src={exp} alt="" />{" "}
          </button>
        </div>
        <aside>
          <nav>
            <figure>
              <img src={holder2} alt="" />
            </figure>
            <div>
              <h3>
                Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
                dolor sit ament
              </h3>
              <p>
                Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
              </p>

              <button onClick={() => navigate(`/insight-blog/blog-post`)}>
                Read more <img src={exp} alt="" />{" "}
              </button>
            </div>
          </nav>
          <nav>
            <figure>
              <img src={holder2} alt="" />
            </figure>
            <div>
              <h3>
                Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
                dolor sit ament
              </h3>
              <p>
                Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
              </p>

              <button onClick={() => navigate(`/insight-blog/blog-post`)}>
                Read more <img src={exp} alt="" />{" "}
              </button>
            </div>
          </nav>
          <nav>
            <figure>
              <img src={holder2} alt="" />
            </figure>
            <div>
              <h3>
                Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
                dolor sit ament
              </h3>
              <p>
                Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
              </p>

              <button onClick={() => navigate(`/insight-blog/blog-post`)}>
                Read more <img src={exp} alt="" />{" "}
              </button>
            </div>
          </nav>
        </aside>
      </section>
      <section className={style.sub}>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
        <nav>
          <figure>
            <img src={holder3} alt="" />
          </figure>
          <div>
            <h3>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum
              dolor sit ament
            </h3>
            <p>
              Lorem Ipsum dolor sit ament, consectetur adpiscing elit.......
            </p>

            <button onClick={() => navigate(`/insight-blog/blog-post`)}>
              Read more <img src={exp} alt="" />{" "}
            </button>
          </div>
        </nav>
      </section>
      <button className={style.btn}>
        See More <img src={down} alt="" />
      </button>
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
