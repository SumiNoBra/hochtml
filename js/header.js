let user = {
  Gtinh: "Nam",
  Ngaysinh: "2000-01-01",
  name: "Nguyễn Văn A",
  passWord: "123456",
  email: "",
  sdt: "",
};
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
    <li><a class="dropdown-item" href="#dangnhap">Đăng Nhập</a></li>
    <li><a class="dropdown-item" href="#dangky">Đăng Ký</a></li>
  `;
} else {
  dropdown_acc.innerHTML = `
    <li><a class="dropdown-item" href="account.html">Cài đặt cá nhân</a></li>
    <li><a class="dropdown-item" href="#" onclick="logout()">Đăng Xuất</a></li>
  `;
}
const name_left = document.querySelector(".sidebar-left .name");
name_left.innerHTML = `
  <div class="anhdaidien"></div>
  ${user.name}
`;
const canhan1 = document.querySelector(".canhan1");
canhan1.innerHTML = `
          <p class="tag-name">Thông tin cá nhân</p>
          <div class="thongtin d-flex gap-2 justify-content-between">
            <div class="d-flex gap-3">
              <div class="anhdaidien" style="height: 50px; width: 50px"></div>
              <div class="d-flex flex-column">
                ${user.name}
                <div class="d-flex">
                  <label class="text-secondary">Gioi tinh:</label>
                  <p>${user.Gtinh}</p>
                  <p class="mx-2">|</p>
                  <label class="text-secondary">Ngay sinh:</label>
                  <p>${user.Ngaysinh}</p>
                </div>
              </div>
            </div>
            <a class="nav-link" href="#">Chỉnh sửa</a>
          </div>
`;
const canhan2 = document.querySelector(".canhan2");
canhan2.innerHTML = `
          <p class="tag-name">Tài khoản và bảo mật</p>
          <div class="thongtin d-flex gap-2 justify-content-between">
            <div class="d-flex">
              <label class="text-secondary">Email</label>
              <p>:${user.email == 0 ? "Chưa được thiết lập" : user.email}</p>
            </div>
            <a class="nav-link" href="#">Chỉnh sửa</a>
          </div>
          <div class="thongtin d-flex gap-2 justify-content-between">
            <div class="d-flex">
              <label class="text-secondary">Số điện thoại</label>
              <p>${user.sdt == 0 ? "Chưa được thiết lập" : user.sdt}</p>
            </div>
            <a class="nav-link" href="#">Chỉnh sửa</a>
          </div>
          <div class="thongtin d-flex gap-2 justify-content-between">
            <div class="d-flex">
              <label class="text-secondary">Password</label>
              <p>:${user.passWord == 0 ? "Chưa được thiết lập" : "******"}</p>
            </div>
            <a class="nav-link" href="#">Chỉnh sửa</a>
          </div>
`;

function formPw() {
  return `
      <p onclick="closeForm()" class="nav-link fs-6 text-black" style="cursor: pointer; text-align: right;">x</p>
      <h5 class="text-center fs-6">Chỉnh sửa Password</h5>
      <div id="oldPassword" class="form-control mb-3">
        <p class="tag">Nhập lại mật khẩu cũ</p>
        <input type="password" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <div id="newPassword" class="form-control mb-3">
        <p class="tag">Nhập mật khẩu mới</p>
        <input type="password" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <div id="confirmPassword" class="form-control mb-3">
        <p class="tag">Nhập lại mật khẩu mới</p>
        <input type="password" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <br />
      <button type="submit" class="btn btn-success w-100 mb-3" onclick="saveEditPW()">Lưu</button>
      <button class="btn btn-outline-success w-100" onclick="closeForm()">Hủy</button>
  `;
}
function formSdt() {
  return `
      <p onclick="closeForm()" class="nav-link fs-6 text-black" style="cursor: pointer; text-align: right;">x</p>
      <h5 class="text-center fs-6">Chỉnh sửa số điện thoại</h5>
      <div id="new" class="form-control mb-3">
        <p class="tag">Nhập lại số điện thoại</p>
        <input type="text" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <br />
      <button type="submit" class="btn btn-success w-100 mb-3" onclick="saveEditSdt()">Lưu</button>
      <button class="btn btn-outline-success w-100" onclick="closeForm()">Hủy</button>
  `;
}
function formEmail() {
  return `
      <p onclick="closeForm()" class="nav-link fs-6 text-black" style="cursor: pointer; text-align: right;">x</p>
      <h5 class="text-center fs-6">Chỉnh sửa Email</h5>
      <div id="new" class="form-control mb-3">
        <p class="tag">Nhập lại Email</p>
        <input type="text" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <br />
      <button type="submit" class="btn btn-success w-100 mb-3" onclick="saveEditEmail()">Lưu</button>
      <button class="btn btn-outline-success w-100" onclick="closeForm()">Hủy</button>
  `;
}
function formGtinh_Nsinh(){
  return`
      <p onclick="closeForm()" class="nav-link fs-6 text-black" style="cursor: pointer; text-align: right;">x</p>
      <h5 class="text-center fs-6">Chỉnh sửa thông tin cá nhân</h5>
      <div id="bietdanh" class="form-control mb-3">
        <p class="tag">Nhập lại biệt danh</p>
        <input type="text" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <div id="gtinh" class="form-control mb-3">
        <p class="tag">Nhập lại giới tính</p>
        <input type="text" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <div id="nsinh" class="form-control mb-3">
        <p class="tag">Nhập lại ngày sinh</p>
        <input type="text" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <br />
      <button type="submit" class="btn btn-success w-100 mb-3" onclick="saveGtinh_Nsinh()">Lưu</button>
      <button class="btn btn-outline-success w-100" onclick="closeForm()">Hủy</button>
  `
}
document.querySelectorAll(".thongtin .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const label = e.target.parentElement.querySelector("label").innerText;
    const editForm = document.getElementsByClassName("editForm");
    editForm.item(0).classList.add("hien");
    if (label == "Password") {
      editForm.item(0).innerHTML = formPw();
    } else if (label == "Số điện thoại") {
      editForm.item(0).innerHTML = formSdt();
    } else if (label == "Email") {
      editForm.item(0).innerHTML = formEmail();
    } else {
      editForm.item(0).innerHTML = formGtinh_Nsinh();
    }
  });
});

function saveEditPW() {
  const oldPass = document.querySelector(".editForm #oldPassword");
  const newPass = document.querySelector(".editForm #newPassword");
  const confirmPass = document.querySelector(".editForm #confirmPassword");
  let checked = true;
  if (newPass.querySelector("input").value == "") {
    newPass.querySelector(".ifWrong").innerText =
      "Mật khẩu mới không được để trống";
    newPass.querySelector(".ifWrong").classList.add("wrong");
    newPass.querySelector("input").classList.add("wrong");
    newPass.querySelector(".tag").classList.add("wrong");
    checked = false;
  } else {
    newPass.querySelector(".ifWrong").innerText = "";
    newPass.querySelector(".ifWrong").classList.add("correct");
    newPass.querySelector("input").classList.add("correct");
    newPass.querySelector(".tag").classList.add("correct");
  }
  if (
    confirmPass.querySelector("input").value == "" ||
    confirmPass.querySelector("input").value !==
      newPass.querySelector("input").value
  ) {
    confirmPass.querySelector(".ifWrong").innerText =
      "Mật khẩu xác nhận không đúng";
    confirmPass.querySelector(".ifWrong").classList.add("wrong");
    confirmPass.querySelector("input").classList.add("wrong");
    confirmPass.querySelector(".tag").classList.add("wrong");
    checked = false;
  } else {
    confirmPass.querySelector(".ifWrong").innerText = "";
    confirmPass.querySelector(".ifWrong").classList.add("correct");
    confirmPass.querySelector("input").classList.add("correct");
    confirmPass.querySelector(".tag").classList.add("correct");
  }
  if (
    oldPass.querySelector("input").value == "" ||
    oldPass.querySelector("input").value !== user.passWord
  ) {
    oldPass.querySelector(".ifWrong").innerText = "Mật khẩu cũ không đúng";
    oldPass.querySelector(".ifWrong").classList.add("wrong");
    oldPass.querySelector("input").classList.add("wrong");
    oldPass.querySelector(".tag").classList.add("wrong");
    checked = false;
  } else {
    oldPass.querySelector(".ifWrong").innerText = "";
    oldPass.querySelector(".ifWrong").classList.add("correct");
    oldPass.querySelector("input").classList.add("correct");
    oldPass.querySelector(".tag").classList.add("correct");
  }
  if (!checked) {
    return;
  }
  user.passWord = newPass.querySelector("input").value;
  notify();
  closeForm();
}

function saveEditSdt() {
  if (
    document.querySelector(".editForm input").value == "" ||
    document.querySelector(".editForm input").value.length < 10
  ) {
    document.querySelector(".editForm .ifWrong").innerText =
      "Số điện thoại không hợp lệ";
    document.querySelector(".editForm .ifWrong").classList.add("wrong");
    document.querySelector(".editForm input").classList.add("wrong");
    document.querySelector(".editForm .tag").classList.add("wrong");
    return;
  }
  user.sdt = document.querySelector(".editForm input").value;
  notify();
  closeForm();
}
function saveEditEmail() {
  if (
    document.querySelector(".editForm input").value == "" ||
    !document.querySelector(".editForm input").value.includes("@")
  ) {
    document.querySelector(".editForm .ifWrong").innerText =
      "Email không hợp lệ";
    document.querySelector(".editForm .ifWrong").classList.add("wrong");
    document.querySelector(".editForm input").classList.add("wrong");
    document.querySelector(".editForm .tag").classList.add("wrong");
    return;
  }
  user.email = document.querySelector(".editForm #new input").value;
  notify();
  closeForm();
}
function saveGtinh_Nsinh(){
  notify();
  closeForm();
}

function closeForm() {
  document.getElementsByClassName("editForm").item(0).classList.remove("hien");
}
function notify() {
  var toastLiveExample = document.getElementById("liveToast");
  var toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
}
