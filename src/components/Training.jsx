import React from 'react'
import style from './../styles/training.module.css'
import Footer from './Footer'
import Header from './Header'
export default function Training() {
  return (
    <div>
      <Header />
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
