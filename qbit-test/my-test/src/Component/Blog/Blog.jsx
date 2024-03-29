import React from 'react'
import CardBlog from './CardBlog'
import { FaStore } from "react-icons/fa";


const Blog = () => {
    const BlogData = [
        {
            Title : "Mendukung Pertumbuhan UMKM: Pilar Kesejahteraan Ekonomi Lokal",
            Description : "Usaha Mikro, Kecil, dan Menengah (UMKM) telah lama menjadi tulang punggung ekonomi di banyak negara, termasuk Indonesia. Mereka tidak hanya menciptakan lapangan kerja dan berkontribusi pada pertumbuhan ekonomi, tetapi juga menjaga keberagaman budaya dan tradisi lokal. Namun, UMKM sering menghadapi berbagai tantangan, mulai dari akses terbatas terhadap modal hingga kurangnya pengetahuan tentang pemasaran dan manajemen bisnis yang efektif",
            CreatedAt : "28 Maret 2024",
            Image : FaStore
        },
        {
            Title : "platform yang berperan penting dalam mendukung pertumbuhan UMKM",
            Description : "Salah satu platform yang berperan penting dalam mendukung pertumbuhan UMKM adalah Green Welfare Indonesia. Sebagai platform yang berkomitmen untuk memberdayakan UMKM, Green Welfare Indonesia menyediakan berbagai layanan dan program yang dirancang untuk membantu UMKM mencapai potensi penuh mereka. Dengan fokus pada pendidikan, pelatihan, dan pemasaran, Green Welfare Indonesia bertujuan untuk memperkuat UMKM lokal, meningkatkan kesejahteraan ekonomi mereka, dan memperkuat komunitas bisnis lokal",
            CreatedAt : "28 April 2024"
        },
        {
            Title : "kolaborasi dengan berbagai pihak",
            Description : "Melalui kolaborasi dengan berbagai pihak, termasuk pemerintah, lembaga non-profit, dan perusahaan swasta, Green Welfare Indonesia terus berupaya untuk menciptakan lingkungan yang kondusif bagi pertumbuhan UMKM. Dengan memanfaatkan teknologi dan inovasi, Green Welfare Indonesia membantu UMKM beradaptasi dengan perubahan pasar dan memperluas jangkauan bisnis mereka",
            CreatedAt : "28 Mei 2024"
        },
        {
            Title : "Membangkitkan Semangat UMKM: Green Welfare Indonesia Berperan Aktif",
            Description : "Green Welfare Indonesia adalah teman setia bagi para pelaku UMKM di Indonesia. Dengan komitmen yang kuat, kami hadir untuk memberikan wadah yang menyediakan berbagai layanan pendukung bagi UMKM. Kami percaya bahwa UMKM adalah tulang punggung ekonomi yang perlu diperhatikan. Melalui program-program kami, kami bertujuan untuk memberikan pelatihan, bimbingan, dan akses pasar yang lebih luas bagi UMKM. Kami ingin melihat UMKM tumbuh dan berkembang menjadi lebih baik, sehingga mampu bersaing di pasar yang semakin kompetitif",
            CreatedAt : "28 Juni 2024"
        }

    ]
  return (
    <div>
        {BlogData.map((item, index) =>{
            return (
                <CardBlog
                Title={item.Title}
                Description={item.Description}
                CreatedAt={item.CreatedAt}
                />
            )
        })}
    </div>
  )
}

export default Blog