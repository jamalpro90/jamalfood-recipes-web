import Image from 'next/image';
import Button from './Button';
import useTranslation from 'next-translate/useTranslation';

function Hero() {
  const { t } = useTranslation();

  const handleFocusSearch = () => {
    document.querySelector('.search-box input').focus();
    document.querySelector('.nav-middle .search-box input').focus();
  };

  return (
    <div className="hero-container">
      {/* Left Section */}
      <section className="left">
        <h2 data-aos="fade-right">{t('common:heroTitle')}</h2>
        <div data-aos="fade-right" className="p-left">
          <p>{t('common:heroDesc1')}</p>
          <p>{t('common:heroDesc2')}</p>
        </div>
        <div data-aos="fade-up" className="btn-container">
          <Button text={t('common:heroBtn1')} onClick={() => alert(t('common:notAvailable'))} />
          <Button text={t('common:heroBtn2')} onClick={handleFocusSearch} outlined />
        </div>
      </section>
      {/* Right Section */}
      <section className="right">
        <div data-aos="fade-left" className="img-container">
          <Image className="img" src="/img/pangsit.png" alt="pangsit" width={640} height={426} layout="responsive" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
