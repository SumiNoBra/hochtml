const focusDataArray = [
  {
    id: "one-piece-thuyet-minh",
    ImgUrl: "./assents/thousand-sunny-one-piece.jpg",
    content1: "Đang phát sóng",
    content2: "Top 1",
    overrate: 9.9,
    info: "Đạo diễn: Eiichiro Oda",
    title: "One Piece [Thuyết Minh]",
    description:
      "One Piece (Đảo Hải Tặc) - Monkey D. Luffy và hành trình khám phá bí mật của kho báu One Piece, trở thành Vua Hải Tặc.",
    genre: "Anime, Phiêu lưu, Hài hước",
    duration: "Đang cập nhật",
    rating: "9.9/10",
  },
  {
    id: "spirited-away",
    ImgUrl: "./assents/SpiritedAway.avif",
    content1: "Mới cập nhật",
    content2: "Top 2",
    overrate: 9.5,
    info: "Đạo diễn: Hayao Miyazaki",
    title: "Spirited Away",
    description:
      "Spirited Away - Câu chuyện về cô bé Chihiro lạc vào thế giới linh hồn và hành trình tìm đường trở về.",
    genre: "Anime, Kỳ ảo, Phiêu lưu",
    duration: "125 phút",
    rating: "9.5/10",
  },
  {
    id: "your-name-carousel",
    ImgUrl: "./assents/yourname.png",
    content1: "Hot nhất tuần",
    content2: "Top 3",
    overrate: 9.2,
    info: "Đạo diễn: Makoto Shinkai",
    title: "Your Name",
    description:
      "Your Name - Một câu chuyện tình yêu kỳ diệu giữa hai người xa lạ kết nối qua giấc mơ.",
    genre: "Anime, Tình cảm, Kỳ ảo",
    duration: "107 phút",
    rating: "9.2/10",
  },
];

const anime = [
  {
    id: "solo-leveling",
    name: "Solo Leveling",
    img: "./assents/sololv.jpeg",
    episodes: "Season 1: 12 tập, Season 2 đang chiếu",
    description:
      "Một thợ săn yếu ớt vươn lên đỉnh cao sau khi nhận được sức mạnh đặc biệt.",
    genre: "Anime, Hành động, Kỳ ảo",
    duration: "24 phút/tập",
    rating: "8.7/10",
  },
  {
    id: "naruto",
    name: "Naruto",
    img: "./assents/naruto.jpg",
    episodes: "Naruto: 220 tập, Shippuden: 500 tập, Boruto: đang chiếu",
    description:
      "Hành trình trở thành Hokage của cậu bé ninja mang trong mình Cửu Vĩ.",
    genre: "Anime, Phiêu lưu, Hành động",
    duration: "23 phút/tập",
    rating: "8.3/10",
  },
  {
    id: "dragon-ball",
    name: "Dragon Ball",
    img: "./assents/dragonball.png",
    episodes:
      "Dragon Ball: 153 tập, Z: 291, GT: 64, Super: 131, Daima: sắp chiếu",
    description: "Cuộc phiêu lưu bất tận của Songoku và những người bạn.",
    genre: "Anime, Hành động, Khoa học viễn tưởng",
    duration: "25 phút/tập",
    rating: "8.6/10",
  },
  {
    id: "doraemon",
    name: "Doraemon",
    img: "./assents/doremon.jpg",
    episodes: "Hơn 2000 tập (đang phát sóng)",
    description:
      "Chú mèo máy từ tương lai giúp Nobita vượt qua khó khăn trong cuộc sống.",
    genre: "Anime, Hài hước, Gia đình",
    duration: "10 phút/tập",
    rating: "8.0/10",
  },
  {
    id: "pokemon",
    name: "Pokemon",
    img: "./assents/pokemon.jpg",
    episodes: "Hơn 1200 tập (nhiều season + movie)",
    description:
      "Hành trình chinh phục các vùng đất và trở thành nhà huấn luyện Pokémon vĩ đại.",
    genre: "Anime, Phiêu lưu, Trẻ em",
    duration: "22 phút/tập",
    rating: "7.8/10",
  },
];

const thethao = [
  {
    id: "haikyuu",
    name: "Haikyuu",
    img: "./assents/haikyuu.png",
    episodes: "Mùa 1: 25, Mùa 2: 25, Mùa 3: 10, Mùa 4: 25, Movie: đang ra rạp",
    description:
      "Haikyuu theo chân Hinata Shoyo chinh phục đam mê bóng chuyền dù có chiều cao khiêm tốn.",
    genre: "Anime, Thể thao, Hài hước",
    duration: "24 phút/tập",
    rating: "9.0/10",
  },
  {
    id: "bluelock",
    name: "Bluelock",
    img: "./assents/bluelock.jpeg",
    episodes: "Mùa 1: 24 tập, Movie: Episode Nagi (2024), Mùa 2: đang chiếu",
    description:
      "Bluelock là dự án tìm kiếm tiền đạo xuất sắc nhất Nhật Bản thông qua hệ thống đào tạo khắc nghiệt.",
    genre: "Anime, Thể thao",
    duration: "24 phút/tập",
    rating: "8.5/10",
  },
  {
    id: "attack-on-titan",
    name: "Attack on Titan",
    img: "./assents/aot.jpg",
    episodes: "4 mùa, 87 tập + special cuối (đã kết thúc)",
    description:
      "Cuộc chiến sinh tồn giữa nhân loại và những Titan khổng lồ phá huỷ thế giới.",
    genre: "Anime, Hành động, Kỳ ảo",
    duration: "24 phút/tập",
    rating: "9.1/10",
  },
  {
    id: "one-piece",
    name: "One Piece",
    img: "./assents/onepiece.jpe",
    episodes: "Hơn 1100 tập, nhiều movie",
    description:
      "Monkey D. Luffy và băng Mũ Rơm phiêu lưu tìm kiếm kho báu One Piece huyền thoại.",
    genre: "Anime, Phiêu lưu, Hài hước",
    duration: "24 phút/tập",
    rating: "9.0/10",
  },
  {
    id: "jujutsu-kaisen",
    name: "Jujutsu Kaisen",
    img: "./assents/jujutsukaisen.png",
    episodes: "Season 1: 24 tập, Season 2: 23 tập, Movie 0",
    description:
      "Trận chiến giữa các chú thuật sư và lời nguyền độc ác để bảo vệ nhân loại.",
    genre: "Anime, Hành động, Siêu nhiên",
    duration: "24 phút/tập",
    rating: "8.9/10",
  },
];

const chieurap = [
  {
    id: "cha-toi",
    name: "Cha Tôi",
    img: "./assents/chatoi.png",
    episodes: "Phim Việt, đang chiếu (2025)",
    description:
      "Một câu chuyện cảm động về tình cha con trong bối cảnh hiện đại.",
    genre: "Việt Nam, Tình cảm, Gia đình",
    duration: "90 phút",
    rating: "7.5/10",
  },
  {
    id: "dia-dao",
    name: "Địa Đạo",
    img: "./assents/diadao.png",
    episodes: "Phim Việt, đang chiếu (2025)",
    description:
      "Khám phá hệ thống địa đạo bí mật trong chiến tranh và những câu chuyện chưa kể.",
    genre: "Việt Nam, Lịch sử, Chiến tranh",
    duration: "110 phút",
    rating: "7.8/10",
  },
  {
    id: "ky-uc-cuoc-chien",
    name: "Ký Ức Cuộc Chiến",
    img: "./assents/khicuoc.jpg",
    episodes: "Phim lẻ",
    description:
      "Một bộ phim chiến tranh tái hiện ký ức và hậu quả của chiến tranh lên con người.",
    genre: "Chiến tranh, Chính kịch",
    duration: "130 phút",
    rating: "8.1/10",
  },
  {
    id: "vuon-sao-bang",
    name: "Vườn Sao Băng",
    img: "./assents/vuon-sao-bang-2009-big.jpg",
    episodes: "25 tập (Hàn Quốc - 2009)",
    description:
      "Câu chuyện tình học đường giữa cô gái nghèo và nhóm F4 giàu có nổi tiếng.",
    genre: "Hàn Quốc, Tình cảm, Học đường",
    duration: "60 phút/tập",
    rating: "8.2/10",
  },
  {
    id: "squid-game",
    name: "Squid Game",
    img: "./assents/sqiutgame.jpg",
    episodes: "Season 1: 9 tập, Season 2: sắp ra mắt",
    description:
      "Cuộc chiến sinh tồn đẫm máu để giành lấy phần thưởng tiền tỷ trong trò chơi tử thần.",
    genre: "Hàn Quốc, Giật gân, Sinh tồn",
    duration: "40-60 phút/tập",
    rating: "8.0/10",
  },
];

const tinhcam = [
  {
    id: "tokyo-revengers",
    name: "Tokyo Revengers",
    img: "./assents/tokyo-revengers.jpg",
    episodes: "3 mùa, tổng 50+ tập",
    description:
      "Một thanh niên quay ngược thời gian để thay đổi quá khứ và cứu người mình yêu.",
    genre: "Anime, Hành động, Tình cảm",
    duration: "24 phút/tập",
    rating: "8.4/10",
  },
  {
    id: "your-name-tinhcam",
    name: "Your Name",
    img: "./assents/yourname1.png",
    episodes: "Movie (1h 46 phút)",
    description:
      "Một mối liên kết siêu nhiên kỳ lạ giữa hai con người ở hai nơi khác nhau.",
    genre: "Anime, Tình cảm, Kỳ ảo",
    duration: "107 phút",
    rating: "9.2/10",
  },
  {
    id: "a-silent-voice",
    name: "A Silent Voice",
    img: "./assents/asilentvoice.png",
    episodes: "Movie (2h 10 phút)",
    description:
      "Hành trình chuộc lỗi của một chàng trai từng bắt nạt cô bé khiếm thính.",
    genre: "Anime, Tình cảm, Chính kịch",
    duration: "130 phút",
    rating: "8.9/10",
  },
  {
    id: "kuroi",
    name: "Kuroi",
    img: "./assents/kuroi.png",
    episodes: "Anime ngắn",
    description:
      "Một tác phẩm anime ngắn đầy cảm xúc và chiều sâu, khám phá bóng tối nội tâm.",
    genre: "Anime, Chính kịch",
    duration: "Đang cập nhật",
    rating: "7.0/10",
  },
  {
    id: "horimiya",
    name: "Horimiya",
    img: "./assents/horimiya.jpg",
    episodes: "Season 1: 13 tập, Season 2: 13 tập",
    description:
      "Một chuyện tình nhẹ nhàng và đáng yêu giữa hai học sinh trung học tưởng chừng trái ngược.",
    genre: "Anime, Tình cảm, Hài hước",
    duration: "23 phút/tập",
    rating: "8.8/10",
  },
];
