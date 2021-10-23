import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PopulerFoods from '../components/PopulerFoods';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <PopulerFoods />
    </Layout>
  );
}
