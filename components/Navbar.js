import Brand from './Brand';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/dist/client/router';

function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleChangeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  return (
    <div data-aos="fade-down" className="nav-container">
      {/* nav top */}
      <div className="nav-top">
        {/* Brand */}
        <Brand />
        {/* Nav Item */}
        <ul className="nav-item-container">
          <li>
            <a href="">{t('common:navList1')}</a>
          </li>
          <li>
            <a href="">{t('common:navList2')}</a>
          </li>
          <li>
            <a href="">{t('common:navList3')}</a>
          </li>
          <li>
            <a href="">{t('common:navList4')}</a>
          </li>
          <li>
            <a href="">{t('common:navList5')}</a>
          </li>
          <li>
            <select defaultValue={router.locale} name="language" onChange={handleChangeLanguage}>
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
        {/* Search Box */}
        <div className="nav-search">
          <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder={t('common:navSearch')} />
        </div>
      </div>
      {/* Nav Middle */}
      <div className="nav-middle">
        <div className="nav-search">
          <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {/* Nav Bottom */}
      <div className="nav-bottom">
        <ul className="nav-item-container">
          <li>
            <a href="">{t('common:navList1')}</a>
          </li>
          <li>
            <a href="">{t('common:navList2')}</a>
          </li>
          <li>
            <a href="">{t('common:navList3')}</a>
          </li>
          <li>
            <a href="">{t('common:navList4')}</a>
          </li>
          <li>
            <a href="">{t('common:navList5')}</a>
          </li>
          <li>
            <select defaultValue={router.locale} name="language" onChange={handleChangeLanguage}>
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
