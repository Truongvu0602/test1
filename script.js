"use strict";
// An hien thong tin User
const btnSubmit = document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", function () {
  // lay cac gia tri email chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // dieu kien de la 1 email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // thẻ thể hiện email lỗi
  const errormail = document.querySelector(".error-email");
  // check email
  const check = emailValue.match(regex);
  // lấy phần chứa thông tin user
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );
  // phần chứa button
  const submitEmail = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitEmail.style.display = "none";
    errormail.innerHTML = "";
  } else {
    errormail.innerHTML = "Please enter valid email ! ";
    errormail.style.color = "red";
  }
});

// An hien job info
function view_move(element) {
  const view_more = element.querySelector("  .job-item .view-button");
  view_more.style.visibility = "visible";
}
function view_out(element) {
  const view_more = element.querySelector(" .job-item .view-button");
  view_more.style.visibility = "hidden";
}
function view_click(element) {
  const job_content = element.querySelector(" .job-content");
  const view_less = element.querySelector(".view-button >button");
  if (view_less.innerHTML.includes("More")) {
    view_less.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg> View Less`;
    job_content.style.display = "block";
  } else {
    view_less.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg> View More`;
    job_content.style.display = "none";
  }
}
