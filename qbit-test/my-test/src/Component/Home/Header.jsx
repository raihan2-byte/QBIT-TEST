import React from "react";
import HeaderImg from "../../assets/UMKM.jpg";

const Header = () => {
  return (
    <div>
      <div className="lg:flex lg:items-center">
        <div className="flex justify-center m-auto ">
          <img src={HeaderImg} alt="" className="lg:w-[70vh]" />
        </div>
        <div className="text-left lg:w-1/2">
          <div className="font-bold text-3xl mb-8">Who We Are</div>
          <div className="text-justify text-xl">
            Kami adalah pemberi wadah pengetahuan yang berkomitmen untuk
            mendukung Usaha Mikro, Kecil, dan Menengah (UMKM). Kami percaya
            bahwa UMKM adalah tulang punggung perekonomian yang berkontribusi
            secara signifikan terhadap pertumbuhan ekonomi dan pembangunan
            masyarakat. Melalui platform kami, kami berupaya untuk memberikan
            pemahaman yang lebih dalam tentang UMKM.
          </div>
          <div className="flex justify-center gap-10">
            <button className="font-bold bg-sky-600 rounded-2xl py-3 px-8 mt-5">
              Contact
            </button>
            <button className="font-bold bg-sky-400 rounded-2xl py-3 px-8 mt-5">
              Products
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:gap-10 lg:px-20">
        <div className="my-10 lg:w-1/2">
          <div className="text-center text-3xl mb-5">
            the <span className="font-bold">Vision</span>
          </div>
          <div className="text-justify text-xl">
            Menjadi mitra utama dan sumber terpercaya dalam mendukung
            pertumbuhan dan keberlanjutan Usaha Mikro, Kecil, dan Menengah
            (UMKM) di seluruh dunia.
          </div>
        </div>
        <div className="my-10 lg:w-1/2">
          <div className="text-center text-3xl mb-5">
            the <span className="font-bold">Mision</span>
          </div>
          <div className="text-justify text-xl">
            Memberikan wadah pengetahuan yang komprehensif tentang UMKM,
            termasuk panduan praktis, informasi terkini, dan sumber daya yang
            dibutuhkan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
