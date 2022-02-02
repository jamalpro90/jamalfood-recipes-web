import { useEffect } from "react";
import Aos from "aos";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function Seafood({ seafoods }) {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);

  // console.log(seafoods);
  return (
    <Layout title="Seafoods">
      <Navbar />

      <div className="seafood-container">
        {seafoods &&
          seafoods.map(seafood => (
            <Link
              key={seafood.idMeal}
              href={`/seafood/${seafood.idMeal}`}
              passHref
            >
              <div key={seafood.idMeal} className="meal">
                <Image
                  src={seafood.strMealThumb}
                  alt="Meal Image"
                  width={200}
                  height={150}
                  layout="responsive"
                />
                <p>{seafood.strMeal}</p>
              </div>
            </Link>
          ))}
      </div>

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await res.json();

  return { props: { seafoods: data.meals } };
}
