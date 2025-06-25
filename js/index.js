const carouselInner = document.querySelector(".carousel-inner");
focusDataArray.forEach((item, index) => {
  const carouselItem = document.createElement("div");
  carouselItem.className =
    index === 0 ? "carousel-item active" : "carousel-item";
  carouselItem.setAttribute("data-bs-interval", "5000");
  carouselItem.innerHTML = `
    <img
      src="${item.ImgUrl}"
      class="d-block w-100"
      alt="${item.title}"
    />
    <div class="carousel-caption d-inline">
      <span class="content1">${item.content1}</span>
      <span class="content2">${item.content2}</span>
      <div class="focus-info">
        <span class="over-rate"><i class="fa-solid fa-star"></i> ${item.overrate}</span>
        <span>|</span>
        <span>TV</span>
        <span>|</span>
        <span>${item.info}</span>
      </div>
      <h1 class="focus-title">${item.title}</h1>
      <p class="focus-description">${item.description}</p>
      <div class="focus-actions">
        <button class="play-button">
          <i class="fa-solid fa-play"></i>
        </button>
        <button class="save-button">
          <i class="fa-regular fa-bookmark"></i>
        </button>
      </div>
    </div>
  `;
  carouselInner.appendChild(carouselItem);
});

const animeDiv = document.querySelector(" #anime");
const thethaoDiv = document.querySelector(" #thethao");
const chieurapDiv = document.querySelector("  #chieurap");
const tinhcamDiv = document.querySelector("  #tinhcam");
renderDexuathot(anime, animeDiv);
renderDexuathot(thethao, thethaoDiv);
renderDexuathot(chieurap, chieurapDiv);
renderDexuathot(tinhcam, tinhcamDiv);

function renderDexuathot(dexuathotdata, dexuathot) {
  dexuathot.innerHTML = "";
  dexuathotdata.forEach((item) => {
    dexuathot.innerHTML += `
    <div class="item col" onclick="clickToFilm('${item.id}')">
      <div class="movie" style="background-image: url('${item.img}')">
        <p class="item-episodes">${item.episodes}</p>
        <p class="movie-description">
          <strong>${item.name}</strong><br />
          ${item.episodes}<br />
          ${item.description ? `<em>${item.description}</em>` : ""}
        </p>
      </div>
      <p class="item-name">${item.name}</p>
    </div>
  `;
  });
}

const buttons = document.querySelectorAll(".toggle-p");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const containers = button.parentElement.querySelector(".container-cus");
    containers.classList.toggle("show-all");
  });
});

function clickToFilm(id) {
  const urlFilm = `movie_detail.html?id=${id}`;
  location.href = urlFilm;
  return;
}
