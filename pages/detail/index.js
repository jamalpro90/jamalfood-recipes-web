import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Detail({ query, mealList }) {
  console.log(query);
  console.log(mealList);
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
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query.text}`
  );
  const data = await res.json();

  return { props: { query: query.text, mealList: data.meals } };
}
