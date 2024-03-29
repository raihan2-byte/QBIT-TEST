import InstagramIcon from "../assets/Instagram.svg";
import YoutubeIcon from "../assets/Youtube.svg";
import LinkedinIcon from "../assets/Linkedin.svg";
// import asean_youth_logo from "../../assets/asean-youth.svg";
// import gwf_logo from "../../assets/gwf.png";

export default function Footer() {
  return (
    <section className="mt-12 bg-black text-white">
      <div className="flex items-center justify-center py-4">
        <div className="text-center flex justify-center flex-col items-center">
          <h5 className="text-2xl font-bold text-primary-2 font-inter">
            UMKM QBIT
          </h5>
          <p className="my-3 text-sm font-medium text-primary-2">
            PT Vanz Inovatif Teknologi
          </p>
          <p className="mb-3 text-sm font-medium text-primary-2">
          Ruko Sentra Niaga Green Lake L7 Jl. Green Lake City Boulevard Cengkareng, DKI Jakarta 11750
          </p>
          <p className="my-3 text-sm font-medium text-primary-2">
          contactus@qbit.co.id
          </p>
          <div className="flex gap-4">
            <a
              href="/www.linkedin.com"
              className="cursor-pointer"
            >
              <img src={LinkedinIcon} alt="" className="w-7" />
            </a>
            <a
              href="/www.youtube.com"
              className="cursor-pointer"
            >
              <img src={YoutubeIcon} alt="" className="w-7" />
            </a>
            <a
              href="/www.instagram.com"
              className="cursor-pointer"
            >
              <img src={InstagramIcon} alt="" className="w-7" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h5 className="mr-4 text-lg font-bold text-primary-2 font-inter">
          Supported By
        </h5>
      </div>
      <div className="py-2 text-xs text-center bg-primary-1 font-inter text-light-1">
        ©2024 by Goto
      </div>
    </section>
  );
}
