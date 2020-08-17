let navMenuListItems = document.querySelectorAll(".links-inner li a"),
    homeContainer = document.querySelector("#homeContainer"),
    aboutUsContainer = document.querySelector(".about-us-cards"),
    educationContainer = document.querySelector(".education-container"),
    eventCardsContainer = document.querySelector(".events-cards"),
    eventContentContainer = document.querySelector(".event-container"),
    btnCalendarContainer = document.querySelector(".btn-calendar"),
    coworkingContainer = document.querySelector(".coworking-container"),
    partnersContainer = document.querySelector(".partners-container");

// Create Content

function createHomeContent() {
  cardsAboutUs.forEach((card) => {
    aboutUsContainer.innerHTML += createCard(card);
  });
  renderLeftElementWithBtn(
    educationContainer,
    "1",
    "Едукација",
    createButton("academiesBtn", "primary-yellow", "black", "АКАДЕМИИ"),
    "Дали си подготвен да одговориш на потребите на иднината.Вистински курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа на дигитален маркетинг, дизајн програмирање и Data Science. Дали си подготвен да одговориш на потребите на иднината?",
    "2",
    "edukacija1",
    createButton(
    "companiesBtn",
    "primary-yellow-background",
    "primary-yellow-background ",
    "ЗА КОМПАНИИ"
    )
  );
  cardsEvents.forEach((card) => {
    eventCardsContainer.innerHTML += createCard(card);
  });

  btnCalendarContainer.innerHTML += createButtonWithFontAwesome(
    "calendarButtonHome",
    "black",
    "primary-yellow",
    "КАЛЕНДАР НА НАСТАНИ",
    "far fa-calendar-alt",
    "primary-yellow"
  );
  coworkingContent(
    coworkingContainer,
    "coworking",
    createButtonYellow("primary-yellow-background", "SOLD OUT"),
    "Coworking",
    "Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го својот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.",
    createButton("coworkingBtn", "primary-yellow", "black", "РЕЗЕРВИРАЈ МЕСТО")
  );
  renderLeftElementWithBtn(
    eventContentContainer,
    "1",
    "Простор за настани",
    createButtonWithFontAwesome(
    "nastaniBtn",
    "black",
    "primary-yellow",
    "ВИДИ ГО ПРОСТОРОТ",
    "fas fa-arrow-right",
    "primary-yellow"
    ),
    "Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу одговара на твојата идеја.Го задржуваме правото да одбереме кој настан ќе организира во нашиот Brainster Space",
    "2",
    "prostorzanastani"
  );
  partnersContainer.innerHTML += createButtonWithFontAwesome(
    "partnersBtn",
    "black",
    "primary-yellow",
    "ВИДИ ГО ПРОСТОРОТ",
    "fas fa-arrow-right",
    "primary-yellow"
  );
}
createHomeContent();

let modalPartnership = document.querySelector("#modalPartnership"),
    modalInovations = document.querySelector("#modalInovations"),
    partnershipModal = document.querySelector(".partnershipCard"),
    inovationCompaniesButton = document.querySelector(".educationTwoCard"),
    inovationForm = document.querySelector("#inovationForm"),
    calendarBtn = document.querySelector("#calendarButtonHome"),
    goToEventsBtn = document.querySelector("#nastaniBtn"),
    goToEventsBtnTwo = document.querySelector("#partnersBtn");

inovationForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
partnershipModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalPartnership.style.display = "block";
});
inovationCompaniesButton.addEventListener("click", function (e) {
  e.preventDefault();
  modalInovations.style.display = "block";
});


// Creates Cards
function createCard(card) {
  return `<div class="card ${card.id}">
            <a href="${card.href}" target="${card.target}">
          <div class="card-photo">
            <img src="assets/images/${card.img}.jpg" alt="Image Project">
          </div>
          <div class="card-body">
            <h3 class="bold">${card.title}</h3>
            <p class="description-two-rows">${card.description}</p>
            <p class="btn white bold"><i class="fas fa-arrow-right arrow-card"></i></p>
          </div>
          </a>             
          </div>`;
}

// Creates elements Left or Right Ordered one or two
function renderLeftElementWithBtn(
  container,
  order,
  title,
  button,
  description,
  orderSecond,
  image,
  another
) {
  if (another) {
    container.innerHTML += `<div class="order-${order}" style="flex: 1 1 40%">
                              <h1 class="left-right-card-title font-size-h1">${title}</h1>
                              <p class="comp">${description}</p>
                            <div class="padding-buttons">
                              ${button} ${another}
                            </div>
                            </div>
                            <div class="card-im order-${orderSecond}" style="flex: 1 1 60%">
                              <img class="img-toggle" src="assets/images/Za_Nas/${image}.jpg" alt="Edukacija Prhoto">
                            </div>`;
  } else {
    container.innerHTML += `<div class="order-${order}" style="flex: 1 1 40%">
                              <h1 class="left-right-card-title font-size-h1">${title}</h1>
                              <p>${description}</p>
                            <div class="padding-buttons">
                                ${button}
                            </div>
                            </div>
                            <div class="card-im order-${orderSecond}" style="flex: 1 1 60%">
                              <img src="assets/images/Za_Nas/${image}.jpg" alt="Edukacija Prhoto">
                            </div>`;
  }
}
// Creates button like Sold Out
function createButtonYellow(bgColor, title) {
  return `<p class="text-shadow ${bgColor} inline-block padding-btn bold ">${title}</p>`;
}
// Creates button based on color
function createButton(id, color, colorbg, title) {
  return `<a id="${id}" class=" font-size-9 bold padding-btn effect ${color} ${colorbg} plus">${title}</a>`;
}
// Creates button based on color and font awesome icon
function createButtonWithFontAwesome(id, color, colorbg, title, colorAwesome, awesomeIcon) {
  return `<a id="${id}" class="font-size-9 bold effect ${color} ${colorbg} plus"><i class="padding-right font-size-9 ${colorAwesome} ${awesomeIcon}" aria-hidden="true"></i>${title}</a>`;
}

// Creates Coworking Content

function coworkingContent(container, img, button, title, description, btn) {
  container.innerHTML += `<div style="flex: 1 1 60%">
                            <img class="border-radius" src="assets/images/Za_Nas/${img}.jpg" alt="Edukacija Photo">
                          </div>
                          <div class="padi" style="flex: 1 1 40%">
                              ${button}
                            <h1 class="left-right-card-title font-size-h1">${title}</h1>
                            <p class="text-crossed">${description}</p>
                          <div class="padding-buttons">
                             ${btn}
                          </div>
                          <div class="showErrorCoworking inline-block text-shadow border-bottom-yellow"><span>Местата се распродадени</span></div>
                          </div>`;
}

// Coworking button show div

document.querySelector("#coworkingBtn").addEventListener("click", function () {
  let showError = document.querySelector(".showErrorCoworking");
  showError.style.opacity = "1";
  this.style.textDecoration = "line-through";
});

// Toggle the buttons content and picture

let educationTitle = document.querySelector(".left-right-card-title");
let educationParagraph = document.querySelector(".comp");
let educationPhoto = document.querySelector(".img-toggle");

document.querySelector("#companiesBtn").addEventListener("click", function () {
  let newTitle = "Компании";
  let newParagraph =
    "Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани обуки кои одговараат на реалните потреби.";
  let newImgSrc = "assets/images/Za_Nas/edukacija.jpg";
  educationTitle.innerHTML = newTitle;
  educationParagraph.innerHTML = newParagraph;
  educationPhoto.src = newImgSrc;
});
document.querySelector("#academiesBtn").addEventListener("click", function () {
  let newTitle = "Едукација";
  let newParagraph =
    "Дали си подготвен да одговориш на потребите на иднината.Вистински курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа на дигитален маркетинг, дизајн програмирање и Data Science. Дали си подготвен да одговориш на потребите на иднината?";
  let newImgSrc = "assets/images/Za_Nas/edukacija1.jpg";
  educationTitle.innerHTML = newTitle;
  educationParagraph.innerHTML = newParagraph;
  educationPhoto.src = newImgSrc;
});

// Hash on btns

function goToEventSpace(){
  location.hash = '#eventspace';
}
function goToCalendar () {
  location.hash = '#calendar';
}
document.querySelector('#nastaniBtn').addEventListener('click', goToEventSpace);
document.querySelector('#partnersBtn').addEventListener('click', goToEventSpace);
document.querySelector('#calendarButtonHome').addEventListener('click', goToCalendar);

// Modal Form Error

let nameInputModal = document.querySelector("#nameInputError"),
    phoneinputModal = document.querySelector("#phoneNumber"),
    companyInputModal = document.querySelector("#companyInputModal"),
    textAreaInputModal = document.querySelector("#textAreaError"),
    formError = document.querySelector("#formError"),
    alertMessage = document.querySelector("#name-error"),
    alertMessagePhone = document.querySelector("#phone-error"),
    inputErrors = document.querySelectorAll(".inputErrors");

let nameError;
let emailError;

function validateForm(e) {
  e.preventDefault();
  let valid = true;
  let nameValue = nameInputModal.value;
  let phoneValue = phoneinputModal.value;

  if (nameValue === "") {
    nameError = "Внесете име и презиме";
    alertMessage.innerHTML = nameError;
    valid = false;
  }

  if (phoneValue === "") {
    emailError = "Внесете телефонски број";
    alertMessagePhone.innerHTML = emailError;
    valid = false;
  } 
  else {
    nameInputModal.value = "";
    phoneinputModal.value = "";
    companyInputModal.value = "";
    textAreaInputModal.value = "";
    return valid;
  }
}
function removeWarningName() {
  alertMessage.innerHTML = "";
}
function removeWarningPhone() {
  alertMessagePhone.innerHTML = "";
}
formError.addEventListener("submit", validateForm);
nameInputModal.addEventListener("keyup", removeWarningName);
phoneinputModal.addEventListener("keyup", removeWarningPhone);


