import React from "react";

const Solution = () => {
  return (
    <div>
      <div className="lg:w-[90%] lg:m-auto">
        <div className="font-bold text-3xl text-center lg:text-5xl">
          Solutions
        </div>
        <div class="border-2 border-black my-2"></div>
        <div className="lg:flex lg:items-center">
          <div className="text-justify lg:w-[60%]">
            Dalam konteks layanan kami untuk UMKM, kami menyediakan berbagai
            solusi yang dapat membantu UMKM dalam mengatasi berbagai tantangan
            dan memanfaatkan peluang. Berikut adalah beberapa solusi utama yang
            kami tawarkan.
          </div>
          <div className="flex justify-center m-auto w-[65%] my-4 lg:w-[40%]">
            <img
              src="https://delosaqua.com/wp-content/uploads/2022/03/Delos-Mobile-Site_Graphics-02-300x300.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:gap-10 lg:w-[80%] lg:m-auto">
        <div className="text-right my-16 lg:w-1/2 lg:text-center">
          <div className="font-bold text-3xl">Technical Excellence</div>
          <div class="border-b border-black my-2"></div>
          <div>
            Kami menyediakan akses ke kursus, webinar, dan materi pembelajaran
            lainnya untuk membantu UMKM meningkatkan keterampilan dan
            pengetahuan mereka dalam berbagai aspek bisnis.
          </div>
        </div>
        <div className="text-right my-16 lg:w-1/2 lg:text-center">
          <div className="font-bold text-3xl">Demonstrably Good Products</div>
          <div class="border-b border-black my-2"></div>
          <div>
            Tim ahli kami memberikan konsultasi dan panduan kepada UMKM dalam
            mengelola bisnis mereka, mulai dari perencanaan strategis hingga
            pemasaran dan pengembangan produk.
          </div>
        </div>
      </div>
      <div className="lg:flex lg:gap-10 lg:w-[80%] lg:m-auto">
        <div className="text-right my-16 lg:w-1/2 lg:text-center ">
          <div className="font-bold text-3xl">Improving Communities</div>
          <div class="border-b border-black my-2"></div>
          <div>
            Kami memfasilitasi jaringan dan kolaborasi antara UMKM, baik dengan
            sesama UMKM maupun dengan pihak lain seperti investor, distributor,
            dan pemasok.
          </div>
        </div>
        <div className="text-right my-16 lg:w-1/2 lg:text-center">
          <div className="font-bold text-3xl">Environmentally Conscious</div>
          <div class="border-b border-black my-2"></div>
          <div>
            Kami membantu UMKM untuk mendapatkan akses ke sumber daya yang
            mereka butuhkan, seperti modal usaha, teknologi, infrastruktur dan
            Kami membantu UMKM untuk memasarkan produk dan layanan mereka
            melalui platform online dan offline, serta memberikan dukungan dalam
            hal promosi dan branding.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
