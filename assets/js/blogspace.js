let blogSpaceMainContainer = document.querySelector("#blogSpaceContainer"),
  apendCardsContainer = document.querySelector(".cards-cont-blog"),
  blogSpaceHeader = document.querySelector("#blogspaceHeaderFilter"),
  buttonHeaderTopModal = document.querySelector(".link-button");

// funtion to create Blog cards
function createBlogCard(card) {
  return `<div class="card card-filter" id="${card.id}" data-filter="${card.category}">
            <a href="${card.href}" target="_blank">
            <div class="card-photo">
            <img src="assets/images/${card.img}.jpg" alt="Image Project">
            </div>
            <div class="card-body">
            <h3 class="bold two-rows">${card.title}</h3>
            <p class="description-two-rows">${card.description}</p>
            <p class="btn white bold"><i class="fas fa-arrow-right arrow-card"></i></p>
            <p class="text-shadow primary-yellow-background inline-block padding-btn card-yellow">${card.category}</p>
            </div>
            </a>             
            </div>`;
}

// Create blog cards
spaceBlogCards.forEach((card) => {
  apendCardsContainer.innerHTML += createBlogCard(card);
});

// Burger Menu BlogSpace

let blogSpaceBurgerMenu = document.querySelector("#spaceBlogBurger"),
  blogSpaceNav = document.querySelector(".blog-space-burger"),
  blogSpaceList = document.querySelectorAll(".blog-space-burger li a"),
  burgerMenuBlog = document.querySelector(".burger-menu-blog"),
  logoBlog = document.querySelector(".logo-blog");

function toggleSpaceMenu() {
  blogSpaceNav.classList.toggle("active");
  navMenuForBlogspace.classList.remove("active");
}
function closeSpaceMenu() {
  blogSpaceNav.classList.remove("active");
}
blogSpaceList.forEach((link) => {
  link.addEventListener("click", closeSpaceMenu);
});
blogSpaceBurgerMenu.addEventListener("click", toggleSpaceMenu);

// Main Burger For blogspace

let navMenuForBlogspace = document.querySelector("#navMenuForBlogSpace");
let burgerMenuForBlogspace = document.querySelector("#burgerMenuForBlogSpace");
let navMenuLinksMainBlogspace = document.querySelectorAll(
  "#navMenuForBlogSpace li a"
);

function toggleMenuMainBlogspace() {
  navMenuForBlogspace.classList.toggle("active");
  blogSpaceNav.classList.remove("active");
}
function closeMenuMainBlogspace() {
  navMenuForBlogspace.classList.remove("active");
}
navMenuLinksMainBlogspace.forEach((link) => {
  link.addEventListener("click", closeMenuMainBlogspace);
});
burgerMenuForBlogspace.addEventListener("click", toggleMenuMainBlogspace);

// Close menus on logo click
function closeMenus() {
  navMenuForBlogspace.classList.remove("active");
  blogSpaceNav.classList.remove("active");
}
logoBlog.addEventListener("click", closeMenus);
// BlogSpace filter

let categoryActive;

function filterCards(category) {
  if (categoryActive != category) {
    $(".card-filter").removeClass("active");
    $(".card-filter")
      .filter('[data-filter="' + category + '"]')
      .addClass("active");
    categoryActive = category;
    $(".btn-filter").removeClass("active");
  }
}

$(".card-filter").addClass("active");

$(".btn-filter").click(function () {
  if ($(this).hasClass("btn-filter-all")) {
    $(".card-filter").addClass("active");
    categoryActive = "btn-filter-all";
    $(".btn-filter").removeClass("active");
  } else {
    filterCards($(this).attr("data-filter"));
  }
  $(this).addClass("active");
});

// Blogspace Header 

$('.blog-space-header li a').click(function(){  
  if(!$(this).hasClass("active-blog-li")){
    $('.blog-space-header li a').removeClass('active-blog-li');
    $(this).addClass('active-blog-li');   
  }
})

let headerHeight = $("header").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".blog-space-header-cont").addClass("nav-fixed");
  } else {
    $(".blog-space-header-cont").removeClass("nav-fixed");
  }
  if ($(this).scrollTop() > headerHeight * 4) {
    $(".blog-space-header-cont").addClass("in-view");
  } else {
    $(".blog-space-header-cont").removeClass("in-view");
  }
});

// BlogspaceBurger 

$('.blog-space-burger-list li a').click(function(e){  
  e.preventDefault()
  if(!$(this).hasClass("active-blog-li-burger")){
    $('.blog-space-burger-list li a').removeClass('active-blog-li-burger');
    $(this).addClass('active-blog-li-burger');   
  }
})


// BlogSpace Carousel

let slideContainer = document.querySelector(".slideshow-container");

function renderCarousel(card) {
  return `<div class=" mySlides fade">
                <div class="absolute-div car-num-${card.id}" style="background-image: url('assets/images/${card.img}.jpg');">
                <div class="flex2 carousel-wrap">
                    <div class="center-carousel height">
                    <p class="carousel-btn-category text-shadow primary-yellow-background inline-block padding-btn bold text-uppercase">${card.category}</p>
                    <h1 class="text-shadow white font-size-h1-carousel text-left">${card.title}</h1>
                    <p class="white text-left font-size-p wid-p">${card.description}</p>
                    <a href="${card.href}" target="_blank" class="font-size-9 bold plus carousel-btn white-background "><i class="padding-right font-size-9 fas fa-arrow-right" aria-hidden="true"></i>Дознај повеќе</a>
                    </div>
                </div>
                </div>              
            </div>`;
}

// render all slides
spaceBlogCards.forEach((card) => {
  slideContainer.innerHTML += renderCarousel(card);
});

let slideLength = document.querySelector(".slide-lenght-num");
let slideNum = document.querySelector(".slide-num");
let slides = document.querySelectorAll(".mySlides");
let slideIndex = 0;
let interval;

function carousel() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
  slideNum.innerHTML = slideIndex;
  slideLength.innerHTML = slides.length;
}

function cycle(num) {
  if (num) {
    interval = setInterval(function () {
      carousel();
    }, 7000);
  } else {
    clearInterval(interval);
  }
}

carousel();
cycle(true);

function plusDivs(num) {
  clearInterval(interval);
  cycle(true);
  slideIndex += num - 1;
  carousel();
}
