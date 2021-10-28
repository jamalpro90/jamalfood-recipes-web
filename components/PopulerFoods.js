/* eslint-disable @next/next/no-img-element */
import { populerFoodsImg } from '../data/PopulerFoods';
import useTranslation from 'next-translate/useTranslation';

function PopulerFoods() {
  const { t } = useTranslation();

  return (
    <div className="populer-food">
      <h3 data-aos="fade-down-right">{t('common:popularTitle')}</h3>
      <p data-aos="fade-left">{t('common:popularDesc')}</p>
      <div className="img-container">
        {populerFoodsImg.map((imgUrl, i) => (
          <img key={i} data-aos="flip-left" src={imgUrl} alt="food image" />
        ))}
      </div>
    </div>
  );
}

export default PopulerFoods;
