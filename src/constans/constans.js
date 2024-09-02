import myImage from '../assets/images/home_laundry.jpg';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export const benefits = [
    { text: "Rebahan dengan nyaman dan cucian aman bersama kami" },
    { text: "Pakaian hilang? ELaund garansi ganti baru cuy" },
    { text: "24/7 Customer Service untuk kamu yang jomblo dan lagi gabut" },
    { text: "Ga pake lama, sat-set seperti ninja" },
];

export const features = [
    {
        title: "Put & Take",
        description: "Lagi males dan pingin rebahan? Tapi cucian menggunung di rumah. Haishh, kamu hanya perlu letakkan cucian di rumah dan cukup klik sekali untuk menikmati layanan antar-jemput ELaund.",
        img: myImage,
        alignment: "text-left",
        order: "order-first",
        listClass: "rounded-l-10xl md:rounded-l-full ml-6 md:ml-32 items-start md:items-center",
    },
    {
        title: "Easy Pay",
        description: "Bayar pakai tunai? Transfer? QRIS? Atau bayar nanti aja? Ya bisa semua, Lah. ELaund meyediakan berbagai metode pembayaran yang sangat lengkap.",
        img: myImage,
        alignment: "text-right",
        order: "order-last",
        listClass: "rounded-r-10xl md:rounded-r-full mr-6 md:mr-32 items-end md:items-center",
    },
    {
        title: "Track Your Order",
        description: "Kamu ga perlu kawatir baju ilang, karena transparasi ELaund hanya setipis tisu dengan adanya fitur Tracking Order. Jadi cucianmu aman bersama kami, dan tentunya bersih dan wangi.",
        img: myImage,
        alignment: "text-left",
        order: "order-first",
        listClass: "rounded-l-10xl md:rounded-l-full ml-6 md:ml-32 items-start md:items-center",
    }
];

export const footer_first_col = [
    {
        name: "Career",
        link: "",
    },
    {
        name: "Contact",
        link: "",
    },
    {
        name: "Privacy",
        link: "",
    },
];
export const footer_first_sec_col = [
    {
        name: "Facebook",
        link: "",
        icon: FaFacebookSquare
    },
    {
        name: "Instagram",
        link: "",
        icon: FaInstagram 
    },
    {
        name: "Linkedin",
        link: "",
        icon: FaLinkedinIn
    },
];

export const footer_second_col = [
    {
        name: "Home",
        link: "",
    },
    {
        name: "Feature",
        link: "",
    },
    {
        name: "Benefit",
        link: "",
    },
    {
        name: "Testimonials",
        link: "",
    },
    {
        name: "Contact",
        link: "",
    },
];

export const footer_third_col = [
    {
        name: "description",
        field: "Institut Teknologi Sepuluh Nopember, Jl. Raya ITS, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60111"
    },
    {
        name: "Email",
        field: "elaund.comp@gmail.com"
    },
    {
        name: "Contact",
        field: "(0343) 675 456"
    },
];
