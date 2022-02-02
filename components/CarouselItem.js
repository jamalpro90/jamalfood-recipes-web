import Image from "next/image";
import { useState } from "react";
import GreenSpan from "./GreenSpan";
import Link from "next/link";

function CarouselItem({ mealsVegan }) {
  const [count, setCount] = useState(0);
  const prevArrow = () =>
    count > 0 ? setCount(count - 1) : setCount(sliderFoods.length - 1);
  const nextArrow = () =>
    count < sliderFoods.length - 1 ? setCount(count + 1) : setCount(0);

  const sliderFoods = mealsVegan;
  const { strMeal, strMealThumb, idMeal } = sliderFoods[count];

  return (
    <div className="caro">
      {/* prev arrow */}
      <svg
        onClick={prevArrow}
        xmlns="http://www.w3.org/2000/svg"
        className="prev"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {/* left and rignt container */}
      <div className="left-and-right">
        {/* left */}
        <div className="left">
          <GreenSpan text="Good Vegan" />
          <h3 data-aos="fade-right" data-aos-anchor-placement="top-bottom">
            {strMeal}
          </h3>
          <Link href={`/vegan/${idMeal}`}>
            <a data-aos="fade-right">{`See More >>`}</a>
          </Link>
          {/* <p data-aos="fade-right">Description</p> */}
          <p className="time-cook">
            30 min maybe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="watch-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
        </div>

        {/* right */}
        <div className="right">
          <div data-aos="zoom-in-up" className="img-container">
            <Image
              className="caro-img"
              src={strMealThumb}
              alt="image"
              width={1080}
              height={720}
              // layout="responsive"
            />
          </div>
        </div>
      </div>

      {/* next arrow */}
      <svg
        onClick={nextArrow}
        xmlns="http://www.w3.org/2000/svg"
        className="next"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>

      {/* dots */}
      <div className="dots">
        {/* {sliderFoods[count] && <span className="active-dot">.</span>} */}
        {sliderFoods.map((dot, i) => (
          <span
            onClick={() => setCount(i)}
            className={i == count ? "active-dot" : ""}
            key={i}
          >
            <i className="fas fa-circle"></i>
          </span>
        ))}
      </div>
    </div>
  );
}

export default CarouselItem;
