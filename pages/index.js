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

export default function Home({ mealsArea }) {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);

  // console.log(mealsArea);
  return (
    <Layout title="Home">
      <Navbar />
      <Hero />
      <PopulerFoods mealsArea={mealsArea} />
      <VarietyRecipes />
      <CarouselCom />
      <GetMobileApp />
      <Subscribe />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  );
  const mealsArea = await res.json();

  return { props: { mealsArea: mealsArea.meals } };
}
