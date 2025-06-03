window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("sticky-active");
  } else {
    navbar.classList.remove("sticky-active");
  }
});
function logout() {
  localStorage.removeItem("username");
  location.reload();
  location.href = "index.html";
}
const username = localStorage.getItem("username");

const acc = document.createElement("div");
acc.className = "acc";
if (username == null) {
  acc.innerHTML = `
  <a href="dangnhap.html" class="nav-link">Đăng Nhập</a>
  <a href="dangky.html" class="nav-link">Đăng Ký</a>
  `;
} else {
  acc.innerHTML = `
  <a href="account.html" class="nav-link">Cài đặt cá nhân</a>
  <a href="#" onclick="logout()" class="nav-link">Đăng Xuất</a>
  
  `;
}
const me = document.querySelector(".me");
me.appendChild(acc);
const dropdown_acc = document.querySelector(".dropdown-menu.acc");
if (username == null) {
  dropdown_acc.innerHTML = `
    <li><a class="dropdown-item" href="dangnhap.html">Đăng Nhập</a></li>
    <li><a class="dropdown-item" href="dangky.html">Đăng Ký</a></li>
  `;
} else {
  dropdown_acc.innerHTML = `
    <li><a class="dropdown-item" href="account.html">Cài đặt cá nhân</a></li>
    <li><a class="dropdown-item" href="#" onclick="logout()">Đăng Xuất</a></li>
  `;
}
const find_input = document.querySelector("#find-input");
const find_fa = document.querySelector("#find-fa");
find_fa.addEventListener("click", () => {
  if (find_input.value.trim() != "") {
    const url = `find.html?name=${find_input.value}`;
    window.location.href = url;
  }
  return;
});
