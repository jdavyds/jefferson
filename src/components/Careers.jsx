import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import style from './../styles/careers.module.css'
import icon1 from './../assets/location.svg'
import icon2 from './../assets/clock.svg'
import icon3 from './../assets/arrow-right.svg'
export default function Careers() {
    const navigate = useNavigate()
    const openings = [
        {
            category: 'Technology',
            title: 'Senior Software Engineer',
            location: 'San Francisco, CA',
            type: 'Full Time',
        },
        {
            category: 'Technology',
            title: 'Junior Software Engineer',
            location: 'San Jose, CA',
            type: 'Full Time',
        },
        {
            category: 'Design',
            title: 'Senior Designer',
            location: 'Brooklyn, NY',
            type: 'Part Time',
        },
        {
            category: 'Design',
            title: 'Junior Designer',
            location: 'New York, NY',
            type: 'Part Time',
        }
    ]
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Our careers Page</h3>
        <h1>
          Join Our Team and Come <br /> Work with Us
        </h1>
        <p>
          Planning its future by expanding its scope into modern <br />{" "}
          commercial and residential development with a{" "}
        </p>
      </section>
      <section className={style.pos}>
        <h3>OPEN POSITIONS</h3>
        {openings.map((opening) => {
            return (
                <nav>
                    <div>
                        <span>{opening.category}</span>
                        <b>{opening.title}</b>
                        <small>
                        <img src={icon1} alt="" />
                        {opening.location}
                        <img src={icon2} alt="" />
                        {opening.type}
                        </small>
                    </div>
                    <button
                    onClick={() => navigate(`/careers/${opening.title}`)}
                    >
                        View Job <img src={icon3} alt="" /></button>
                </nav>
            )
        })
        }
      </section>
      <section className={style.subscribe}>
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <label>
          <input type="email" placeholder="Enter your Email Address" />
          <button>Subscribe</button>
        </label>
      </section>
      <Footer />
      <Outlet />
    </div>
  );
}
