import Image from "next/image";
import "./main.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Reviews from "@/components/Reviews/Reviews";
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";
import GetConsult from "@/components/GetConsult/GetConsult";
import MyAdvantages from "@/components/MyAdvantages/MyAdvantages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <MyAdvantages />
        <GetConsult />
        <Reviews />
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}
