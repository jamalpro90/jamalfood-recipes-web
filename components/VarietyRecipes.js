import Image from "next/image";
import Button from "./Button";
import GreenSpan from "./GreenSpan";
import Link from "next/link";

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
        <GreenSpan text="Seafood" />
        <h2 data-aos="fade-down-left">Variety Of Seafood</h2>
        <div data-aos="fade-left" className="p-right">
          <p>
            Various healthy and refreshing seafood recipes, with delicious taste
            and stunning appearance.
          </p>
        </div>
        <div data-aos="fade-up" className="btn-container">
          <Link href="/seafood" passHref>
            <Button text="See Menu" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default VarietyRecipes;
