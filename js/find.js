const all = [...anime, ...thethao, ...chieurap, ...tinhcam];
const kq = [];

const params = new URLSearchParams(location.search);
const namee = params.get("name").toString();

all.filter((item) => {
  if (item.name.toLowerCase().includes(namee.toLowerCase())) {
    kq.push(item);
  }
});
const kq_find = document.querySelector("#kq-find");
if (kq.length == 0) {
  kq_find.innerHTML = `<h2 class="text-center">Không tìm thấy kết quả nào cho "${namee}"</h2>`;
} else {
  kq_find.innerHTML = "";
  const items = document.createElement("div");
  items.classList =
    "container-cus row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 show-all";
  kq.forEach((item) => {
    items.innerHTML += `
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
  kq_find.appendChild(items);
}
function clickToFilm(id) {
  const urlFilm = `movie_detail.html?id=${id}`;
  location.href = urlFilm;
  return;
}
