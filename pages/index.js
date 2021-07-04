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

        <Skills />

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
