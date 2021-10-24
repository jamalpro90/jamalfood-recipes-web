import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PopulerFoods from '../components/PopulerFoods';
import VarietyRecipes from '../components/VarietyRecipes';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <PopulerFoods />
      <VarietyRecipes />
    </Layout>
  );
}
