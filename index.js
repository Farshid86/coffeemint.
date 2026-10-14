

function showMenu(evt, categoryId) {
  document.querySelectorAll(".content-box").forEach(box => {
    box.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(categoryId).classList.add("active");

  evt.currentTarget.classList.add("active");
}
