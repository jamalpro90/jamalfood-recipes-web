import Image from 'next/image';
import Button from './Button';
import useTranslation from 'next-translate/useTranslation';

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      {/* Left Section */}
      <section className="left">
        <h2>{t('common:heroTitle')}</h2>
        <div className="p-left">
          <p>{t('common:heroDesc1')}</p>
          <p>{t('common:heroDesc2')}</p>
        </div>
        <div className="btn-container">
          <Button text={t('common:heroBtn1')} />
          <Button text={t('common:heroBtn2')} outlined />
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
