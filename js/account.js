const user = JSON.parse(localStorage.getItem("username"));

const name_left = document.querySelector(".sidebar-left .name");
name_left.innerHTML = `
  <div class="anhdaidien"></div>
  <div class="name_left">
  ${user.name}
  </div>
`;
const canhan1 = document.querySelector(".canhan1");
canhan1.innerHTML = `
          <p class="tag-name">Thông tin cá nhân</p>
          <div class="thongtin d-flex gap-2 justify-content-between">
            <div class="d-flex gap-1">
              <div class="anhdaidien"></div>
              <div class="d-flex flex-column">
                <div id="name">${user.name}</div>
                <div class="d-flex">
                  <label class="text-secondary">Giới tính:</label>
                  <p id="gtinh">${user.Gtinh}</p>
                  <p class="mx-2">|</p>
                  <label class="text-secondary">Ngày sinh:</label>
                  <p id="ngaysinh">${user.Ngaysinh}</p>
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
              <label class="text-secondary">Email</label>:
              <p id="email">${
                user.email == "" ? "Chưa được thiết lập" : user.email
              }</p>
            </div>
            <a class="nav-link" href="#">Chỉnh sửa</a>
          </div>
          <div class="thongtin d-flex gap-2 justify-content-between">
            <div class="d-flex">
              <label class="text-secondary">Số điện thoại</label>:
              <p id="sdt">${
                user.sdt == "" ? "Chưa được thiết lập" : user.sdt
              }</p>
            </div>
            <a class="nav-link" href="#">Chỉnh sửa</a>
          </div>
          <div class="thongtin d-flex gap-2 justify-content-between">
            <div class="d-flex">
              <label class="text-secondary">Password</label>:
              <p id="password">${
                user.passWord == "" ? "Chưa được thiết lập" : "******"
              }</p>
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
function formGtinh_Nsinh() {
  return `
      <p onclick="closeForm()" class="nav-link fs-6 text-black" style="cursor: pointer; text-align: right;">x</p>
      <h5 class="text-center fs-6">Chỉnh sửa thông tin cá nhân</h5>
      <div id="newName" class="form-control mb-3">
        <p class="tag">Nhập lại biệt danh</p>
        <input type="text" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <div id="newgtinh" class="form-control mb-3">
        <p class="tag">Nhập lại giới tính</p>
        <select class="form-select" aria-label="Default select example">
          <option value="Nam" >Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        <div class="ifWrong">
        </div>
      </div>
      <div id="newnsinh" class="form-control mb-3">
        <p class="tag">Nhập lại ngày sinh</p>
        <input type="date" class="form-control" />
        <div class="ifWrong">
        </div>
      </div>
      <br />
      <button type="submit" class="btn btn-success w-100 mb-3" onclick="saveGtinh_Nsinh()">Lưu</button>
      <button class="btn btn-outline-success w-100" onclick="closeForm()">Hủy</button>
  `;
}
document.querySelectorAll(".thongtin .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const label = e.target.parentElement.querySelector("label").innerText;
    const editForm = document.querySelector(".editForm");
    editForm.classList.add("hien");
    if (label == "Password") {
      editForm.innerHTML = formPw();
    } else if (label == "Số điện thoại") {
      editForm.innerHTML = formSdt();
    } else if (label == "Email") {
      editForm.innerHTML = formEmail();
    } else {
      editForm.innerHTML = formGtinh_Nsinh();
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
    oldPass.querySelector(".ifWrong").classList = "ifWrong wrong";
    oldPass.querySelector("input").classList = "form-control wrong";
    oldPass.querySelector(".tag").classList = "tag wrong";
    checked = false;
  } else {
    oldPass.querySelector(".ifWrong").innerText = "";
    oldPass.querySelector(".ifWrong").classList = "ifWrong correct";
    oldPass.querySelector("input").classList = "form-control correct";
    oldPass.querySelector(".tag").classList = "tag correct";
  }
  if (!checked) {
    return;
  }
  user.passWord = newPass.querySelector("input").value;
  notify();
  localStorage.removeItem("username");
  localStorage.setItem("username", JSON.stringify(user));
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
  document.querySelector("#sdt").innerText = user.sdt;
  localStorage.removeItem("username");
  localStorage.setItem("username", JSON.stringify(user));
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
  document.querySelector("#email").innerText = user.email;
  localStorage.removeItem("username");
  localStorage.setItem("username", JSON.stringify(user));
  notify();
  closeForm();
}
function saveGtinh_Nsinh() {
  let name = document.querySelector(".editForm #newName input").value;
  let Gtinh = document.querySelector(" .editForm #newgtinh select").value;
  let Ngaysinh = document.querySelector(" .editForm #newnsinh input").value;
  if (name !== "") {
    document.querySelector("#name").innerText = name;
    name_left.querySelector(".name_left").innerText = name;
    user.name = name;
  }
  document.querySelector("#gtinh").innerText = Gtinh;
  user.Gtinh = Gtinh;

  if (Ngaysinh != "") {
    document.querySelector("#ngaysinh").innerText = Ngaysinh;
    user.Ngaysinh = Ngaysinh;
  }

  localStorage.removeItem("username");
  localStorage.setItem("username", JSON.stringify(user));
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
