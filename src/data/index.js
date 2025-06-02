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

import loggedInUsers from "../assets/img/userlogin.png";

import Artist1 from "../assets/img/artist/sza_artist.png";

import Pemeran1 from "../assets/img/pemeran/the_nun1.png";
import Pemeran2 from "../assets/img/pemeran/the_nun2.png";
import Pemeran3 from "../assets/img/pemeran/the_nun3.png";
import Hero1 from "../assets/img/hero films/the_nun.png";
import Poster1 from "../assets/img/poster films/the_nun.png";

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

// Carousel News
import MusicNew1 from "../assets/img/thumnail/music/riize.png";
import MusicNew2 from "../assets/img/thumnail/music/cupid.png";
import MusicNew3 from "../assets/img/thumnail/music/killbill.png";

// Carousel News IMG Title
import MusicTitle1 from "../assets/img/thumnail/music/riizetitle.png";
import MusicTitle2 from "../assets/img/thumnail/music/cupidtitle.png";
import MusicTitle3 from "../assets/img/thumnail/music/killbilltitle.png";

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
import Music5 from "../assets/img/musics/music5.png";

// Films Bioskop
import jumbo from "../assets/img/filmbioskop/jumbo.png";
import mendadakdangdut from "../assets/img/filmbioskop/mendadakdangdut.png";
import pengepungan from "../assets/img/filmbioskop/pengepungan.png";


import BrandNew1 from "../assets/img/news/brand1.png";
import TicketFilms from "../components/TicketFilmsComponent";

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

export const carouselMusicItems = [
  {
    id: 1,
    image: MusicNew1,
    title: MusicTitle1,
    description: "R&B Soul    POP   Doo-Woop",
    path: "/musics",
  },
  {
    id: 2,
    image: MusicNew2,
    title: MusicTitle2,
    description: "Bubblegum    POP    Synth-pop",
    path: "/musics",
  },
  {
    id: 3,
    image: MusicNew3,
    title: MusicTitle3,
    description: "R&B Soul    POP   Doo-Woop",
    path: "/musics",
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

export const detailFilms = [
  {
    id: 1,
    title: "The Nun II",
    year: 2022,
    director: "Michael Chaves",
    genre: ["Horror", "Mystery", "Thriller", "Fantasy"],
    description:
      "The Nun 2 berlatar beberapa tahun setelah Suster Irene mengalami teror mengerikan di film pertamanya. Pada 1956 di Perancis, kehidupan Suster Irene mendadak berubah karena Valak kembali datang untuk menerornya. Ternyata selama ini Valak bersembunyi di dalam raga teman Suster Irene, Maurice sebagaimana akhir film pertama.",
    heroImage: Hero1,
    poster: Poster1,
    trailerUrl: "https://www.youtube.com/watch?v=QF-oyCwaArU",
    cast: [
      { name: "Bonnie Aarons", role: "Valak", image: Pemeran1 },
      { name: "Taissa Farmiga", role: "Suster Irene", image: Pemeran2 },
      { name: "Jonas Bloquet", role: "Frenchie", image: Pemeran3 },
    ],
  },
  {
    id: 2,
    title: "Barbie",
    year: 2023,
    director: "Greta Gerwig",
    genre: ["Comedy", "Adventure", "Fantasy"],
    description:
      "Barbie dan Ken memulai petualangan dari Barbieland ke dunia nyata untuk menemukan arti kehidupan dan identitas mereka. Film ini menyentuh tema eksistensial, identitas perempuan, dan budaya populer.",
    heroImage: Hero1,
    poster: Poster1,
    trailerUrl: "https://www.youtube.com/watch?v=pBk4NYhWNMM",
    cast: [
      { name: "Margot Robbie", role: "Barbie", image: Pemeran1 },
      { name: "Ryan Gosling", role: "Ken", image: Pemeran2 },
      { name: "Issa Rae", role: "President Barbie", image: Pemeran3 },
    ],
  },
  {
    id: 3,
    title: "Oppenheimer",
    year: 2023,
    director: "Christopher Nolan",
    genre: ["Biography", "Drama", "History"],
    description:
      "Kisah hidup J. Robert Oppenheimer, fisikawan teoritis yang dikenal sebagai bapak bom atom, dari masa kejayaannya hingga konflik moral dan politik atas senjata yang ia bantu ciptakan.",
    heroImage: Hero1,
    poster: Poster1,
    trailerUrl: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    cast: [
      { name: "Cillian Murphy", role: "J. Robert Oppenheimer", image: Pemeran1 },
      { name: "Emily Blunt", role: "Katherine Oppenheimer", image: Pemeran2 },
      { name: "Robert Downey Jr.", role: "Lewis Strauss", image: Pemeran3 },
    ],
  },
  {
    id: 4,
    title: "One Piece Live Action",
    year: 2023,
    director: "Marc Jobst",
    genre: ["Action", "Adventure", "Fantasy"],
    description:
      "Monkey D. Luffy memulai petualangan epiknya untuk menjadi Raja Bajak Laut bersama kru Topi Jerami. Adaptasi live action dari manga dan anime legendaris karya Eiichiro Oda.",
    heroImage: Hero1,
    poster: Poster1,
    trailerUrl: "https://www.youtube.com/watch?v=l6kp780S-os",
    cast: [
      { name: "Iñaki Godoy", role: "Monkey D. Luffy", image: Pemeran1 },
      { name: "Mackenyu", role: "Roronoa Zoro", image: Pemeran2 },
      { name: "Emily Rudd", role: "Nami", image: Pemeran3 },
    ],
  },
];

export const filmsTerbaru = [
  {
    id: 1,
    image: Poster1,
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
    title: "NCT DREAM TOUR THE DREAM SHOW 4",
    dateLocation: "26-27 September 2025 • Jakarta Internasional Stadium",
    description: "NCT Dream akan gelar konser NCT DREAM TOUR THE DREAM SHOW 4 pada 27&28 September 2025 di Jakarta International Stadium",
    priceRange: "Rp 1.200.000 - Rp. 2.800.000",
    status: "Tiket Tersedia", 
  },
  {
    id: 2,
    image: Films02, // Ganti dengan variabel gambar Anda
    title: "Pesta Bebas Berselancar",
    dateLocation: "15 Juni 2024 • Stadion Pakansari, Cibinong",
    description: "Waktunya BerpestaRia merupakan festival musik tahunan di Cikarang, Bekasi, Bandung yang berisi pertunjukan musik, seni, dan budaya.",
    priceRange: "Tiket Mulai Rp 0", 
    status: "Tiket Habis",
  },
  {
    id: 3,
    image: Films03, // Ganti dengan variabel gambar Anda
    title: "Ruang Indonesia Festival",
    dateLocation: "15,16,17 Agustus 2025 • JIEXPO Kemayoran",
    description: "Ruang Indonesia Festival merupakan Festival dengan berbagai acara seperti Festival Musik, Lomba 17an, Festival Kuliner dalam rangka Kemerdekaan Indonesia yang ke-78.",
    priceRange: "Rp 99.000 - Rp. 500.000",
    status: "Tiket Tersedia",
  },
  {
    id: 4,
    image: Films04, // Ganti dengan variabel gambar Anda
    title: "Far East Music City",
    dateLocation: "17 Mei 2025 • ICE BSD CITY",
    description: "Far East Music City adalah festival musik yang tidak hanya menghadirkan musisi terbaik dari K-pop, Hip-hop, dan EDM, tetapi juga pengalaman imersif yang menggabungkan seni, teknologi, dan budaya dalam satu acara spektakuler. Festival ini siap menjadi destinasi utama bagi para pecinta musik di Asia dan dunia.",
    priceRange: "Rp 1.500.000 - Rp. 2.500.000",
    status: "Tiket Tersedia",
  },
  {
    id: 5,
    image: Films01, // Ganti dengan variabel gambar Anda
    title: "Prambanan Jazz 2025",
    dateLocation: "4, 5, 6 July 2025 • Candi Prambanan, Yogyakarta",
    description: "Prambanan Jazz Festival (PJF) merupakan acara musik internasional tahunan yang diadakan di pelataran Candi Prambanan, Yogyakarta.",
    priceRange: "Rp 400.000 - Rp. 2.300.000",
    status: "Tiket Tersedia",
  }
];

export const musicsTerbaru = [
  {
    id: 1,
    image: Music1,
    title: "Kill Bill",
    artist: "SZA",
    album: "Album SOS",
    artistImage: Artist1,
    year: 2022,
    genre: ["K-Pop", "Dance", "Pop"],
    lyrics: `I'm still a fan even though I was salty
Hate to see you with some other broad, know you happy
Hate to see you happy if I'm not the one driving
I'm so mature, I'm so mature
I'm so mature, I got me a therapist to tell me there's other menI don't want none, I just want youIf I can't have you, no one shouldI might
I might kill my ex, not the best ideaHis new girlfriend's next, how'd I get here?I might kill my ex, I still love him thoughRather be in jail than alone
I get the sense that it's a lost causeI get the sense that you might really love herThe text gon' be evidence, this text is evidenceI tried to ration with you, no murders or crimes of passion, but damn
You was out of reachYou was at the farmer's market with your perfect peachNow I'm in the basement, planning home invasionNow you laying face-down, got me singing over a beat
I'm so mature, I'm so matureI'm so mature, I got me a therapist to tell me there's other menI don't want none, I just want youIf I can't have you, no one will(I might)
I might kill my ex, not the best ideaHis new girlfriend's next, how'd I get here?I might kill my ex, I still love him thoughRather be in jail than alone
I did it all for love (love)I did it all on no drugs (drugs)I did all of this soberI did it all for us, oh
I did it all for love (love)I did it all of this on no drugs (drugs)I did all of this soberDon't you know I did it all for us? (I'll kill your ass tonight)
Uh, I just killed my ex (my ex)Not the best idea (idea)Killed his girlfriend next, how'd I get here?I just killed my ex (my ex)I still love him, though (I do)Rather be in Hell than alone`,
    videoUrl: "https://www.youtube.com/watch?v=VG9AGf66tXM",
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 2,
    image: Music2,
    title: "Seven",
    artist: "Jung Kook feat. Latto",
    artistImage: Artist1,
    album: "Seven - Single",
    year: 2023,
    genre: ["K-Pop", "R&B", "Pop"],
    lyrics: `Weight of the world on your shoulders...
I kiss your waist and ease your mind...`,
    videoUrl: "https://www.youtube.com/watch?v=QU9c0053UAU",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 3,
    image: Music3,
    title: "Ditto",
    artist: "NewJeans",
    artistImage: Artist1,
    album: "OMG",
    year: 2022,
    genre: ["K-Pop", "Electronic", "Alternative"],
    lyrics: `Stay in the middle, like you a little...
Don't want no riddle...`,
    videoUrl: "https://www.youtube.com/watch?v=Km71Rr9K-Bw",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 4,
    image: Music4,
    title: "Hype Boy",
    artist: "NewJeans",
    artistImage: Artist1,
    album: "New Jeans",
    year: 2022,
    genre: ["K-Pop", "Dance Pop"],
    lyrics: `Cause I know what you like boy...
You're my chemical hype boy...`,
    videoUrl: "https://www.youtube.com/watch?v=js1CtxSY38I",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 5,
    image: Music1,
    title: "Kill Bill",
    artist: "SZA",
    album: "Album SOS",
    artistImage: Artist1,
    year: 2022,
    genre: ["K-Pop", "Dance", "Pop"],
    lyrics: `I'm still a fan even though I was salty
Hate to see you with some other broad, know you happy
Hate to see you happy if I'm not the one driving
I'm so mature, I'm so mature
I'm so mature, I got me a therapist to tell me there's other menI don't want none, I just want youIf I can't have you, no one shouldI might
I might kill my ex, not the best ideaHis new girlfriend's next, how'd I get here?I might kill my ex, I still love him thoughRather be in jail than alone
I get the sense that it's a lost causeI get the sense that you might really love herThe text gon' be evidence, this text is evidenceI tried to ration with you, no murders or crimes of passion, but damn
You was out of reachYou was at the farmer's market with your perfect peachNow I'm in the basement, planning home invasionNow you laying face-down, got me singing over a beat
I'm so mature, I'm so matureI'm so mature, I got me a therapist to tell me there's other menI don't want none, I just want youIf I can't have you, no one will(I might)
I might kill my ex, not the best ideaHis new girlfriend's next, how'd I get here?I might kill my ex, I still love him thoughRather be in jail than alone
I did it all for love (love)I did it all on no drugs (drugs)I did all of this soberI did it all for us, oh
I did it all for love (love)I did it all of this on no drugs (drugs)I did all of this soberDon't you know I did it all for us? (I'll kill your ass tonight)
Uh, I just killed my ex (my ex)Not the best idea (idea)Killed his girlfriend next, how'd I get here?I just killed my ex (my ex)I still love him, though (I do)Rather be in Hell than alone`,
    videoUrl: "https://www.youtube.com/watch?v=VG9AGf66tXM",
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 6,
    image: Music2,
    title: "Seven",
    artist: "Jung Kook feat. Latto",
    artistImage: Artist1,
    album: "Seven - Single",
    year: 2023,
    genre: ["K-Pop", "R&B", "Pop"],
    lyrics: `Weight of the world on your shoulders...
I kiss your waist and ease your mind...`,
    videoUrl: "https://www.youtube.com/watch?v=QU9c0053UAU",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 7,
    image: Music3,
    title: "Ditto",
    artist: "NewJeans",
    artistImage: Artist1,
    album: "OMG",
    year: 2022,
    genre: ["K-Pop", "Electronic", "Alternative"],
    lyrics: `Stay in the middle, like you a little...
Don't want no riddle...`,
    videoUrl: "https://www.youtube.com/watch?v=Km71Rr9K-Bw",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 8,
    image: Music4,
    title: "Hype Boy",
    artist: "NewJeans",
    artistImage: Artist1,
    album: "New Jeans",
    year: 2022,
    genre: ["K-Pop", "Dance Pop"],
    lyrics: `Cause I know what you like boy...
You're my chemical hype boy...`,
    videoUrl: "https://www.youtube.com/watch?v=js1CtxSY38I",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 9,
    image: Music1,
    title: "Kill Bill",
    artist: "SZA",
    album: "Album SOS",
    artistImage: Artist1,
    year: 2022,
    genre: ["K-Pop", "Dance", "Pop"],
    lyrics: `I'm still a fan even though I was salty
Hate to see you with some other broad, know you happy
Hate to see you happy if I'm not the one driving
I'm so mature, I'm so mature
I'm so mature, I got me a therapist to tell me there's other menI don't want none, I just want youIf I can't have you, no one shouldI might
I might kill my ex, not the best ideaHis new girlfriend's next, how'd I get here?I might kill my ex, I still love him thoughRather be in jail than alone
I get the sense that it's a lost causeI get the sense that you might really love herThe text gon' be evidence, this text is evidenceI tried to ration with you, no murders or crimes of passion, but damn
You was out of reachYou was at the farmer's market with your perfect peachNow I'm in the basement, planning home invasionNow you laying face-down, got me singing over a beat
I'm so mature, I'm so matureI'm so mature, I got me a therapist to tell me there's other menI don't want none, I just want youIf I can't have you, no one will(I might)
I might kill my ex, not the best ideaHis new girlfriend's next, how'd I get here?I might kill my ex, I still love him thoughRather be in jail than alone
I did it all for love (love)I did it all on no drugs (drugs)I did all of this soberI did it all for us, oh
I did it all for love (love)I did it all of this on no drugs (drugs)I did all of this soberDon't you know I did it all for us? (I'll kill your ass tonight)
Uh, I just killed my ex (my ex)Not the best idea (idea)Killed his girlfriend next, how'd I get here?I just killed my ex (my ex)I still love him, though (I do)Rather be in Hell than alone`,
    videoUrl: "https://www.youtube.com/watch?v=VG9AGf66tXM",
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 10,
    image: Music2,
    title: "Seven",
    artist: "Jung Kook feat. Latto",
    artistImage: Artist1,
    album: "Seven - Single",
    year: 2023,
    genre: ["K-Pop", "R&B", "Pop"],
    lyrics: `Weight of the world on your shoulders...
I kiss your waist and ease your mind...`,
    videoUrl: "https://www.youtube.com/watch?v=QU9c0053UAU",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 11,
    image: Music3,
    title: "Ditto",
    artist: "NewJeans",
    artistImage: Artist1,
    album: "OMG",
    year: 2022,
    genre: ["K-Pop", "Electronic", "Alternative"],
    lyrics: `Stay in the middle, like you a little...
Don't want no riddle...`,
    videoUrl: "https://www.youtube.com/watch?v=Km71Rr9K-Bw",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  },
  {
    id: 12,
    image: Music4,
    title: "Hype Boy",
    artist: "NewJeans",
    artistImage: Artist1,
    album: "New Jeans",
    year: 2022,
    genre: ["K-Pop", "Dance Pop"],
    lyrics: `Cause I know what you like boy...
You're my chemical hype boy...`,
    videoUrl: "https://www.youtube.com/watch?v=js1CtxSY38I",
    videoUrl: 'https://www.youtube.com/watch?v=video_id',
    spotifyUrl: 'https://open.spotify.com/track/example',
    appleMusicUrl: 'https://music.apple.com/us/album/example',
    ytMusicUrl: 'https://music.youtube.com/watch?v=example'
  }
];

// src/data/index.js

export const UlasanPopulerData = [
  {
    id: 1,
    title: "Oppenheimer",
    year: "2023",
    director: "Christopher Nolan",
    image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    reviewer: "Icha",
    avatarColor: "green",
    rating: "8/10",
    text: "Ini mungkin film yang paling dilebih-lebihkan tahun ini. Seperti film biografi Amerika lainnya, film ini mengagungkan subjeknya. Menurut Nolan, Oppenheimer adalah orang terpenting yang pernah",
    likes: "1.1 rb",
    dislikes: "100",
    type: "movie"
  },
  {
    id: 2,
    title: "Barbie",
    year: "2023",
    director: "Greta Gerwig",
    image: Films03,
    reviewer: "Alysya",
    avatarColor: "yellow",
    rating: "7/10",
    text: "Membuat vibe yang sangat kuat soal pentingnya kenal diri sendiri.",
    likes: "1.3 rb",
    dislikes: "100",
    type: "movie"
  },
  {
    id: 3,
    title: "Kill Bill",
    artist: "SZA",
    year: "2022",
    image: Music1,
    reviewer: "Farah",
    avatarColor: "lightgreen",
    rating: "9/10",
    text: "Sebuah Banger Utama untuk Jiwa, \"Kill Bill\" oleh SZA hadir dengan Melodi yang menarik dan Lirik yang Relatable, menciptakan suasana Moody dan",
    likes: "1.1 rb",
    dislikes: "100",
    type: "music"
  },
  {
    id: 4,
    title: "Mangu",
    artist: "Fourtwnty",
    year: "2023",
    image: Music5,
    reviewer: "Indah",
    avatarColor: "pink",
    rating: "10/10",
    text: "Cocok untuk didengarkan saat momen-momen sunyi, saat ingin menenangkan pikiran, atau sekadar menikmati suasana sore yang damai.",
    likes: "1.3 rb",
    dislikes: "100",
    type: "music"
  }
];

export const BioskopFIlms = [
  {
    id: 1,
    image: mendadakdangdut,
    genre: "Musikal",
    title: "Mendadak Dangdut",
    description: "Mendadak Dangdut adalah film drama komedi indonesia tahun 2006 yang disutradarai oleh Rudi Soedjarwo.",
    date: "30",
    month: "Apr",
    year: "2025"

  },
  {
    id: 2,
    image: jumbo,
    genre: "Fantasi",
    title: "Jumbo",
    description: "Jumbo adalah film petualangan dengan genre fantasi animasi Indonesia tahun 2025 yang disutradarai oleh Ryan Adriandhy.",
    date: "31",
    month: "Mar",
    year: "2025"
  },
  // {
  //   id: 3,
  //   image: pengepungan,
  //   genre: "Drama-Thriller",
  //   title: "Pengepungan di Bukit Duri",
  //   description: "Pengepungan di Bukit Duri adalah film cerita seru aksi Indonesia tahun 2025 yang disutradarai oleh Joko Anwar.",
  //   date: "17",
  //   month: "Apr",
  //   year: "2025"
  // }
];

export const ReviewFilms = [
  {
    id: 1,
    title: "The Nun II",
    poster: Poster1,
    text: "Ulasan Penonton",
    genre: ["Horror", "Mystery", "Thriller", "Fantasy"],
    heroimage: Hero1,  
    description: {
      plot: "“Horror menurun, cerita masih cukup solid.”",
      story: "Saya merasa alur film ini mulai terasa basi. Meskipun Conjuring Universe tampaknya sedang membangun sesuatu yang besar, saya merasa elemen horornya kini mulai kehilangan daya tarik. Paparan yang lebih jelas terhadap karakter Nun justru mengurangi kengerian yang sebelumnya terasa lebih menakutkan. Saya rasa, setelah film ini dan film ketiga nanti, waralaba ini mungkin akan memperkenalkan makhluk mengerikan baru untuk ditambahkan ke dalam perpustakaan horor mereka.",
      cinematography: "Saya merasa desain dan penampilan karakter Nun yang merayap di aula gelap dan remang-remang mulai kehilangan daya tariknya. Peningkatan paparan terhadap makhluk ini, menurut saya, justru mengurangi elemen ketakutannya. Saya lebih suka ketika Nun hanya muncul dalam bentuk siluet atau wajah pucat, karena itu terasa jauh lebih menakutkan. Meskipun film ini masih berusaha mempertahankan nuansa horor, saya merasa sinematografinya tidak seefektif yang saya harapkan dalam menciptakan ketegangan.",
      performance: "Hubungan antara karakter Ed dan Lorraine cukup penting dalam film ini, terutama dalam momen ketika Ed hadir untuk melakukan pengusiran setan terhadap Frenchy. Menurut saya, itu adalah momen krusial yang memperkuat hubungan mereka dan memperdalam alur cerita secara keseluruhan. Selain itu, pandangan Irene terhadap Frenchy di akhir film membuat saya yakin bahwa kita akan melihat kelanjutan ceritanya dalam The Nun 3, yang jelas menunjukkan bahwa para pemeran ini akan tetap memiliki peran penting dalam alur cerita yang lebih besar.",
      other: "Saya mengapresiasi usaha film ini dalam membangun cerita yang cukup solid, terutama dalam pengusiran setan terhadap Frenchy. Kreativitas dalam memasukkan elemen-elemen keagamaan, seperti relik yang dijadikan senjata melawan iblis, juga menjadi nilai tambah. Saat pertama kali Annabelle dirilis, saya sangat takut dengan konsep boneka menyeramkan itu. Tapi pada tahun 2023, film ini terasa lebih seperti versi baru dari Chucky yang sudah menjadi bagian dari waralaba besar, sehingga kesan horornya agak berkurang. Secara keseluruhan, meskipun saya masih menikmati beberapa elemen dari film ini, saya merasa sebagian bagian mulai kehilangan daya tarik yang dulu membuatnya begitu menegangkan."
    },
    reviews: 
      {
        username: "Alyssa",
        date: "01-Januari-2023"
      }
    
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

export const loggedInUser = {
  name: "Alysya Arbani",
  username: "alysyaar_",
  email: "alysya.a@example.com",
  gender: "Wanita",
  birthDate: "2000-05-15",
  profilePic: loggedInUsers 
};

export const dropdownLinks = [
  { id: "dd1", path: "/users/profile", text: "Edit Profile" },
  { id: "dd4", path: "/", text: "Logout" },
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
