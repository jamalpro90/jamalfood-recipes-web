function Footer() {
  // const { t } = useTranslation();

  return (
    <footer id="footer">
      {/* top */}
      <div data-aos="fade-up" className="top">
        <div className="top-section">
          <h5 className="brand">
            Jamal<span>Food</span>
          </h5>
          <p>
            JamalFood is an application to find various food and beverage
            recipes
          </p>
        </div>
        <div className="top-section list">
          <h5>About</h5>
          <p>About Us</p>
          <p>Recipes</p>
          <p>Download</p>
          <p>Contact</p>
        </div>
        <div className="top-section list">
          <h5>Company</h5>
          <p>Our Recipes</p>
          <p>Subscribe</p>
          <p>FAQ</p>
        </div>
        <div className="top-section list">
          <h5>Help</h5>
          <p>Help Center</p>
          <p>Account</p>
          <p>Advices</p>
          <p>Accessibility</p>
        </div>
      </div>
      {/* bottom */}
      <div className="bottom">
        <p>Copyright &copy; JamalFood, All Right Reserved.</p>
        <div className="icon-container">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
