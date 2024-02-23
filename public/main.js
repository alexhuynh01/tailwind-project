const topMenu = document.getElementById("alex-top-menu");
const toggleTopMenu = document.getElementById("alex-toggle-top-menu");

document.addEventListener("click", (e) => {
  if (toggleTopMenu.contains(e.target)) {
    //Click toggle top menu
    topMenu.classList.toggle("alex-topmenu-expanded");
    topMenu.classList.toggle("hidden");
  } else if (topMenu.classList.contains("alex-topmenu-expanded")) {
    //Click out side top menu
    topMenu.classList.remove("alex-topmenu-expanded");
    topMenu.classList.add("hidden");
  }
});
window.onload = function () {
  // Khôi phục vị trí cuộn từ sessionStorage, nếu có
  var scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
  }
};

window.onbeforeunload = function () {
  // Lưu vị trí cuộn vào sessionStorage trước khi trang tải lại hoặc đóng
  sessionStorage.setItem("scrollPosition", window.scrollY);
};
