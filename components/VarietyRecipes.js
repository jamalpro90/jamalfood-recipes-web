import Image from 'next/image';
import Button from './Button';
import GreenSpan from './GreenSpan';
import useTranslation from 'next-translate/useTranslation';

function VarietyRecipes() {
  const { t } = useTranslation();

  return (
    <div className="vari-container">
      {/* Left Section */}
      <section className="left">
        <div data-aos="fade-right" className="img-container">
          <Image className="img" src="/img/variety-recipes2.png" alt="pangsit" width={640} height={426} layout="responsive" />
        </div>
      </section>
      {/* Right Section */}
      <section className="right">
        <GreenSpan text={t('common:variGreenSpan')} />
        <h2 data-aos="fade-down-left">{t('common:variTitle')}</h2>
        <div data-aos="fade-left" className="p-right">
          <p>{t('common:variDesc')}</p>
        </div>
        <div data-aos="fade-up" className="btn-container">
          <Button text={t('common:variBtn')} />
        </div>
      </section>
    </div>
  );
}

export default VarietyRecipes;
