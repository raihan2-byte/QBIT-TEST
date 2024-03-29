import React from "react";
import OurService from "../../assets/OurService.jpg";
import TeamManagementIcons from "../../assets/TeamManagement.svg";

const Service = () => {
  return (
    <div className="lg:w-[85%] lg:m-auto">
      <div className="w-full flex justify-center lg:w-1/2 lg:m-auto">
        <img src={OurService} alt="" />
      </div>
      <div className="font-bold text-3xl text-center lg:mt-10 lg:text-5xl">
        Our Services
      </div>
      <div class="border-2 border-black my-2"></div>
      <div className="text-justify lg:text-center lg:w-3/4 lg:m-auto">
        Mendorong pertumbuhan dan keberlanjutan UMKM dengan memberikan akses
        kepada mereka terhadap pengetahuan, keterampilan, dan sumber daya yang
        diperlukan serta Membuat platform yang memungkinkan pemilik UMKM untuk
        terhubung, belajar, dan saling mendukung satu sama lain
      </div>
      
      <div className="text-right my-16 lg:w-1/2 lg:ml-auto">
        <div className="font-bold text-3xl">Wadah Pengetahuan</div>
        <div class="border-b border-black my-2"></div>
        <div>
          Memberikan wadah pengetahuan yang komprehensif tentang UMKM, termasuk
          panduan praktis, informasi terkini, dan sumber daya yang dibutuhkan.
        </div>
      </div>
      <div className="text-right my-16 lg:text-left lg:w-1/2">
        <div className="font-bold text-3xl">Peningkatan Kapasitas</div>
        <div class="border-b border-black my-2"></div>
        <div>
          Mengadakan lokakarya, sesi pelatihan, dan webinar untuk memberdayakan
          pemilik UMKM dengan keterampilan dan pengetahuan untuk meningkatkan
          bisnis mereka
        </div>
      </div>
      <div className="text-right my-16 lg:w-1/2 lg:ml-auto">
        <div className="font-bold text-3xl">Mentorship dan Pembinaan</div>
        <div class="border-b border-black my-2"></div>
        <div>
          Menawarkan bimbingan dan dukungan personal dari mentor berpengalaman
          untuk membantu UMKM mengatasi tantangan dan mencapai tujuan mereka.
        </div>
      </div>
      <div className="text-right my-16 lg:text-left lg:w-1/2">
        <div className="font-bold text-3xl">Peluang Jaringan</div>
        <div class="border-b border-black my-2"></div>
        <div>
          Memfasilitasi hubungan dan kolaborasi antara UMKM, pakar industri, dan
          pemangku kepentingan lainnya untuk mempromosikan pembelajaran dan
          pertumbuhan.
        </div>
      </div>
    </div>
  );
};

export default Service;
