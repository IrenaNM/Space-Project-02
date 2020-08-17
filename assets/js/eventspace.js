let eventMainContainer = document.querySelector("#eventSpaceContainer"),
    eSpaceContainer = document.querySelector("#eSpaceContainer"),
    ourSpaceContainer = document.querySelector("#ourSpaceContainer"),
    kitchenPicContainer = document.querySelector("#kitchenPicContainer"),
    buttonsKitchenContainer = document.querySelector("#buttonsKitContainer"),
    weOfferContent = document.querySelector("#weOfferContainer"),
    eventHostContainer = document.querySelector("#eHostContainer");


function renderLeftElementWithBtnЕ(container, order, title,description, description1, description2, button, orderSecond, image) {
  container.innerHTML += `<div class="order-${order}" style="flex: 1 1 35%">
                             <h1 class="left-right-card-title font-size-h1">${title}</h1>
                             <p>${description}</p>
                             <p class="paragraph">${description1}</p>
                             <p>${description2}</p>
                           <div class="padding-buttons">
                                ${button}
                           </div>
                           </div>
                           <div class="card-im order-${orderSecond}" style="flex: 1 1 65%">
                               <img src="assets/images/Za_Nas/${image}.jpg" alt="Edukacija Prhoto">
                           </div>`;
}

function createButtonWithFontAwesome(id, color, colorbg, title, colorAwesome, awesomeIcon) {
  return `<a id="${id}" class="font-size-9 bold effect ${color} ${colorbg} plus"><i class="padding-right font-size-9 ${colorAwesome} ${awesomeIcon}" aria-hidden="true"></i>${title}</a>`;
}

function createImagesSpace(img, title) {
  return `<div class="flex5"><img src="assets/images/Renderi/${img}.jpg" alt="Edukacija Photo">
           <p class="text-shadow">${title}</p> </div>`;
}
function createSimpleBtn(icon, title) {
  return `<p class="font-size-9 bold flex white pad-mar black"><i class="padding-right font-size-9 primary-yellow ${icon}" aria-hidden="true"></i>${title}</p>`;
}
function renderESpaceContent(container, title, description, description2) {
  container.innerHTML += `<div class="order-1" style="flex: 1 1 25%" >
                               <h1 class="font-size-h1 left-right-card-title">${title}</h1>
                               <p>${description}</p>
                               <p class="paragraph">${description2}</p>
                            </div>
                            <div class="order-2" style="flex: 1 1 75%">
                              <div class="flex-images">                                  
                            </div>`;
}
function renderPicKicthenContent(container, title, description, description1) {
  container.innerHTML += `<div class="gridwrapper">
                          <div class="box a"></div>
                          <div class="box b"></div>
                          <div class="box c">
                            <div class="order-2">
                              <h1 class="font-size-h1 left-right-card-title">${title}</h1>
                              <p>${description}</p>
                              <p class="paragraph">${description1}</p>
                            </div>
                          </div>
                          <div class="box d"></div>
                          <div class="box e"></div>        
                          </div>`;
}
function renderEventHostContent(container, title, img) {
  container.innerHTML += `
  <div id="eventHostCont"class="event-host-content">
    <h1 class="font-size-h1 black-font text-center padding-home-title">${title}</h1>
      <p>Aња Макеска</p>
      <p class="paragraph">anja@brainster.co</p>
      <p>+389(0)70 233 414</p>
  </div>
  <div class="event-host-picture">
    <img src="assets/images/${img}" alt="">
  </div>
`;
}

function createEventContent() {
  renderESpaceContent(
    ourSpaceContainer,
    "Нашите простории",
    "Комплетно адаприбилни. Една сала со 150 учесници или три помали сали за групи од по 50 учесника. Училници за од 25 до 50 учесника.Избор од две локации.",
    "Пулт за прием. И најважно место за networking-Brainster Kitchen"
  );

  renderLeftElementWithBtnЕ(
    eSpaceContainer,
    "1",
    "Простори за настани",
    "Нашиот простор се прилагодува според потребите на вашиот настан. Седум различни простори и Space Kitchen.",
    " Наменски создадени да се прилагодуваат  и менуваат во согласност со типот на настан кој го организирате.",
    "Организираме конференции до 150 учесници и обуки и предавања за групи до 20 учесници. Контактирајте не за да ви хостираме одличен настан.",
    createButtonWithFontAwesome(
      "eventScrollBtn",
      "black",
      "primary-yellow",
      "БУКИРАЈ НЕ",
      "fas fa-arrow-right",
      "primary-yellow"
    ),
    "2",
    "prostorzanastani"
  );
  let containerPic = document.querySelector(".flex-images");

  arrayOfSpaceImages.forEach(pic => {
    containerPic.innerHTML += createImagesSpace(pic.img, pic.title);
  });

  renderPicKicthenContent(
    kitchenPicContainer,
    "Space Kitchen",
    "Место каде сите настани започнуваат и завршуваат. Место каде наииот тим готви и експреиментира. Нашата кујна има само едно правило.",
    "Храната мора да биде вегетаријанска.Пијалок, кафе или мезе.Вие одберете вид на кетеринг ние ќе го обезбедиме"
  );
  renderEventHostContent(eventHostContainer, "Event Host", "0.jfif");
  buttonsKitchenContainer.appendChild(weOfferContent);
  buttonsContent.forEach(el => {
    buttonsKitchenContainer.innerHTML += createSimpleBtn(el.icon, el.title);
  });
}
createEventContent();


// Scroll to 
$("#eventScrollBtn").click(function(){
$('html, body').animate({
  scrollTop: $(".scroll").offset().top - $(".brainser-space-header").height() // minus the nav fixed height
}, 1000);
});