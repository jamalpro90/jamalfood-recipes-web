/* eslint-disable @next/next/no-img-element */
import { populerFoodsImg } from '../data/PopulerFoods';

function PopulerFoods() {
  return (
    <div className="populer-food">
      <h3>Menu Populer</h3>
      <p>Kami punya banyak pilihan menu yang mungkin anda suka</p>
      <div className="img-container">
        {populerFoodsImg.map((imgUrl, i) => (
          <img key={i} src={imgUrl} alt="food image" />
        ))}
      </div>
    </div>
  );
}

export default PopulerFoods;
