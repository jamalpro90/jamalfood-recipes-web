function Subscribe() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="subscribe-container"
    >
      <div className="subscribe">
        <h3>Subscribe to get recipes every week</h3>
        <div className="input-box">
          <i className="far fa-envelope"></i>
          <input type="text" placeholder="Subscribe" />
        </div>
        <div className="btn-container" onClick={() => alert("Not Available")}>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
