const user = JSON.parse(localStorage.getItem("username"));
const params = new URLSearchParams(location.search);
const movieId = params.get("id");
let film;
const all = [...anime, ...thethao, ...chieurap, ...tinhcam];
all.forEach((item) => {
  if (item.id === movieId) {
    film = item;
    return;
  }
});
const movie_poster = document.querySelector("#movie-poster");
const movie_title = document.querySelector("#movie-title");
const movie_genre = document.querySelector("#movie-genre");
const movie_duration = document.querySelector("#movie-duration");
const movie_description = document.querySelector("#movie-description");

movie_poster.src = film.img;
movie_title.textContent = film.name;
movie_genre.textContent = film.genre;
movie_duration.textContent = film.duration;
movie_description.textContent = film.description;

const commentText = document.querySelector("#comment-form input");
if (user == null) {
  commentText.disabled = true;
  commentText.style.backgroundColor = "gray";
} else {
  const submit = document.querySelector("#comment-form span");
  const comments_list = document.querySelector("#comments-list");
  commentText.style.backgroundColor = "white";
  comments_list.innerHTML = ``;
  let allCommnent = ``;
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (commentText.value.trim() != "") {
      allCommnent += `<div class="mb-3 row">
        <div class="anhdaidien col-1"></div>
        <div class="col-11">
        <p class="comment-author">${user.name}</p>
        <p class="comnent">${commentText.value}</p>
        </div>
        </div>`;
      comments_list.innerHTML = allCommnent;
      commentText.value = "";
    }
  });
}
