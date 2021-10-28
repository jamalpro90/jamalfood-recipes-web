import useTranslation from 'next-translate/useTranslation';

function Subscribe() {
  const { t } = useTranslation();

  return (
    <div className="subscribe-container">
      <div className="subscribe">
        <h3>{t('common:subscribeTitle')}</h3>
        <div className="input-box">
          <i className="far fa-envelope"></i>
          <input type="text" placeholder={t('common:subscribePh')} />
        </div>
        <div className="btn-container">
          <button>{t('common:subscribeBtn')}</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
