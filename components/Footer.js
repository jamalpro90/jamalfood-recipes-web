function Footer() {
  return (
    <footer className="footer-container">
      {/* top */}
      <div className="top">
        <div className="top-section">
          <h5 className="brand">
            Jamal<span>Food</span>
          </h5>
          <p>JamalFood adalah aplikasi untuk menemukan berbagai resep masakan makanan dan minuman</p>
        </div>
        <div className="top-section list">
          <h5>Tentang</h5>
          <p>Tentang Kami</p>
          <p>Resep</p>
          <p>Unduh</p>
          <p>Kontak</p>
        </div>
        <div className="top-section list">
          <h5>Perusahaan</h5>
          <p>Resep Kami</p>
          <p>Langganan</p>
          <p>FAQ</p>
        </div>
        <div className="top-section list">
          <h5>Bantuan</h5>
          <p>Akun</p>
          <p>Pusat Bantuan</p>
          <p>Masukan</p>
          <p>Aksesibilitas</p>
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
