import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import recipesIdEn from '../../data/recipes.json';

function DetailId() {
  const { t } = useTranslation();
  const router = useRouter();
  const routerId = router.query.id;

  const recipes = router.locale === 'id' ? recipesIdEn.id : recipesIdEn.en;
  const recipeIndex = recipes.filter((val) => val.name === routerId);
  const recipe = recipeIndex[0];

  console.log(recipe);

  return (
    <Layout title="Resep">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ margin: '3rem' }}>{recipe.name}</h1>
      <div className="ingridients" style={{ margin: 20 }}>
        <h2>{t('common:ingredientText')}:</h2>
        {recipe.ingridients.map((val, i) => (
          <p key={i}>
            {i + 1}. {val}
          </p>
        ))}
      </div>
      <div className="how-to-cook" style={{ margin: 20 }}>
        <h2>{t('common:howToCook')}:</h2>
        {recipe.howToCook.map((val, i) => (
          <p key={i}>{val}</p>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}

export default DetailId;
