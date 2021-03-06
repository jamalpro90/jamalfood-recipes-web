import { useEffect } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import Footer from "../../components/Footer";

export default function Detail({ mealList }) {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);

  return (
    <Layout title="Detail">
      <Navbar />

      <div className="meals-container">
        {mealList &&
          mealList.map(meal => (
            <Link key={meal.idMeal} href={`/detail/${meal.idMeal}`} passHref>
              <div key={meal.idMeal} className="meal">
                <Image
                  src={meal.strMealThumb}
                  alt="Meal Image"
                  width={200}
                  height={150}
                  layout="responsive"
                />
                <p>{meal.strMeal}</p>
              </div>
            </Link>
          ))}
      </div>

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query.text}`
  );
  const data = await res.json();

  return { props: { mealList: data.meals } };
}
