import React, { useEffect, useState } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import style from './../styles/career.module.css';
import icon1 from "./../assets/location.svg";
import icon2 from "./../assets/clock.svg";
import { useParams } from 'react-router-dom';
import Modal from './CareerModal';
export default function Career() {
    const [showModal, setShowModal] = useState(false);
    let params = useParams()
    const [info, setInfo] = useState({})
    useEffect(() => {
      const openings = [
        {
          category: "Technology",
          title: "Senior Software Engineer",
          location: "San Francisco, CA",
          type: "Full Time",
          abt: (
            <p>
              As a Sr. Product Designer, you’ll join a group of
              multi-disciplinary designers who care deeply about helping people
              learn from their data. Our process starts with defining a vision
              in collaboration with product and engineering. Then we research,
              refine and remove (less is more) until we've landed on something
              that truly helps our customers. This role will have a strategic
              focus; however, you'll get broad exposure to the product and pair
              with other team leads to design a cohesive experience.
            </p>
          ),
          responsibilities: (
            <div>
              <p>
                Optimizing the sharing experience for reports and dashboards.
                Rethinking how Mix panel customers collaborate with their team
                mates. Reorganizing the navigation to enable content and data
                management use cases. Responsibilities.
              </p>
              <p>
                Lead entire projects with minimal oversight while working in
                close collaboration with other designers, product managers, and
                engineers. Partner with product and design leadership to
                integrate your work into the overall vision of the product.
                Design user interfaces, user flows, and prototypes that bring
                clarity to complex problems. Participate in user research to
                better understand user needs. Mentor other designers and guide
                them on their work. Lead meetings and facilitate team activities
                (brainstorming, white boarding, etc.).
              </p>
              <p>
                We're Looking For Someone Who Has At least 4+ years designing
                digital products and systems in an individual contributor role.
                Strong background and focus in two product design disciplines
                (e.g., interaction design, visual design, prototyping).
                Experience designing business and/or developer-focused products.
                Ability to lead large projects and manage the design process for
                your work. Excellent communication and presentation skills.
                Bonus Points For
              </p>
            </div>
          ),
        },
        {
          category: "Technology",
          title: "Junior Software Engineer",
          location: "San Jose, CA",
          type: "Full Time",
          abt: (
            <p>
              As a Sr. Product Designer, you’ll join a group of
              multi-disciplinary designers who care deeply about helping people
              learn from their data. Our process starts with defining a vision
              in collaboration with product and engineering. Then we research,
              refine and remove (less is more) until we've landed on something
              that truly helps our customers. This role will have a strategic
              focus; however, you'll get broad exposure to the product and pair
              with other team leads to design a cohesive experience.
            </p>
          ),
          responsibilities: (
            <div>
              <p>
                Lead entire projects with minimal oversight while working in
                close collaboration with other designers, product managers, and
                engineers. Partner with product and design leadership to
                integrate your work into the overall vision of the product.
                Design user interfaces, user flows, and prototypes that bring
                clarity to complex problems. Participate in user research to
                better understand user needs. Mentor other designers and guide
                them on their work. Lead meetings and facilitate team activities
                (brainstorming, white boarding, etc.).
              </p>
              <p>
                Optimizing the sharing experience for reports and dashboards.
                Rethinking how Mix panel customers collaborate with their team
                mates. Reorganizing the navigation to enable content and data
                management use cases. Responsibilities.
              </p>
              <p>
                We're Looking For Someone Who Has At least 4+ years designing
                digital products and systems in an individual contributor role.
                Strong background and focus in two product design disciplines
                (e.g., interaction design, visual design, prototyping).
                Experience designing business and/or developer-focused products.
                Ability to lead large projects and manage the design process for
                your work. Excellent communication and presentation skills.
                Bonus Points For
              </p>
            </div>
          ),
        },
        {
          category: "Design",
          title: "Senior Designer",
          location: "Brooklyn, NY",
          type: "Part Time",
          abt: (
            <p>
              As a Sr. Product Designer, you’ll join a group of
              multi-disciplinary designers who care deeply about helping people
              learn from their data. Our process starts with defining a vision
              in collaboration with product and engineering. Then we research,
              refine and remove (less is more) until we've landed on something
              that truly helps our customers. This role will have a strategic
              focus; however, you'll get broad exposure to the product and pair
              with other team leads to design a cohesive experience.
            </p>
          ),
          responsibilities: (
            <div>
              <p>
                Lead entire projects with minimal oversight while working in
                close collaboration with other designers, product managers, and
                engineers. Partner with product and design leadership to
                integrate your work into the overall vision of the product.
                Design user interfaces, user flows, and prototypes that bring
                clarity to complex problems. Participate in user research to
                better understand user needs. Mentor other designers and guide
                them on their work. Lead meetings and facilitate team activities
                (brainstorming, white boarding, etc.).
              </p>
              <p>
                We're Looking For Someone Who Has At least 4+ years designing
                digital products and systems in an individual contributor role.
                Strong background and focus in two product design disciplines
                (e.g., interaction design, visual design, prototyping).
                Experience designing business and/or developer-focused products.
                Ability to lead large projects and manage the design process for
                your work. Excellent communication and presentation skills.
                Bonus Points For
              </p>
              <p>
                Optimizing the sharing experience for reports and dashboards.
                Rethinking how Mix panel customers collaborate with their team
                mates. Reorganizing the navigation to enable content and data
                management use cases. Responsibilities.
              </p>
            </div>
          ),
        },
        {
          category: "Design",
          title: "Junior Designer",
          location: "New York, NY",
          type: "Part Time",
          abt: (
            <p>
              As a Sr. Product Designer, you’ll join a group of
              multi-disciplinary designers who care deeply about helping people
              learn from their data. Our process starts with defining a vision
              in collaboration with product and engineering. Then we research,
              refine and remove (less is more) until we've landed on something
              that truly helps our customers. This role will have a strategic
              focus; however, you'll get broad exposure to the product and pair
              with other team leads to design a cohesive experience.
            </p>
          ),
          responsibilities: (
            <div>
              <p>
                Optimizing the sharing experience for reports and dashboards.
                Rethinking how Mix panel customers collaborate with their team
                mates. Reorganizing the navigation to enable content and data
                management use cases. Responsibilities.
              </p>
              <p>
                Lead entire projects with minimal oversight while working in
                close collaboration with other designers, product managers, and
                engineers. Partner with product and design leadership to
                integrate your work into the overall vision of the product.
                Design user interfaces, user flows, and prototypes that bring
                clarity to complex problems. Participate in user research to
                better understand user needs. Mentor other designers and guide
                them on their work. Lead meetings and facilitate team activities
                (brainstorming, white boarding, etc.).
              </p>
              <p>
                We're Looking For Someone Who Has At least 4+ years designing
                digital products and systems in an individual contributor role.
                Strong background and focus in two product design disciplines
                (e.g., interaction design, visual design, prototyping).
                Experience designing business and/or developer-focused products.
                Ability to lead large projects and manage the design process for
                your work. Excellent communication and presentation skills.
                Bonus Points For
              </p>
            </div>
          ),
        },
      ];
        openings.forEach((open) => {
            if (open.title === params.id) {
                setInfo(open)
            }
        })
    }, [params.id])


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
      <section className={style.role}>
        <div>
          <span>
            <h3>{info.title} </h3>
            <i>(View all Jobs)</i>
          </span>
          <small>
            <img src={icon1} alt="" />
            {info.location}
            <img src={icon2} alt="" />
            {info.type}
          </small>
        </div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Apply to this Job
        </button>
      </section>
      <section className={style.abt_role}>
        <h4>About this Role</h4>
        <p>{info.abt}</p>
        <h4>Projects You Could Work On</h4>
        {info.responsibilities}
      </section>
      <section className={style.apply}>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Apply to this Job
        </button>
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
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}
