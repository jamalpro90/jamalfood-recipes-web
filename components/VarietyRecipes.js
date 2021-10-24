import Image from 'next/image';
import Button from './Button';

function Hero() {
  return (
    <div className="vari-container">
      {/* Left Section */}
      <section className="left">
        <div className="img-container">
          <Image className="img" src="/img/variety-recipes2.png" alt="pangsit" width={640} height={426} layout="responsive" />
        </div>
      </section>
      {/* Right Section */}
      <section className="right">
        <span>Makanan & Minuman</span>
        <h2>Variasi resep makanan dan minuman</h2>
        <div className="p-right">
          <p>Kami punya banyak variasi resep makanan dan minuman resep dari koki terpercaya, dengan cara memasak yang jelas dan rasa yang enak.</p>
        </div>
        <div className="btn-container">
          <Button text="Lihat Menu" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
