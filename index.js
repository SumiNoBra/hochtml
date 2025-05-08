// data///////////////////////////////////////////////////////////////////////////////

const focusDataArray = [
  {
    ImgUrl: "./assents/thousand-sunny-one-piece.jpg",
    content1: "Đang phát sóng",
    content2: "Top 1",
    overrate: 9.9,
    info: "Đạo diễn: Eiichiro Oda",
    title: "One Piece [Thuyết Minh]",
    description:
      "One Piece (Đảo Hải Tặc) - Monkey D. Luffy và hành trình khám phá bí mật của kho báu One Piece, trở thành Vua Hải Tặc.",
  },
  {
    ImgUrl: "./assents/SpiritedAway.avif",
    content1: "Mới cập nhật",
    content2: "Top 2",
    overrate: 9.5,
    info: "Đạo diễn: Hayao Miyazaki",
    title: "Spirited Away",
    description:
      "Spirited Away - Câu chuyện về cô bé Chihiro lạc vào thế giới linh hồn và hành trình tìm đường trở về.",
  },
  {
    ImgUrl: "./assents/yourname.png",
    content1: "Hot nhất tuần",
    content2: "Top 3",
    overrate: 9.2,
    info: "Đạo diễn: Makoto Shinkai",
    title: "Your Name",
    description:
      "Your Name - Một câu chuyện tình yêu kỳ diệu giữa hai người xa lạ kết nối qua giấc mơ.",
  },
];

const anime = [
  {
    name: "Solo Leveling",
    img: "./assents/sololv.jpeg",
    episodes: "Season 1: 12 tập, Season 2 đang chiếu",
    description:
      "Một thợ săn yếu ớt vươn lên đỉnh cao sau khi nhận được sức mạnh đặc biệt.",
  },
  {
    name: "Naruto",
    img: "./assents/naruto.webp",
    episodes: "Naruto: 220 tập, Shippuden: 500 tập, Boruto: đang chiếu",
    description:
      "Hành trình trở thành Hokage của cậu bé ninja mang trong mình Cửu Vĩ.",
  },
  {
    name: "Dragon Ball",
    img: "./assents/dragonball.webp",
    episodes:
      "Dragon Ball: 153 tập, Z: 291, GT: 64, Super: 131, Daima: sắp chiếu",
    description: "Cuộc phiêu lưu bất tận của Songoku và những người bạn.",
  },
  {
    name: "Doraemon",
    img: "./assents/doremon.jpg",
    episodes: "Hơn 2000 tập (đang phát sóng)",
    description:
      "Chú mèo máy từ tương lai giúp Nobita vượt qua khó khăn trong cuộc sống.",
  },
  {
    name: "Pokemon",
    img: "./assents/pokemon.jpg",
    episodes: "Hơn 1200 tập (nhiều season + movie)",
    description:
      "Hành trình chinh phục các vùng đất và trở thành nhà huấn luyện Pokémon vĩ đại.",
  },
];

const thethao = [
  {
    name: "Haikyuu",
    img: "./assents/haikyuu.webp",
    episodes: "Mùa 1: 25, Mùa 2: 25, Mùa 3: 10, Mùa 4: 25, Movie: đang ra rạp",
    description:
      "Haikyuu theo chân Hinata Shoyo chinh phục đam mê bóng chuyền dù có chiều cao khiêm tốn.",
  },
  {
    name: "Bluelock",
    img: "./assents/bluelock.jpeg",
    episodes: "Mùa 1: 24 tập, Movie: Episode Nagi (2024), Mùa 2: đang chiếu",
    description:
      "Bluelock là dự án tìm kiếm tiền đạo xuất sắc nhất Nhật Bản thông qua hệ thống đào tạo khắc nghiệt.",
  },
  {
    name: "Attack on Titan",
    img: "./assents/aot.jpg",
    episodes: "4 mùa, 87 tập + special cuối (đã kết thúc)",
    description:
      "Cuộc chiến sinh tồn giữa nhân loại và những Titan khổng lồ phá huỷ thế giới.",
  },
  {
    name: "One Piece",
    img: "./assents/onepiece.jpe",
    episodes: "Hơn 1100 tập, nhiều movie",
    description:
      "Monkey D. Luffy và băng Mũ Rơm phiêu lưu tìm kiếm kho báu One Piece huyền thoại.",
  },
  {
    name: "Jujutsu Kaisen",
    img: "./assents/jujutsu.webp",
    episodes: "Season 1: 24 tập, Season 2: 23 tập, Movie 0",
    description:
      "Trận chiến giữa các chú thuật sư và lời nguyền độc ác để bảo vệ nhân loại.",
  },
];

const chieurap = [
  {
    name: "Cha Tôi",
    img: "./assents/chatoi.webp",
    episodes: "Phim Việt, đang chiếu (2025)",
    description:
      "Một câu chuyện cảm động về tình cha con trong bối cảnh hiện đại.",
  },
  {
    name: "Địa Đạo",
    img: "./assents/diadao.webp",
    episodes: "Phim Việt, đang chiếu (2025)",
    description:
      "Khám phá hệ thống địa đạo bí mật trong chiến tranh và những câu chuyện chưa kể.",
  },
  {
    name: "Ký Ức Cuộc Chiến",
    img: "./assents/khicuoc.jpg",
    episodes: "Phim lẻ",
    description:
      "Một bộ phim chiến tranh tái hiện ký ức và hậu quả của chiến tranh lên con người.",
  },
  {
    name: "Vườn Sao Băng",
    img: "./assents/vuon-sao-bang-2009-big.jpg",
    episodes: "25 tập (Hàn Quốc - 2009)",
    description:
      "Câu chuyện tình học đường giữa cô gái nghèo và nhóm F4 giàu có nổi tiếng.",
  },
  {
    name: "Squid Game",
    img: "./assents/sqiutgame.jpg",
    episodes: "Season 1: 9 tập, Season 2: sắp ra mắt",
    description:
      "Cuộc chiến sinh tồn đẫm máu để giành lấy phần thưởng tiền tỷ trong trò chơi tử thần.",
  },
];

const tinhcam = [
  {
    name: "Tokyo Revengers",
    img: "./assents/tokyo-revengers.jpg",
    episodes: "3 mùa, tổng 50+ tập",
    description:
      "Một thanh niên quay ngược thời gian để thay đổi quá khứ và cứu người mình yêu.",
  },
  {
    name: "Your Name",
    img: "./assents/yourname1.png",
    episodes: "Movie (1h 46 phút)",
    description:
      "Một mối liên kết siêu nhiên kỳ lạ giữa hai con người ở hai nơi khác nhau.",
  },
  {
    name: "A Silent Voice",
    img: "./assents/koenokatachi.webp",
    episodes: "Movie (2h 10 phút)",
    description:
      "Hành trình chuộc lỗi của một chàng trai từng bắt nạt cô bé khiếm thính.",
  },
  {
    name: "Kuroi",
    img: "./assents/kuroi.avif",
    episodes: "Anime ngắn",
    description:
      "Một tác phẩm anime ngắn đầy cảm xúc và chiều sâu, khám phá bóng tối nội tâm.",
  },
  {
    name: "Horimiya",
    img: "./assents/horimiya.jpg",
    episodes: "Season 1: 13 tập, Season 2: 13 tập",
    description:
      "Một chuyện tình nhẹ nhàng và đáng yêu giữa hai học sinh trung học tưởng chừng trái ngược.",
  },
];

//////////////////////////////////////////////////////////////////////////////////
// autochnageimg
const controlleft = document.querySelector(".focus .control-left");
const controlright = document.querySelector(".focus .control-right");
function autochangeimg(controlleft, controlright) {
  const focusImg = document.getElementsByClassName("focus");
  const focusContent = document.querySelector(".focus-content");
  let index = 0;
  function show() {
    const currentData = focusDataArray[index];
    focusImg[0].style.backgroundImage = `url(${currentData.ImgUrl})`;
    const content1 = focusContent.querySelector(".content1");
    const content2 = focusContent.querySelector(".content2");
    content1.textContent = currentData.content1;
    content2.textContent = currentData.content2;
    const focusInfo = focusContent.querySelector(".focus-info");
    focusInfo.innerHTML = `<span class="over-rate"><i class="fa-solid fa-star"></i> ${currentData.overrate}</span>
              <span>|</span>
              <span>TV</span>
              <span>|</span>
              <span>${currentData.info}</span>`;
    const focusTitle = focusContent.querySelector(".focus-title");
    focusTitle.textContent = currentData.title;
    const focusDescription = focusContent.querySelector(".focus-description");
    focusDescription.textContent = currentData.description;
  }
  show();
  function change() {
    internalId = setInterval(() => {
      index = (index + 1) % focusDataArray.length;
      show();
    }, 3000);
  }
  change();
  function handleButtonClickleft() {
    clearInterval(internalId);
    index = index - 1;
    if (index < 0) {
      index = focusDataArray.length - 1;
    }
    show();
    change();
  }
  function handleButtonClickright() {
    clearInterval(internalId);
    index = (index + 1) % focusDataArray.length;
    show();
    change();
  }
  controlleft.addEventListener("click", handleButtonClickleft);
  controlright.addEventListener("click", handleButtonClickright);
}
autochangeimg(controlleft, controlright);

////////////////////////////////////////////////////////////////////////////////
const animeDiv = document.querySelector(".container-cus #anime");
const thethaoDiv = document.querySelector(".container-cus #thethao");
const chieurapDiv = document.querySelector(".container-cus  #chieurap");
const tinhcamDiv = document.querySelector(".container-cus  #tinhcam");
renderDexuathot(anime, animeDiv);
renderDexuathot(thethao, thethaoDiv);
renderDexuathot(chieurap, chieurapDiv);
renderDexuathot(tinhcam, tinhcamDiv);
function renderDexuathot(dexuathotdata, dexuathot) {
  dexuathot.innerHTML = "";
  dexuathotdata.forEach((item, index) => {
    const DivCha = document.createElement("div");

    const DivItem = document.createElement("div");
    DivItem.classList.add("item");
    DivItem.style.backgroundImage = `url(${item.img})`;
    const p = document.createElement("p");
    p.innerText = item.episodes;
    p.classList.add("item-episodes");

    DivItem.appendChild(p);
    const name = document.createElement("p");
    name.classList.add("item-name");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.classList.add("movie-description");
    description.innerHTML = `
            <strong>${item.name}</strong><br />
            ${item.episodes}<br />
            ${item.description ? `<em>${item.description}</em>` : ""}
        `;
    DivItem.appendChild(description);
    DivCha.appendChild(DivItem);
    DivCha.appendChild(name);
    dexuathot.appendChild(DivCha);
  });
}
