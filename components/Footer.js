import useTranslation from 'next-translate/useTranslation';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      {/* top */}
      <div data-aos="fade-up" className="top">
        <div className="top-section">
          <h5 className="brand">
            Jamal<span>Food</span>
          </h5>
          <p>{t('common:footerBrandDesc')}</p>
        </div>
        <div className="top-section list">
          <h5>{t('common:footerAboutTitle')}</h5>
          <p>{t('common:footerAboutList1')}</p>
          <p>{t('common:footerAboutList2')}</p>
          <p>{t('common:footerAboutList3')}</p>
          <p>{t('common:footerAboutList4')}</p>
        </div>
        <div className="top-section list">
          <h5>{t('common:footerCompanyTitle')}</h5>
          <p>{t('common:footerCompanyList1')}</p>
          <p>{t('common:footerCompanyList2')}</p>
          <p>{t('common:footerCompanyList3')}</p>
        </div>
        <div className="top-section list">
          <h5>{t('common:footerHelpTitle')}</h5>
          <p>{t('common:footerHelpList1')}</p>
          <p>{t('common:footerHelpList2')}</p>
          <p>{t('common:footerHelpList3')}</p>
          <p>{t('common:footerHelpList4')}</p>
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
