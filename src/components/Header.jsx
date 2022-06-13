import React, {useState} from 'react'
import style from './../styles/header.module.css'
import logo from './../assets/Jefferson  logo.png'
import icon1 from './../assets/bag-2.svg'
import icon2 from "./../assets/profile.svg";
import icon3 from "./../assets/profile-circle.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  function handleScroll(e) {
    if (window.scrollY > 130) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  // const [hamNav, setHamNav] = useState(false);
  // function handleShow() {
  //   setHamNav(!hamNav);
  // }

  return (
    <header className={sticky ? style.sticky : ""}>
      <div className={style.prehead}>
        <span>Shop hospitality and kitchen wares on {">>"} </span>
        <span>
          <img src={icon1} alt="" /> Hospitalitte’ Shop
        </span>
        <span>
          <img src={icon2} alt="" /> Join Life
        </span>
        <span>
          <img src={icon3} alt="" /> Sign In
        </span>
      </div>
      <div className={style.main_head}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Invest in Hospitality</Link>
          <Link to="/">Collections</Link>
          <Link to="/">Jefferson Life</Link>
          <Link to="/">Contact Us</Link>
        </nav>
        <button onClick={() => navigate("/contact")}>
          Request Consultation
        </button>
        <Outlet />
      </div>
    </header>
  );
}
