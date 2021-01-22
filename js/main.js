const hamburger = document.querySelector(".hamburger");

const menuHandler = () => {
  const links = document.querySelectorAll(".hamLinks");
  const menuLinks = document.querySelector(".menuLinks");
  const bar1 = document.querySelector(".bar1");
  const bar2 = document.querySelector(".bar2");
  const bar3 = document.querySelector(".bar3");
  bar1.classList.toggle("activeBar1");
  bar2.classList.toggle("activeBar2");
  bar3.classList.toggle("actveBar3");
  menuLinks.classList.toggle("showMenu");
  links.forEach((link) => {
    link.style.opacity = "1";
  });
};

hamburger.addEventListener("click", menuHandler);

$(document).ready(function () {
  $(".hero").animate({ left: "100px" }, "slow");
  $(".linkBtn").click(function (e) {
    let linkHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(linkHref).offset().top,
      },
      500
    );
  });
  $(".linkNav").click(function (e) {
    let linkHref = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(linkHref).offset().top,
      },
      850
    );
    e.preventDefault();
  });
});
