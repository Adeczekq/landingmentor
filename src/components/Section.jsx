import Item from './Item';
import IconAnimation from './../assets/icon-animation.svg';
import IconBusiness from './../assets/icon-business.svg';
import IconCrypto from './../assets/icon-crypto.svg';
import IconPhotography from './../assets/icon-photography.svg';
import IconDesign from './../assets/icon-design.svg';

function Section() {
  return (
    <div className="mt-6 bg-gradient-to-t from-white to-gradient-white">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center justify-items-center gap-4 px-4 py-6 sm:grid-cols-1 md:grid-cols-2">
        <div className="panel col-span-1 rounded-xl bg-gradient-to-t from-gradient-pink to-gradient-orange p-6 pt-12 text-3xl font-semibold text-white drop-shadow-lg">
          Sprawdź nasze
          <br /> najpopularniejsze kursy!
        </div>
        <div className="col-span-1 ">
          <Item
            icon={IconAnimation}
            title="Animacja"
            text="Naucz się najnowszych technik animacji, aby tworzyć oszałamiający design ruchu i zachwycić swoją widownię."
          />
        </div>
        <div className="col-span-1 ">
          <Item
            icon={IconDesign}
            title="Design"
            text="Twórz piękne, użyteczne interfejsy, które kształtują przyszłość wyglądu stron internetowych."
          />
        </div>
        <div className="col-span-1 ">
          <Item
            icon={IconPhotography}
            title="Fotografia"
            text="Zbadaj kluczowe podstawy, takie jak oświetlenie, kompozycja i ostrość, aby uwiecznić wyjątkowe zdjęcia."
          />
        </div>
        <div className="col-span-1 ">
          <Item
            icon={IconCrypto}
            title="Kryptowaluty"
            text="Wszystko, co musisz wiedzieć, aby rozpocząć inwestowanie w kryptowaluty. Przejdź od początkującego do zaawansowanego w ciągu 54 godzin."
          />
        </div>
        <div className="col-span-1 ">
          <Item
            icon={IconBusiness}
            title="Biznes"
            text="Krok po kroku przewodnik, który pomoże Ci rozpocząć, rozwijać i utrzymać swój biznes bez zewnętrznych inwestycji."
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
