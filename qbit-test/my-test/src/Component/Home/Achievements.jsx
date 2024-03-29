import React from "react";
import AchievementsImage from "../../assets/Achievement.jpg"

const Achievements = () => {
  return (
    <div className="bg-sky-500 ">
      <div className="font-bold text-3xl my-4 text-center">Achievement</div>
      <div class="border-2 border-black my-2"></div>
      <div className="flex justify-center">
        <img
          src={AchievementsImage}
          alt=""
        />
      </div>
      <div className="text-center my-16 ">
        <div className="font-bold text-3xl my-4 ">
          {" "}
          Peningkatan Pengetahuan dan Keterampilan{" "}
        </div>
        <div class="border-b border-black my-2 lg:w-[60%] lg:m-auto"></div>
        <div className="lg:w-1/2 lg:m-auto">
          Ribuan UMKM telah mengikuti kursus dan pelatihan yang kami sediakan,
          yang telah meningkatkan pengetahuan dan keterampilan mereka dalam
          mengelola bisnis.
        </div>
      </div>
      <div className="text-center my-16 ">
        <div className="font-bold text-3xl my-4">Jaringan dan Kolaborasi</div>
        <div class="border-b border-black my-2 lg:w-[60%] lg:m-auto"></div>
        <div className="lg:w-1/2 lg:m-auto">
          Kami telah berhasil memfasilitasi berbagai kolaborasi dan kemitraan
          antara UMKM, yang membuka peluang baru untuk pertumbuhan dan
          pengembangan bisnis.
        </div>
      </div>
      <div className="text-center my-16 ">
        <div className="font-bold text-3xl my-4">Peningkatan Omset Penjualan</div>
        <div class="border-b border-black my-2 lg:w-[60%] lg:m-auto"></div>
        <div className="lg:w-1/2 lg:m-auto">
          Banyak UMKM yang telah menggunakan layanan pemasaran dan promosi kami,
          yang telah membantu meningkatkan omset penjualan mereka secara
          signifikan
        </div>
      </div>
      <div className="text-center my-16 ">
        <div className="font-bold text-3xl my-4">Pemberdayaan Komunitas UMKM</div>
        <div class="border-b border-black my-2 lg:w-[60%] lg:m-auto"></div>
        <div className="lg:w-1/2 lg:m-auto ">
          Melalui program-program kami, kami telah berhasil memberdayakan
          komunitas UMKM untuk mandiri dan berkembang secara berkelanjutan.
        </div>
      </div>
    </div>
  );
};

export default Achievements;
