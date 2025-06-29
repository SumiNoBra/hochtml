tk = document.querySelector("#tk");
mk = document.querySelector("#mk");
xnmk = document.querySelector("#xnmk");
function submitForm() {
  tkinput = tk.querySelector("input");
  mkinput = mk.querySelector("input");
  xnmkinput = xnmk.querySelector("input");
  if (
    tkinput.value !== "" &&
    mkinput.value !== "" &&
    xnmkinput.value !== "" &&
    xnmkinput.value == mkinput.value &&
    tkinput.value.includes("@")
  ) {
    var toastLiveExample = document.getElementById("liveToast");
    var toast = new bootstrap.Toast(toastLiveExample);

    tkinput.value = "";
    mkinput.value = "";
    xnmkinput.value = "";
    tkinput.classList = "form-control";
    mkinput.classList = "form-control";
    xnmkinput.classList = "form-control";
    toast.show();
    return;
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
  if (xnmkinput.value == "") {
    xnmkinput.classList.add("is-invalid");
    xnmk.querySelector(".feedback").classList.add("invalid-feedback");
    xnmk.querySelector(".feedback").innerText = "Vui lòng xác nhận mật khẩu";
  } else if (xnmkinput.value !== mkinput.value) {
    xnmkinput.classList.add("is-invalid");
    xnmk.querySelector(".feedback").classList.add("invalid-feedback");
    xnmk.querySelector(".feedback").innerText = "Mật khẩu xác nhận không khớp";
  } else {
    xnmkinput.classList.remove("is-invalid");
    xnmkinput.classList.add("is-valid");
    xnmk.querySelector(".feedback").innerText = "";
  }

  return;
}
