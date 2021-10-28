/* eslint-disable @next/next/no-img-element */
import { populerFoodsImg } from '../data/PopulerFoods';
import useTranslation from 'next-translate/useTranslation';

function PopulerFoods() {
  const { t } = useTranslation();

  return (
    <div className="populer-food">
      <h3>{t('common:popularTitle')}</h3>
      <p>{t('common:popularDesc')}</p>
      <div className="img-container">
        {populerFoodsImg.map((imgUrl, i) => (
          <img key={i} src={imgUrl} alt="food image" />
        ))}
      </div>
    </div>
  );
}

export default PopulerFoods;
