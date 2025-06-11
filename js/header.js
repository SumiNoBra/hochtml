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
    location.href = url;
  }
  return;
});
