import "./Home.scss";
import React, { Suspense } from "react";
import Header from "../../layouts/Header/Header";
import Banner from "../../components/Banner/Banner";
const Skills = React.lazy(() => import("../../components/Skills/Skills"));
const Gallery = React.lazy(() => import("../../components/Gallery/Gallery"));
const Contact = React.lazy(() => import("../../components/Contact/Contact"));
const Footer = React.lazy (() => import("../../layouts/Footer/Footer"));

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container home-content">
        <Banner />
        <Suspense>
          <Skills />
        </Suspense>
      </div>
      <Suspense>
        <Gallery />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
