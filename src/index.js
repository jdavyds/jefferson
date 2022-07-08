import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Team from "./components/pages/Team";
import Careers from "./components/pages/Careers";
import Career from './components/pages/Career';
import Awards from "./components/pages/Awards";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Service from "./components/pages/Service";
import Consultation from "./components/pages/Consultation";
import Brands from "./components/pages/Brands";
import Brand from "./components/pages/Brand";
import Deals from "./components/pages/Deals";
import Collections from "./components/pages/Collections";
import Collection from "./components/pages/Collection";
import Deal from "./components/pages/Deal";
import Trainings from "./components/pages/Trainings";
import Training from "./components/pages/Training";
import ScrollToTop from "./components/subComponents/Scroll";
import PartnershipLife from "./components/pages/PartnershipLife";
import Events from './components/pages/Events';
import FirstStart from "./components/pages/FirstStart";
import Brochure from "./components/pages/Brochure";
import Blogs from "./components/pages/Blogs";
import Blog from "./components/pages/Blog";
import Media from "./components/pages/Media";
import CaseStudy from "./components/pages/CaseStudy";
import Invests from "./components/pages/Invests";
import Invest from './components/pages/Invest';
import Csr from "./components/pages/Csr";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="careers" element={<Careers />} />
            <Route path="careers/:id" element={<Career />} />
            <Route path="awards" element={<Awards />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<Service />} />
            <Route path="request-consultation" element={<Consultation />} />
            <Route path="brands" element={<Brands />} />
            <Route path="brands/:id" element={<Brand />} />
            <Route path="deals" element={<Deals />} />
            <Route path="deals/:id" element={<Deal />} />
            <Route path="collections" element={<Collections />} />
            <Route path="collections/:id" element={<Collection />} />
            <Route path="trainings" element={<Trainings />} />
            <Route path="trainings/:id" element={<Training />} />
            <Route path="partnership-life" element={<PartnershipLife />} />
            <Route path="events" element={<Events />} />
            <Route path="first-start" element={<FirstStart />} />
            <Route path="brochure" element={<Brochure />} />
            <Route path="insight-blog" element={<Blogs />} />
            <Route path="insight-blog/:id" element={<Blog />} />
            <Route path="media-press" element={<Media />} />
            <Route path="case-study" element={<CaseStudy />} />
            <Route path="invest-in-hospitality" element={<Invests />} />
            <Route path="invest-in-hospitality/:id" element={<Invest />} />
            <Route path="community" element={<Csr />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
