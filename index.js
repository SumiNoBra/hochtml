const focusImg = document.getElementsByClassName("focus");
const focusContent = document.querySelector(".focus-content");

// data///////////////////////////////////////////////////////////////////////////////

const focusDataArray = [
  {
    // IconSrc: "./assents/icon.png",
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
    // IconSrc: "./assents/icon.png",
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
    // IconSrc: "./assents/icon.png",
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

const dexuathotdata = [
  {
    name: "Solo Leveling",
    img: "./assents/sololv.jpeg",
    episodes: "Season 1: 12 tập, Season 2 đang chiếu",
  },
  {
    name: "Naruto",
    img: "./assents/naruto.webp",
    episodes: "Naruto: 220 tập, Shippuden: 500 tập, Boruto: đang chiếu",
  },
  {
    name: "Dragon Ball",
    img: "./assents/dragonball.webp",
    episodes:
      "Dragon Ball: 153 tập, Z: 291, GT: 64, Super: 131, Daima: sắp chiếu",
  },
  {
    name: "Doraemon",
    img: "./assents/doremon.jpg",
    episodes: "Hơn 2000 tập (đang phát sóng)",
  },
  {
    name: "Pokemon",
    img: "./assents/pokemon.jpg",
    episodes: "Hơn 1200 tập (nhiều season + movie)",
  },
];

const dexuathotdata1 = [
  {
    name: "Haikyuu",
    img: "./assents/haikyuu.webp",
    episodes: "Mùa 1: 25, Mùa 2: 25, Mùa 3: 10, Mùa 4: 25, Movie: đang ra rạp",
  },
  {
    name: "Bluelock",
    img: "./assents/bluelock.jpeg",
    episodes: "Mùa 1: 24 tập, Movie: Episode Nagi (2024), Mùa 2: đang chiếu",
  },
  {
    name: "Attack on Titan",
    img: "./assents/aot.jpg",
    episodes: "4 mùa, 87 tập + special cuối (đã kết thúc)",
  },
  {
    name: "One Piece",
    img: "./assents/onepiece.jpg",
    episodes: "Hơn 1100 tập, nhiều movie",
  },
  {
    name: "Jujutsu Kaisen",
    img: "./assents/jujutsu.jpg",
    episodes: "Season 1: 24 tập, Season 2: 23 tập, Movie 0",
  },
];

const dexuathotdata2 = [
  {
    name: "Cha Tôi",
    img: "./assents/chatoi.webp",
    episodes: "Phim Việt, đang chiếu (2025)",
  },
  {
    name: "Địa Đạo",
    img: "./assents/diadao.webp",
    episodes: "Phim Việt, đang chiếu (2025)",
  },
  {
    name: "Ký Ức Cuộc Chiến",
    img: "./assents/khicuoc.jpg",
    episodes: "Phim lẻ",
  },
  {
    name: "Vườn Sao Băng",
    img: "./assents/vuon-sao-bang-2009-big.jpg",
    episodes: "25 tập (Hàn Quốc - 2009)",
  },
  {
    name: "Squid Game",
    img: "./assents/sqiutgame.jpg",
    episodes: "Season 1: 9 tập, Season 2: sắp ra mắt",
  },
];

const dexuathotdata3 = [
  {
    name: "Tokyo Revengers",
    img: "./assents/tokyo-revengers.jpg",
    episodes: "3 mùa, tổng 50+ tập",
  },
  {
    name: "Your Name",
    img: "./assents/yourname.jpg",
    episodes: "Movie (1h 46 phút)",
  },
  {
    name: "A Silent Voice",
    img: "./assents/koenokatachi.jpg",
    episodes: "Movie (2h 10 phút)",
  },
  {
    name: "Kuroi",
    img: "./assents/kuroi.avif",
    episodes: "Anime ngắn",
  },
  {
    name: "Horimiya",
    img: "./assents/horimiya.jpg",
    episodes: "Season 1: 13 tập, Season 2: 13 tập",
  },
];

//////////////////////////////////////////////////////////////////////////////////
// autochnageimg
const controlleft = document.querySelector(".focus .control-left");
const controlright = document.querySelector(".focus .control-right");
function autochangeimg(controlleft, controlright) {
  let index = 0;
  function show() {
    const currentData = focusDataArray[index];
    // const focusIcon = focusContent.querySelector(".focus-icon");
    focusImg[0].style.backgroundImage = `url(${currentData.ImgUrl})`;
    // focusIcon.src = currentData.IconSrc;
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
      if (index >= focusDataArray.length - 1) {
        index = -1;
      }
      index++;
      show();
    }, 3000);
  }
  change();
  function handleButtonClickleft() {
    clearInterval(internalId);
    if (index == 0) {
      index = focusDataArray.length - 1;
    } else {
      index--;
    }
    show();
    change();
  }
  function handleButtonClickright() {
    clearInterval(internalId);
    if (index == focusDataArray.length - 1) {
      index = 0;
    } else {
      index++;
    }
    show();
    change();
  }
  controlleft.addEventListener("click", handleButtonClickleft);
  controlright.addEventListener("click", handleButtonClickright);
}
autochangeimg(controlleft, controlright);

////////////////////////////////////////////////////////////////////////////////
const dexuathot = document.querySelector(".container .dexuathot #dexuathot2");
const dexuathot1 = document.querySelector(".container .dexuathot #dexuathot3");
const dexuathot2 = document.querySelector(".container .dexuathot #dexuathot4");
const dexuathot3 = document.querySelector(".container .dexuathot #dexuathot5");
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
            ${item.episodes}
            <br><br />
            Hồng Kông, thành phố an toàn nhất châu Á và cũng là trung tâm tài chính quốc tế nổi tiếng trên thế giới. Bên phải lối tài của thành phố này được đặc trưng là
             "Tài chính, Bất động sản, Giáo dục, Tư pháp", tạo0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 nên...
        `;
    DivItem.appendChild(description);
    DivCha.appendChild(DivItem);
    DivCha.appendChild(name);
    dexuathot.appendChild(DivCha);
  });
}
renderDexuathot(dexuathotdata, dexuathot);
renderDexuathot(dexuathotdata1, dexuathot1);
renderDexuathot(dexuathotdata2, dexuathot2);
renderDexuathot(dexuathotdata3, dexuathot3);
