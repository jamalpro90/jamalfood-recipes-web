/* eslint-disable @next/next/no-img-element */
import { populerFoodsImg } from "../data/PopulerFoods";

function PopulerFoods() {
  return (
    <div className="populer-food">
      <h3 data-aos="fade-down-right">Popular Menu</h3>
      <p data-aos="fade-left">We have many menu choices that you might like</p>
      <div className="img-container">
        {populerFoodsImg.map((imgUrl, i) => (
          <img key={i} data-aos="flip-left" src={imgUrl} alt="food image" />
        ))}
      </div>
    </div>
  );
}

export default PopulerFoods;
