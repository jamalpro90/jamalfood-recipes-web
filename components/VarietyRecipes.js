import Image from "next/image";
import Button from "./Button";
import GreenSpan from "./GreenSpan";

function VarietyRecipes() {
  return (
    <div className="vari-container">
      {/* Left Section */}
      <section className="left">
        <div data-aos="fade-right" className="img-container">
          <Image
            className="img"
            src="/img/variety-recipes2.png"
            alt="pangsit"
            width={640}
            height={426}
            layout="responsive"
          />
        </div>
      </section>

      {/* Right Section */}
      <section className="right">
        <GreenSpan text={`Foods & Drinks`} />
        <h2 data-aos="fade-down-left">Variety Of Dood And Drink Recipes</h2>
        <div data-aos="fade-left" className="p-right">
          <p>
            We have many variations of recipes for food and drink recipes from
            trusted chefs, with clear cooking methods and delicious flavors.
          </p>
        </div>
        <div data-aos="fade-up" className="btn-container">
          <Button text="See Menu" onClick={() => alert("Not Available")} />
        </div>
      </section>
    </div>
  );
}

export default VarietyRecipes;
