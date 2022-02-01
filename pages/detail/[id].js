import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import recipesIdEn from "../../data/recipes.json";

function DetailId() {
  const router = useRouter();
  const routerId = router.query.id;

  const recipes = recipesIdEn.en;
  const recipeIndex = recipes.filter(val => val.name === routerId);
  const recipe = recipeIndex[0];

  return (
    <Layout title="Resep">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ margin: "3rem" }}>{recipe.name}</h1>
      <div className="ingridients" style={{ margin: 20 }}>
        <h2>Ingredients :</h2>
        {recipe.ingridients.map((val, i) => (
          <p key={i}>
            {i + 1}. {val}
          </p>
        ))}
      </div>
      <div className="how-to-cook" style={{ margin: 20 }}>
        <h2>How To Cook :</h2>
        {recipe.howToCook.map((val, i) => (
          <p key={i}>{val}</p>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}

export default DetailId;
