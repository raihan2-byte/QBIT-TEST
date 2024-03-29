// import Layout from "../components/Layout";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import AB1 from "../../assets/AboutUs1.svg";
import AB2 from "../../assets/AboutUs2.svg";
import AB3 from "../../assets/AboutUs3.svg";
import AB4 from "../../assets/AboutUs4.svg";

export default function AboutUs() {
  return (
    <>
    <Navbar/>
      <div className="text-center ">
        <div className="max-sm:w-[338px] max-sm:h-[190px] max-sm:p-[12px] rounded-md border-[#E4C9EB] border-4 w-[95%] h-full p-[32px] mx-auto my-6 ">
          <div className="max-sm:text-[16px] text-[48px]  text-[#4A335F] font-semibold">
            Kami Hadir Untuk Anda
          </div>
          <div className="max-sm:p-3 max-sm:text-[10px] text-[#525252] p-8 text-[20px]">
          Kami adalah pemberi wadah pengetahuan yang berkomitmen untuk
            mendukung Usaha Mikro, Kecil, dan Menengah (UMKM). Kami percaya
            bahwa UMKM adalah tulang punggung perekonomian yang berkontribusi
            secara signifikan terhadap pertumbuhan ekonomi dan pembangunan
            masyarakat. Melalui platform kami, kami berupaya untuk memberikan
            pemahaman yang lebih dalam tentang UMKM
          </div>
        </div>
      </div>

      {/* Pelayanan */}
      <div className="text-center">
        <div className="max-sm:text-[16px] max-sm:m-2 text-[48px] text-[#4A335F] font-semibold">
          Kepuasan Anda Terjamin
        </div>
        <div className=" max-sm:hidden text-[#525252] px-32 pt-4 text-xl ">
        Memberikan layanan dan pendampingan yang berkualitas untuk meningkatkan kualitas bisnis UMKM
        </div>
      </div>

      {/* ALL GRID */}
      <div className="max-sm:grid-cols-1 max-sm:m-2  text-center  grid grid-cols-2 gap-4 m-16 place-items-center">
        {/* Box Grid 1 */}
        <div className="max-sm:w-[338px] max-sm:h-[134px] max-sm:p-[10px] rounded-xl border-[#E4C9EB] border-4  w-full h-full text-center p-[32px]">
          <div className="flex flex-row items-center">
            <img src={AB1} alt="" className="max-sm:w-[40px] max-sm:h-[40px]" />
            <div className="max-sm:text-[12px] text-2xl text-[#4A335F] font-bold  pl-2">
            Pendampingan Berkelanjutan
            </div>
          </div>
          <div className="max-sm:text-[9px] text-[#525252] text-xl text-left justify-center pt-2 ">
          Kami tidak hanya memberikan layanan, tetapi juga mendampingi UMKM dalam setiap langkah perkembangan bisnis mereka.
          </div>
        </div>

        {/* Box Grid 2 */}
        <div className="max-sm:w-[338px] max-sm:h-[134px] max-sm:p-[10px] max-sm:mr-0 rounded-xl border-[#E4C9EB] border-4 mr-4 w-full h-full text-center p-[32px] ">
          <div className="flex flex-row items-center">
            <div className="bg-[#E4C9EB] max-sm:h-[40px] max-sm:w-[40px] h-[88px] w-[88px] flex items-center justify-center rounded-[8px]">
              <img
                src={AB1}
                alt=""
                className="max-sm:w-20px] max-sm:h-[24px]"
              />
            </div>
            <div className="max-sm:text-[12px] text-2xl text-[#4A335F] font-bold  pl-2">
            Kualitas Terbaik
            </div>
          </div>
          <div className="max-sm:text-[9px] text-[#525252] text-xl text-left justify-center pt-2 ">
          Kami berkomitmen untuk memberikan layanan terbaik dengan standar kualitas yang tinggi
          </div>
        </div>
        {/* Box Grid 3 */}
        <div className="max-sm:w-[338px] max-sm:h-[134px] max-sm:p-[10px]  rounded-xl border-[#E4C9EB] border-4 w-full h-full text-center p-[32px]">
          <div className="flex flex-row items-center ">
          <div className="bg-[#E4C9EB] max-sm:h-[40px] max-sm:w-[40px] h-[88px] w-[88px] flex items-center justify-center rounded-[8px]">
              <img
                src={AB2}
                alt=""
                className="max-sm:w-20px] max-sm:h-[24px]"
              />
            </div>
            <div className="max-sm:text-[12px] text-2xl text-[#4A335F] font-bold  pl-2">
              Inovasi
            </div>
          </div>
          <div className="max-sm:text-[9px] text-[#525252] text-xl text-left justify-center pt-2">
          Kami selalu mencari solusi inovatif untuk membantu UMKM mengatasi tantangan bisnis.
          </div>
        </div>
        {/* Box Grid 4 */}
        <div className=" max-sm:w-[338px] max-sm:h-[134px] max-sm:p-[10px] max-sm:mr-0 rounded-xl border-[#E4C9EB] border-4 mr-4 w-full h-full text-center p-[32px]">
          <div className="flex flex-row items-center">
          <div className="bg-[#E4C9EB] max-sm:h-[40px] max-sm:w-[40px] h-[88px] w-[88px] flex items-center justify-center rounded-[8px]">
              <img
                src={AB2}
                alt=""
                className="max-sm:w-20px] max-sm:h-[24px]"
              />
            </div>

            <div className="max-sm:text-[12px] text-2xl text-[#4A335F] font-bold  pl-2">
              Kemitraan
            </div>
          </div>
          <div className="max-sm:text-[9px] text-[#525252] text-xl text-left justify-center pt-2">
          Kami percaya bahwa kerjasama yang baik adalah kunci kesuksesan bersama.
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}