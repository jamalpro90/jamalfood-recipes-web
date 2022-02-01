import Image from "next/image";
import GreenSpan from "./GreenSpan";

function GetMobileContainer() {
  return (
    <div id="mobile-app" className="get-mobile-container">
      {/* Left Section */}
      <section className="left">
        <div
          data-aos="flip-right"
          data-aos-duration="2000"
          className="img-container"
        >
          <Image
            className="img"
            src="/img/mobile-app-design.png"
            alt="pangsit"
            width={250}
            height={550}
            layout="responsive"
          />
        </div>
      </section>
      {/* Right Section */}
      <section className="right">
        <GreenSpan text="Download" />
        <h2 data-aos="fade-left">Get The App</h2>
        <div data-aos="fade-left" className="p-right">
          <p>
            Our application is available on Play Store and App Store which you
            can download for free and enjoy a more satisfying experience with
            our application.
          </p>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="1400"
          className="btn-container"
        >
          <div
            className="app-img-container"
            onClick={() => alert("Not Available")}
          >
            <Image
              src="/img/plays-store.png"
              alt="google play image"
              width={170}
              height={130}
            />
          </div>
          <div
            className="app-img-container"
            onClick={() => alert("Not Available")}
          >
            <Image
              src="/img/app-store.png"
              alt="google play image"
              width={180}
              height={63}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetMobileContainer;
