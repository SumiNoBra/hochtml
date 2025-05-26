tk = document.querySelector("#tk");
mk = document.querySelector("#mk");
function submitForm() {
  tkinput = tk.querySelector("input");
  mkinput = mk.querySelector("input");
  if (tkinput.value !== "" && mkinput.value !== "") {
    localStorage.setItem("username", "isvalid");
    location.href = "index.html";
  }
  if (tkinput.value == "") {
    tkinput.classList.add("is-invalid");
    tk.querySelector(".feedback").classList.add("invalid-feedback");
    tk.querySelector(".feedback").innerText = "Vui lòng nhập email";
  } else if (!tkinput.value.includes("@")) {
    tkinput.classList.add("is-invalid");
    tk.querySelector(".feedback").classList.add("invalid-feedback");
    tk.querySelector(".feedback").innerText = "Tài khoản không phải là email";
  } else {
    tkinput.classList.remove("is-invalid");
    tkinput.classList.add("is-valid");
    tk.querySelector(".feedback").innerText = "";
  }
  if (mkinput.value == "") {
    mkinput.classList.add("is-invalid");
    mk.querySelector(".feedback").classList.add("invalid-feedback");
    mk.querySelector(".feedback").innerText = "Vui lòng nhập mật khẩu";
  } else {
    mkinput.classList.remove("is-invalid");
    mkinput.classList.add("is-valid");
    mk.querySelector(".feedback").innerText = "";
  }

  return true;
}
