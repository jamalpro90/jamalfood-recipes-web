import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Aos from "aos";

function DetailId({ meal }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1400, once: true });

    // cari dan grouping ingredients
    const arr = [];
    for (const ing in meal) {
      if (ing.includes("strIngredient") && meal[ing] !== "") {
        arr.push(meal[ing]);
      }
    }

    setIngredients(arr);
  }, []);

  return (
    <Layout title="Resep">
      <Navbar />

      <div className="meal-detail-container">
        <h1 className="title">{meal.strMeal}</h1>
        <div className="img-container">
          <Image
            src={meal.strMealThumb}
            alt="Meal Image"
            width={1080}
            height={720}
            layout="responsive"
          />
        </div>

        <div className="ingredients-container menu-title">
          <h2>Ingredients :</h2>
          <div className="ingredients menu-content">
            {ingredients.map((ing, i) => (
              <p key={i}>
                {i + 1} {ing}
              </p>
            ))}
          </div>
        </div>

        <div className="instructions-container menu-title">
          <h2>Instructions :</h2>
          <p className="instructions menu-content">{meal.strInstructions}</p>
        </div>

        <div className="videos-cotnainer menu-title">
          <h2>Videos :</h2>
          <div className="videos">
            <iframe
              className="responsive-iframe"
              src={meal.strYoutube.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default DetailId;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const meal = await res.json();

  return { props: { meal: meal.meals[0] } };
}
