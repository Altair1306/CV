import foto from "./image/myphoto.jpeg";
import "./image/myphoto.css";
import RiwayatPekerjaan from "./component/riwayatPekerjaan";
import RiwayatPendidikan from "./component/riwayatPendidikan";
import FavColor from "./component/favcolor";
import ContactForm from "./component/ContactForm";


function Profile (){
  return <img src={foto.src} alt="Ibnu Profile" className="myphoto"/>;
}

export default function Gallery() {
  return(
    <section>
      <div className = "container mx-auto p-2 text-center">
      <h1 className="text-black font-bold">CV ONLINE</h1>
      <h1 className="text-3xl"> Muhammad Ibnu</h1>
      <Profile />
       {/* Pekerjaan */}
       <h2 className="text-2xl font-semibold text-gray-600 mt-2">
          Mahasiswa
        </h2>

        {/* Deskripsi Singkat */}
        <p className="text-gray-500 max-w-lg mx-auto mt-4">
          Saya adalah seorang mahasiswa yang sedang belajar dalam membangun aplikasi web
          dan mobile. Saya selalu berusaha memberikan solusi terbaik untuk
          tugas yang diberikan.
        </p>
        

        <RiwayatPendidikan/>
        <br /><br />
        <RiwayatPekerjaan/>

        {/* <FavColor/> */}

        <ContactForm/>
      </div>
    </section>
  )
}