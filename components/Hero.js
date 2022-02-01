import Image from "next/image";
import Button from "./Button";

function Hero() {
  const handleFocusSearch = () => {
    document.querySelector(".search-box input").focus();
    document.querySelector(".nav-middle .search-box input").focus();
  };

  return (
    <div className="hero-container">
      {/* Left Section */}
      <section className="left">
        <h2 data-aos="fade-right">Start cooking with popular recipes</h2>
        <div data-aos="fade-right" className="p-left">
          <p>{`Want to cook, but don't know where to start`}</p>
          <p>{`Don't worry we will guide you`}</p>
        </div>
        <div data-aos="fade-up" className="btn-container">
          <Button text="Start" onClick={() => alert("Not Available")} />
          <Button text="Search Recipes" onClick={handleFocusSearch} outlined />
        </div>
      </section>
      {/* Right Section */}
      <section className="right">
        <div data-aos="fade-left" className="img-container">
          <Image
            className="img"
            src="/img/pangsit.png"
            alt="pangsit"
            width={640}
            height={426}
            layout="responsive"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
