import Aos from "aos";
import { useEffect } from "react";
import CarouselCom from "../components/CarouselCom";
import Footer from "../components/Footer";
import GetMobileApp from "../components/GetMobileApp";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PopulerFoods from "../components/PopulerFoods";
import Subscribe from "../components/Subscribe";
import VarietyRecipes from "../components/VarietyRecipes";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);

  return (
    <Layout title="Home">
      <Navbar />
      <Hero />
      <PopulerFoods />
      <VarietyRecipes />
      <CarouselCom />
      <GetMobileApp />
      <Subscribe />
      <Footer />
    </Layout>
  );
}

// https://jsonplaceholder.typicode.com/users
