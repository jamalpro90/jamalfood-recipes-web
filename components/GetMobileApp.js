import Image from 'next/image';
import Button from './Button';
import GreenSpan from './GreenSpan';

function GetMobileContainer() {
  return (
    <div className="get-mobile-container">
      {/* Left Section */}
      <section className="left">
        <div className="img-container">
          <Image className="img" src="/img/mobile-app-design.png" alt="pangsit" width={250} height={550} layout="responsive" />
        </div>
      </section>
      {/* Right Section */}
      <section className="right">
        <GreenSpan text="Unduh" />
        <h2>Dapatkan Aplikasi</h2>
        <div className="p-right">
          <p>Aplikasi kami tersedia di Play Store dan App Store yang bisa anda unduh secara gratis dan nikmati pengalaman yang lebih memuaskan dengan aplikasi kami.</p>
        </div>
        <div className="btn-container">
          <div className="app-img-container">
            <Image src="/img/plays-store.png" alt="google play image" width={170} height={130} />
          </div>
          <div className="app-img-container">
            <Image src="/img/app-store.png" alt="google play image" width={180} height={63} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetMobileContainer;
