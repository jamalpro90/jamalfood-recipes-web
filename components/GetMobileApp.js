import Image from 'next/image';
import GreenSpan from './GreenSpan';
import useTranslation from 'next-translate/useTranslation';

function GetMobileContainer() {
  const { t } = useTranslation();

  return (
    <div id="mobile-app" className="get-mobile-container">
      {/* Left Section */}
      <section className="left">
        <div data-aos="flip-right" data-aos-duration="2000" className="img-container">
          <Image className="img" src="/img/mobile-app-design.png" alt="pangsit" width={250} height={550} layout="responsive" />
        </div>
      </section>
      {/* Right Section */}
      <section className="right">
        <GreenSpan text={t('common:mobileGreenSpan')} />
        <h2 data-aos="fade-left">{t('common:mobileTitle')}</h2>
        <div data-aos="fade-left" className="p-right">
          <p>{t('common:mobileDesc')}</p>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="1400" className="btn-container">
          <div className="app-img-container" onClick={() => alert(t('common:notAvailable'))}>
            <Image src="/img/plays-store.png" alt="google play image" width={170} height={130} />
          </div>
          <div className="app-img-container" onClick={() => alert(t('common:notAvailable'))}>
            <Image src="/img/app-store.png" alt="google play image" width={180} height={63} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetMobileContainer;
