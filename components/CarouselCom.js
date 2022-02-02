import CarouselItem from "./CarouselItem";

function CarouselCom({ mealsVegan }) {
  return (
    <div className="caro-container">
      <CarouselItem mealsVegan={mealsVegan} />
    </div>
  );
}

export default CarouselCom;
