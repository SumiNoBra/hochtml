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
    name: "Blue Lock",
    img: "./assents/bluelock.jpeg",
  },
  {
    name: "Naruto",
    img: "./assents/naruto.webp",
  },
  {
    name: "Squitgame",
    img: "./assents/sqiutgame.jpg",
  },
  {
    name: "Doraemon",
    img: "./assents/doremon.jpg",
  },
  {
    name: "POKEMON",
    img: "./assents/pokemon.jpg",
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
function renderDexuathot(dexuathotdata,dexuathot) {
  dexuathot.innerHTML = "";
  dexuathotdata.forEach((item, index) => {
    const DivCha = document.createElement("div");

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.style.backgroundImage = `url(${item.img})`;
    itemDiv.innerHTML=`
    <p>Đang phát sóng</p>
    `;
    const name = document.createElement("p");
    name.textContent = item.name;
    DivCha.appendChild(itemDiv);
    DivCha.appendChild(name);
    dexuathot.appendChild(DivCha);
    if ((index + 1) % 6 === 0) {
      return;
    }
  });
}
renderDexuathot(dexuathotdata,dexuathot);
renderDexuathot(dexuathotdata,dexuathot1);

