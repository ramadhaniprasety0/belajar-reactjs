import KelasImage1 from "../assets/img/kelas/kelas-1.jpg";
import KelasImage2 from "../assets/img/kelas/kelas-2.jpg";
import KelasImage3 from "../assets/img/kelas/kelas-3.jpg";
import KelasImage4 from "../assets/img/kelas/kelas-4.jpg";
import KelasImage5 from "../assets/img/kelas/kelas-5.jpg";
import KelasImage6 from "../assets/img/kelas/kelas-6.jpg";
import KelasImage7 from "../assets/img/kelas/kelas-7.jpg";
import KelasImage8 from "../assets/img/kelas/kelas-8.jpg";
import KelasImage9 from "../assets/img/kelas/kelas-9.jpg";

import People1 from "../assets/img/testimonial/people-1.jpg";
import People2 from "../assets/img/testimonial/people-2.jpg";
import People3 from "../assets/img/testimonial/people-3.jpg";

// Carousel News
import FilmsNew1 from "../assets/img/thumnail/films/wakanda.jpg";
import FilmsNew2 from "../assets/img/thumnail/films/breakingbad.jpg";
import FilmsNew3 from "../assets/img/thumnail/films/theboys.jpg";
import FilmsNew4 from "../assets/img/thumnail/films/drive.jpg";


// Carousel News IMG Title
import FilmsImgTitle1 from "../assets/img/thumnail/films/wakandatitle.png";
import FilmsImgTitle2 from "../assets/img/thumnail/films/breakingbadtitle.png";
import FilmsImgTitle3 from "../assets/img/thumnail/films/theboystitle.png";
import FilmsImgTitle4 from "../assets/img/thumnail/films/drivetitle.png";


//Films Thumnail
import Films01 from "../assets/img/films/films1.svg";
import Films02 from "../assets/img/films/films2.svg";
import Films03 from "../assets/img/films/films3.svg";
import Films04 from "../assets/img/films/films4.svg";

//Music Tumnail
import Music01 from "../assets/img/thumnail/music/musicthumnail1.png";
import Music02 from "../assets/img/thumnail/music/musicthumnail2.png";
import Music03 from "../assets/img/thumnail/music/musicthumnail3.png";
import Music04 from "../assets/img/thumnail/music/musicthumnail4.png";
import Music05 from "../assets/img/thumnail/music/musicthumnail5.png";

//Music populer
import Music1 from "../assets/img/musics/music4.png";
import Music2 from "../assets/img/musics/music3.png";
import Music3 from "../assets/img/musics/music2.png";
import Music4 from "../assets/img/musics/music1.png";

import BrandNew1 from "../assets/img/news/brand1.png";

export const carouselItems = [
  {
    id: 1,
    image: FilmsNew1,
    title: FilmsImgTitle1,
    description: "Action & Adventure | 2022",
    path: "/films",
  },
  {
    id: 2,
    image: FilmsNew2,
    title: FilmsImgTitle2,
    description: "Action & Adventure | 2022",
    path: "/films",
  },
  {
    id: 3,
    image: FilmsNew3,
    title: FilmsImgTitle3,
    description: "Action & Adventure | 2022",
    path: "/films",
  },
  {
    id: 4,
    image: FilmsNew4,
    title: FilmsImgTitle4,
    description: "Action & Adventure | 2022",
    path: "/films",
  },
];

export const musickHits = [
  {
    id: 1,
    image: Music01,
    title: "Hot Hits Indonesia",
    desc: "Hits terpanas dari Idgitaf, Olivia Rodrigo…",
  },
  {
    id: 2,
    image: Music02,
    title: "Puncak Klasman",
    desc: "Deretan musik Indonesia terpopuler saat ini.…",
  },
  {
    id: 3,
    image: Music03,
    title: "Sedang Viral",
    desc: "Kumpulan lagu yang sedang menyebar luas.…",
  },
  {
    id: 4,
    image: Music04,
    title: "Hits Banget",
    desc: "Kumpulan lagu Hits hingga beberapa tahun…",
    icon: "fas fa-play icon",
    path: "/Musics", 
  },
  {
    id: 5,
    image: Music05,
    title: "Today's Top Hits",
    desc: "Jung Kook is on top of the Hottest 50!",
  },
];

export const hotsNews = [
  {
    id: 1,
    image: KelasImage1,
    brandnews: BrandNew1,
    title: "Perdana ke Jakarta, RIIZE Tak Sabar Tampil di Konser SMTOWN: Kita Gugup Banget",
    desc: "Boyband RIIZE menyapa fans Indonesia menjelang kunjungan perdananya ke Tanah Air. Sungchan cs ini rencananya bakal perform di konser SMTOWN.Kita punya kabar gembira buat kalian semua, kata Sungchan Read more",
    time: "2 jam yang lalu",
  },
  {
    id: 2,
    image: KelasImage2,
    brandnews: BrandNew1,
    title: "Perdana ke Jakarta, RIIZE Tak Sabar Tampil di Konser SMTOWN: Kita Gugup Banget",
    desc: "Boyband RIIZE menyapa fans Indonesia menjelang kunjungan perdananya ke Tanah Air. Sungchan cs ini rencananya bakal perform di konser SMTOWN.Kita punya kabar gembira buat kalian semua, kata Sungchan Read more",
    time: "5 jam yang lalu",
  },
];

export const filmsTerbaru = [
  {
    id: 1,
    image: Films01,
    title: "One Piece",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.",
  },
  {
    id: 2,
    image: Films02,
    title: "Everything Everywhere All at Once",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.",
  },
  {
    id: 3,
    image: Films03,
    title: "Barbie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.",
  },
  {
    id: 4,
    image: Films04,
    title: "Oppenheimer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.",
  }
]

export const konserTerbaru = [
  {
    id: 1,
    image: Films01,
    title: "One Piece",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.",
  },
  {
    id: 2,
    image: Films02,
    title: "Everything Everywhere All at Once",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.",
  },
  {
    id: 3,
    image: Films03,
    title: "Barbie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.",
  },
  {
    id: 4,
    image: Films04,
    title: "Oppenheimer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.",
  }
]

export const musicsTerbaru = [
  {
    id: 1,
    image: Music1,
    title: "Cupid",
    artist: "Fifty Fifty"
  },
  {
    id: 2,
    image: Music2,
    title: "Seven",
    artist: "Jung Kook feat. Latto"
  },
  {
    id: 3,
    image: Music3,
    title: "Ditto",
    artist: "NewJeans"
  },
  {
    id: 4,
    image: Music4,
    title: "Hype Boy",
    artist: "NewJeans"
  }
];

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "Films",
    text: "Films",
  },
  {
    id: 3,
    path: "Musics",
    text: "Musics",
  },
];

export const semuaKelas = [
  {
    id: 1,
    image: KelasImage1,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Character Illustration with Adobe Illustrator",
    price: "Rp. 300.000",
    buy: "Beli Kelas",
    delay: "1300",
  },
  {
    id: 2,
    image: KelasImage2,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "UI UX Website Design for Beginner with Figma",
    price: "Rp. 340.000",
    buy: "Beli Kelas",
    delay: "1600",
  },
  {
    id: 3,
    image: KelasImage3,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Web Developer Bootstrap 5",
    price: "Rp. 280.000",
    buy: "Beli Kelas",
    delay: "1900",
  },
  {
    id: 4,
    image: KelasImage4,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Logo with Adobe Illustrator",
    price: "Rp. 420.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 5,
    image: KelasImage5,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "3D Modelling for Beginner with 3D Blender",
    price: "Rp. 380.000",
    buy: "Beli Kelas",
    delay: "300",
  },
  {
    id: 6,
    image: KelasImage6,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Icon Design with Adobe Illustrator",
    price: "Rp. 300.000",
    buy: "Beli Kelas",
    delay: "600",
  },
  {
    id: 7,
    image: KelasImage7,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Design Vektor with Corel Draw CC for Beginner",
    price: "Rp. 340.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 8,
    image: KelasImage8,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "UI UX Design with Adobe XD for Beginner",
    price: "Rp. 400.000",
    buy: "Beli Kelas",
    delay: "300",
  },
  {
    id: 9,
    image: KelasImage9,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Mastering Mobile Developer with Flutter",
    price: "Rp. 320.000",
    buy: "Beli Kelas",
    delay: "600",
  },
];

export const kelasTerbaru = [
  {
    id: 1,
    image: KelasImage1,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Character Illustration with Adobe Illustrator",
    price: "Rp. 300.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 2,
    image: KelasImage2,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "UI UX Website Design for Beginner with Figma",
    price: "Rp. 340.000",
    buy: "Beli Kelas",
    delay: "200",
  },
  {
    id: 3,
    image: KelasImage3,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Web Developer Bootstrap 5",
    price: "Rp. 280.000",
    buy: "Beli Kelas",
    delay: "400",
  },
  {
    id: 4,
    image: KelasImage4,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Logo with Adobe Illustrator",
    price: "Rp. 420.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 5,
    image: KelasImage5,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "3D Modelling for Beginner with 3D Blender",
    price: "Rp. 380.000",
    buy: "Beli Kelas",
    delay: "200",
  },
  {
    id: 6,
    image: KelasImage6,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Icon Design with Adobe Illustrator",
    price: "Rp. 300.000",
    buy: "Beli Kelas",
    delay: "400",
  },
];

export const testimonial = [
  {
    id: 1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 1",
    skill: "UI UX Designer",
  },
  {
    id: 2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 2",
    skill: "Flutter Developer",
  },
  {
    id: 3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 3",
    skill: "Web Developer",
  },
  {
    id: 4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 4",
    skill: "UI UX Designer",
  },
  {
    id: 5,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 5",
    skill: "Flutter Developer",
  },
  {
    id: 6,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 6",
    skill: "Web Developer",
  },
  {
    id: 7,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 7",
    skill: "UI UX Designer",
  },
  {
    id: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 8",
    skill: "Flutter Developer",
  },
  {
    id: 9,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 9",
    skill: "Web Developer",
  },
];

export const dataSwiper = [
  {
    id: 1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 1",
    skill: "UI UX Designer",
  },
  {
    id: 2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 2",
    skill: "Flutter Developer",
  },
  {
    id: 3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 3",
    skill: "Web Developer",
  },
  {
    id: 4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 4",
    skill: "UI UX Designer",
  },
  {
    id: 5,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 5",
    skill: "Flutter Developer",
  },
  {
    id: 6,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 6",
    skill: "Web Developer",
  },
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Apakah ini Berlangganan?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Bagaimana Sistem Belajarnya?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Apakah Boleh di Share ke Orang Lain?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Apakah Ada Grup Diskusi?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Apakah dapat di Akses Selamanya?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Apakah ada Mentornya?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 7,
    eventKey: 6,
    title: "Apakah Saya Boleh Mendownload Videonya?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 8,
    eventKey: 7,
    title: "Apakah boleh ganti Kelas ketika sudah Membeli?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
];
