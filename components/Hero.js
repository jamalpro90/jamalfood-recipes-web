import Image from 'next/image';
import Button from './Button';

function Hero() {
  return (
    <div className="hero-container">
      {/* Left Section */}
      <section className="left">
        <h2>Mulai Memasak Dengan Resep Populer</h2>
        <div className="p-left">
          <p>Mau masak tapi bingung mau dari mana?</p>
          <p>Jangan kawatir kami akan memandu anda</p>
        </div>
        <div className="btn-container">
          <Button text="Mulai" />
          <Button text="Cari Resep" outlined />
        </div>
      </section>
      {/* Right Section */}
      <section className="right">
        <div className="img-container">
          <Image className="img" src="/img/pangsit.png" alt="pangsit" width={640} height={426} layout="responsive" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
