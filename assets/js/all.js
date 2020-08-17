// Burger Menu

let navMenu = document.querySelector("#navMenu");
let burgerMenu = document.querySelector("#burgerMenu");
let navMenuList = document.querySelectorAll(".nav-menu ul li a");
let logo = document.querySelector(".logo-con");

let brainsterSpaceHeader = document.querySelector("#brainsterSpaceHeader");
let brainsterMainHeader = document.querySelector("#brainsterMainHeader");

// Burger Menu Main //

function toggleMenuMain() {
  navMenu.classList.toggle("active");
}
function closeMenuMain() {
  navMenu.classList.remove("active");
}

navMenuList.forEach((link) => {
  link.addEventListener("click", closeMenuMain);
});
burgerMenu.addEventListener("click", toggleMenuMain);

function closeMenus() {
  navMenu.classList.remove("active");
}
logo.addEventListener("click", closeMenus);

// Pop Up

let popUp = document.querySelector(".popup");
let popUpText = document.querySelector(".popuptext");
popUp.addEventListener("click", function () {
  popUpText.classList.toggle("show");
});

document.addEventListener("click", function (e) {
  if (!popUp.contains(e.target)) {
    popUpText.classList.remove("show");
  }
  if (e.target == modalTopHeader) {
    modalTopHeader.style.display = "none";
  }
});

// Modals

let modalTopHeader = document.querySelector("#modalPartnership"),
  buttonModalTopHeader = document.querySelectorAll(".getInTouch"),
  turnOffModal = document.querySelectorAll(".turn-it-off"),
  getInTouchForm = document.querySelector(".getInTouch-form"),
  modalError = document.querySelector("#modalError");

turnOffModal.forEach((el) => {
  el.addEventListener("click", function () {
    modalTopHeader.style.display = "none";
    modalError.style.display = "none";
    modalInovations.style.display = "none";
  });
});

buttonModalTopHeader.forEach((el) => {
  el.addEventListener("click", function () {
    modalError.style.display = "block";
  });
});

document.addEventListener("click", function (e) {
  if (e.target == modalError) {
    modalError.style.display = "none";
  }
  if (e.target == modalInovations) {
    modalInovations.style.display = "none";
  }
});

getInTouchForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

// on Hashchange / on load

let resizeTimer;

function handleRoute(e) {
  e.preventDefault();
  $(window).scrollTop(0);

  let hash = location.hash.replace("#", "");

  switch (hash) {
    case "blgospace":
      homeContainer.style.display = "none";
      blogSpaceMainContainer.style.display = "block";
      calendarContainer.style.display = "none";
      eventMainContainer.style.display = "none";
      academiesMainContainer.style.display = "none";
      blogSpaceHeader.style.display = "block";

      brainsterSpaceHeader.style.display = "block";
      brainsterMainHeader.style.display = "none";
      break;
    case "academies":
      homeContainer.style.display = "none";
      blogSpaceMainContainer.style.display = "none";
      calendarContainer.style.display = "none";
      eventMainContainer.style.display = "none";
      academiesMainContainer.style.display = "block";
      blogSpaceHeader.style.display = "none";

      brainsterSpaceHeader.style.display = "none";
      brainsterMainHeader.style.display = "block";

      break;
    case "calendar":
      homeContainer.style.display = "none";
      blogSpaceMainContainer.style.display = "none";
      calendarContainer.style.display = "block";
      eventMainContainer.style.display = "none";
      academiesMainContainer.style.display = "none";
      blogSpaceHeader.style.display = "none";

      brainsterSpaceHeader.style.display = "none";
      brainsterMainHeader.style.display = "block";

      break;
    case "eventspace":
      homeContainer.style.display = "none";
      blogSpaceMainContainer.style.display = "none";
      calendarContainer.style.display = "none";
      eventMainContainer.style.display = "block";
      academiesMainContainer.style.display = "none";
      blogSpaceHeader.style.display = "none";

      brainsterSpaceHeader.style.display = "none";
      brainsterMainHeader.style.display = "block";

      break;
    default:
      location.hash = "";
      homeContainer.style.display = "block";
      blogSpaceMainContainer.style.display = "none";
      calendarContainer.style.display = "none";
      eventMainContainer.style.display = "none";
      academiesMainContainer.style.display = "none";
      blogSpaceHeader.style.display = "none";

      brainsterSpaceHeader.style.display = "none";
      brainsterMainHeader.style.display = "block";

      break;
  }
}
window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);
