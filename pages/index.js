import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Container from "../components/Container";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Container>
      <div className="px-5">
        <Hero />

        <h3 id="myskills" className="titleafter text-bluegray">
          My Technical Skills
        </h3>
        <Skills />

        <h3 id="mywork" className="titleafter text-bluegray">
          My Work
        </h3>
        <Projects />
      </div>

      <Testimonial />

      <div className="px-5">
        <Contact />
        <Footer />
      </div>
    </Container>
  );
}
