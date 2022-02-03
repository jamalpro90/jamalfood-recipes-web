function Subscribe() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="subscribe-container"
    >
      <div className="subscribe">
        <h3>Subscribe to get recipes every week</h3>
        {/* <div className="input-box">
          <i className="far fa-envelope"></i>
          <input type="text" placeholder="Subscribe" />
        </div> */}
        <a
          href="https://www.youtube.com/c/samthecookingguy?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="btn-container">
            <button>Subscribe</button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Subscribe;
