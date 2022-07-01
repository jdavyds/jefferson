import React, { useState } from "react";
import style from "./../styles/team.module.css";
import Footer from "./Footer";
import Header from "./Header";
import holder from "./../assets/holder.png";
import Modal from "./TeamModal";
import user from "./../assets/profile.png";
export default function Team() {
  const [showModal, setShowModal] = useState(false);
  const [member, setMember] = useState();
  const members = [
    {
      name: "Mr. Jeffrey Oduma",
      position: "Founder & CEO",
      image: user,
      info: (
        <div>
          <p>
            Founder and Principal of Jefferson Hospitality, Jeffrey Oduma is
            recognized as a visionary and forward-thinking leader among a new
            generation of hospitality entrepreneurs. Jeffrey's rapidly expanding
            portfolio of acclaimed destinations. Jeffrey’s is a management
            professional/entrepreneur with over 12years of extensive background
            in architecture, hospitality design, hospitality management, and
            investment.
          </p>
          <p>
            He believes the extents of creativity and passion are limitless, and
            which led him to found a number of fast-rising strong brands across
            the country (e.g Temple Grill, Cloud Vista, Mayfair Design etc)
            Jefferson Hospitality is now planning its future by expanding its
            scope into modern commercial and residential development with a
            vision to become the leading entrepreneur in the building and
            selling of rehabilitated and new luxury homes & short lets
            apartments.
          </p>
        </div>
      ),
    },
    {
      name: "Jane Doe",
      position: "CTO",
      info: (
        <div>
          <p>
            Founder and Principal of Jefferson Hospitality, Jeffrey Oduma is
            recognized as a visionary and forward-thinking leader among a new
            generation of hospitality entrepreneurs. Jeffrey's rapidly expanding
            portfolio of acclaimed destinations. Jeffrey’s is a management
            professional/entrepreneur with over 12years of extensive background
            in architecture, hospitality design, hospitality management, and
            investment.
          </p>
          <p>
            He believes the extents of creativity and passion are limitless, and
            which led him to found a number of fast-rising strong brands across
            the country (e.g Temple Grill, Cloud Vista, Mayfair Design etc)
            Jefferson Hospitality is now planning its future by expanding its
            scope into modern commercial and residential development with a
            vision to become the leading entrepreneur in the building and
            selling of rehabilitated and new luxury homes & short lets
            apartments.
          </p>
        </div>
      ),
      image: user,
    },
    {
      name: "James Doe",
      position: "CSO",
      info: (
        <div>
          <p>
            Founder and Principal of Jefferson Hospitality, Jeffrey Oduma is
            recognized as a visionary and forward-thinking leader among a new
            generation of hospitality entrepreneurs. Jeffrey's rapidly expanding
            portfolio of acclaimed destinations. Jeffrey’s is a management
            professional/entrepreneur with over 12years of extensive background
            in architecture, hospitality design, hospitality management, and
            investment.
          </p>
          <p>
            He believes the extents of creativity and passion are limitless, and
            which led him to found a number of fast-rising strong brands across
            the country (e.g Temple Grill, Cloud Vista, Mayfair Design etc)
            Jefferson Hospitality is now planning its future by expanding its
            scope into modern commercial and residential development with a
            vision to become the leading entrepreneur in the building and
            selling of rehabilitated and new luxury homes & short lets
            apartments.
          </p>
        </div>
      ),
      image: user,
    },
    {
      name: "Jane Doe",
      position: "CTO",
      info: (
        <div>
          <p>
            Founder and Principal of Jefferson Hospitality, Jeffrey Oduma is
            recognized as a visionary and forward-thinking leader among a new
            generation of hospitality entrepreneurs. Jeffrey's rapidly expanding
            portfolio of acclaimed destinations. Jeffrey’s is a management
            professional/entrepreneur with over 12years of extensive background
            in architecture, hospitality design, hospitality management, and
            investment.
          </p>
          <p>
            He believes the extents of creativity and passion are limitless, and
            which led him to found a number of fast-rising strong brands across
            the country (e.g Temple Grill, Cloud Vista, Mayfair Design etc)
            Jefferson Hospitality is now planning its future by expanding its
            scope into modern commercial and residential development with a
            vision to become the leading entrepreneur in the building and
            selling of rehabilitated and new luxury homes & short lets
            apartments.
          </p>
        </div>
      ),
      image: user,
    },
    {
      name: "Jane Doe",
      position: "CTO",
      info: (
        <div>
          <p>
            Founder and Principal of Jefferson Hospitality, Jeffrey Oduma is
            recognized as a visionary and forward-thinking leader among a new
            generation of hospitality entrepreneurs. Jeffrey's rapidly expanding
            portfolio of acclaimed destinations. Jeffrey’s is a management
            professional/entrepreneur with over 12years of extensive background
            in architecture, hospitality design, hospitality management, and
            investment.
          </p>
          <p>
            He believes the extents of creativity and passion are limitless, and
            which led him to found a number of fast-rising strong brands across
            the country (e.g Temple Grill, Cloud Vista, Mayfair Design etc)
            Jefferson Hospitality is now planning its future by expanding its
            scope into modern commercial and residential development with a
            vision to become the leading entrepreneur in the building and
            selling of rehabilitated and new luxury homes & short lets
            apartments.
          </p>
        </div>
      ),
      image: user,
    },
  ];
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Meet the Jefferson Team</h3>
        <h2>Meet Our Team of Experts in Hospitality Management</h2>
        <p>
          To be the industry-leading hospitality company , It takes an
          innovative group of passionate experts. Get to know the people leading
          the way at Jefferson Hospitality.
        </p>
      </section>
      <section className={style.team}>
        <nav
          onClick={() => {
            setShowModal(true);
            setMember(members[0]);
          }}
        >
          <img src={holder} alt="" />
          <span>Mr. Jeffrey Oduma</span>
          <small>Founder & CEO</small>
        </nav>
        <nav
          onClick={() => {
            setShowModal(true);
            setMember(members[1]);
          }}
        >
          <img src={holder} alt="" />
          <span>Mr. Jeffrey Oduma</span>
          <small>Founder & CEO</small>
        </nav>
        <nav
          onClick={() => {
            setShowModal(true);
            setMember(members[2]);
          }}
        >
          <img src={holder} alt="" />
          <span>Mr. Jeffrey Oduma</span>
          <small>Founder & CEO</small>
        </nav>
        <nav
          onClick={() => {
            setShowModal(true);
            setMember(members[3]);
          }}
        >
          <img src={holder} alt="" />
          <span>Mr. Jeffrey Oduma</span>
          <small>Founder & CEO</small>
        </nav>
        <nav
          onClick={() => {
            setShowModal(true);
            setMember(members[4]);
          }}
        >
          <img src={holder} alt="" />
          <span>Mr. Jeffrey Oduma</span>
          <small>Founder & CEO</small>
        </nav>
      </section>
      <section className={style.contact}>
        <h2>Ready to have a conversation?</h2>
        <button>Contact our Team</button>
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
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          info={member.info}
          image={member.image}
          name={member.name}
          position={member.position}
        />
      )}
    </div>
  );
}
