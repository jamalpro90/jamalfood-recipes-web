import Image from 'next/image';
import GreenSpan from './GreenSpan';
import { sliderFoods } from '../data/SliderFoods';
import { useState } from 'react';

function CarouselItem() {
  const [count, setCount] = useState(0);
  const prevArrow = () => (count > 0 ? setCount(count - 1) : setCount(sliderFoods.length - 1));
  const nextArrow = () => (count < sliderFoods.length - 1 ? setCount(count + 1) : setCount(0));

  const { greenSpan, title, desc, cookTime, image, thumbs } = sliderFoods[count];

  return (
    <div className="caro">
      {/* prev arrow */}
      <svg onClick={prevArrow} xmlns="http://www.w3.org/2000/svg" className="prev" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {/* left and rignt container */}
      <div className="left-and-right">
        {/* left */}
        <div className="left">
          <GreenSpan text={greenSpan} />
          <h3>{title}</h3>
          <p>{desc}</p>
          <p className="time-cook">
            {cookTime}
            <svg xmlns="http://www.w3.org/2000/svg" className="watch-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </p>
          <div className="thumb-container">
            {thumbs.map((image, i) => (
              <div key={i} className="thumb">
                <Image src={image} alt="image" width={48} height={48} layout="responsive" />
              </div>
            ))}
            <div className="thumb more-thumb">+6</div>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div className="img-container">
            <Image className="caro-img" src={image} alt="image" width={400} height={340} layout="responsive" />
          </div>
        </div>
      </div>
      {/* next arrow */}
      <svg onClick={nextArrow} xmlns="http://www.w3.org/2000/svg" className="next" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      {/* dots */}
      <div className="dots">
        {/* {sliderFoods[count] && <span className="active-dot">.</span>} */}
        {sliderFoods.map((dot, i) => (
          <span onClick={() => setCount(i)} className={i == count ? 'active-dot' : ''} key={i}>
            <i className="fas fa-circle"></i>
          </span>
        ))}
      </div>
    </div>
  );
}

export default CarouselItem;
