/* eslint-disable @next/next/no-img-element */

function PopulerFoods({ mealsArea }) {
  return (
    <div className="populer-food">
      <h3 data-aos="fade-down-right">Popular Menu In Canada</h3>
      <p data-aos="fade-left">We have many menu choices that you might like</p>
      <div className="img-container">
        {mealsArea.map(meal => (
          <div key={meal.idMeal} className="img-self">
            <div className="img-name">
              <p>{meal.strMeal}</p>
            </div>
            <img
              data-aos="flip-left"
              src={meal.strMealThumb}
              alt="Meal Image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopulerFoods;
