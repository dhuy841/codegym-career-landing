document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const backToTop = document.getElementById("backToTop");
  function toggleBackToTop() {
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 450);
  }
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  // Đóng menu điều hướng trên thiết bị di động sau khi chọn một mục.
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && window.jQuery) {
        window.jQuery("#mainNav").collapse("hide");
      }
    });
  });

  // Form minh họa: xác thực ở trình duyệt, không gửi dữ liệu lên máy chủ.
  const form = document.getElementById("consultForm");
  const message = document.getElementById("formMessage");
  if (form && message) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = document.getElementById("fullname").value.trim();
      message.textContent = "Cảm ơn " + name + "! Đây là bản demo, thông tin chưa được gửi đến CodeGym.";
      form.reset();
    });
  }
});
