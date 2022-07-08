import React from "react";
import style from "./../../styles/pages/blog.module.css";
import Footer from "./../subComponents/Footer";
import Header from "./../subComponents/Header";
import back from "./../../assets/back-black.png";
import holder from './../../assets/blog-holder.png'
export default function Blog() {
  return (
    <div>
      <Header />
      <nav className={style.back}>
        <img src={back} alt="" />
        Go back
      </nav>
      <figure className={style.hero}>
        <img src={holder} alt="" />
        <figcaption>July 1,2022</figcaption>
      </figure>
      <section className={style.details}>
        <h3>
          Lorem Ipsum dolor sit ament, consectetur adpiscing elit Ipsum dolor
          sit ament
        </h3>
        <p>
          As a Sr. Product Designer, you’ll join a group of multi-disciplinary
          designers who care deeply about helping people learn from their data.
          Our process starts with defining a vision in collaboration with
          product and engineering. Then we research, refine and remove (less is
          more) until we've landed on something that truly helps our customers.
          This role will have a strategic focus; however, you'll get broad
          exposure to the product and pair with other team leads to design a
          cohesive experience.
        </p>
        <p>
          Optimizing the sharing experience for reports and dashboards.
          Rethinking how Mixpanel customers collaborate with their team mates.
          Reorganizing the navigation to enable content and data management use
          cases.
        </p>
        <p>
          Lead entire projects with minimal oversight while working in close
          collaboration with other designers, product managers, and engineers.
          Partner with product and design leadership to integrate your work into
          the overall vision of the product.
        </p>
        <p>
          Design user interfaces, user flows, and prototypes that bring clarity
          to complex problems. Participate in user research to better understand
          user needs. Mentor other designers and guide them on their work. Lead
          meetings and facilitate team activities (brainstorming, white
          boarding, etc.) We're Looking For Someone Who Has At least 4+ years
          designing digital products and systems in an individual contributor
          role.
        </p>
        <p>
          Strong background and focus in two product design disciplines (e.g.,
          interaction design, visual design, prototyping). Experience designing
          business and/or developer-focused products. Ability to lead large
          projects and manage the design process for your work. Excellent
          communication and presentation skills.
        </p>
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
