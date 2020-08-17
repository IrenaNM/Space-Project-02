let academiesMainContainer = document.querySelector("#academiesContainer"),
    academiesTitleContainer = document.querySelector("#academiesTitle"),
    academiesCardsContainer = document.querySelector("#academiesCards");

// Function to create Academies Title element

function renderAcademiesTitle(container, order, title, description, description1, description2, image) {
  container.innerHTML +=
   `<div class="order-${order}" style="flex: 1 1 35%">
      <h1 class="left-right-card-title font-size-h1">${title}</h1>
      <p>${description}</p>
      <p class="paragraph">${description1}</p>
      <p>${description2}</p>
    </div>
    <div class="card-im order-2" style="flex: 1 1 65%">
      <img src="assets/images/Nastani/${image}.jpg" alt="Edukacija Prhoto">
    </div>`;
}

// Function to create Academies cards

function renderAcademieCard(card) {
  return `<a href="${card.href}" target="_blank" class="academie-card"style=" background: url(${card.bgImg}) center no-repeat; background-size: cover;">                  
            <div class="academie-card-body">
              <div class="academie-header">
                <h1>${card.title}</h1>
              </div>
            <div class="academie-card-content">
              <div class="flex-start paragraph-1">
                <i class="fas fa-plug white"></i><p class="white">Слободни места: 4</p>
              </div>
              <div class="flex-start paragraph-1">
                <i class="far fa-calendar-alt white"></i><p class="white">Уписи до 26/08.2019</p>
              </div>
              <div class="flex-start paragraph-1">
                <i class="far fa-clock white"></i><p class="white">Стани дизајнер за 10 месеци</p>
              </div>
              <div class="flex-start paragraph-1">
                <i class="fas fa-hand-peace white"></i><p class="white">Партнери за вработување: 5</p>
              </div>
              </div>                  
            </div> 
          </a>`;
}


// Create content
renderAcademiesTitle(
  academiesTitleContainer,
  "1",
  "Академии",
  "Нашите академии ќе ти помогнат да ги совладаш најбараните вештини на денештницата преку интерактивна настава и практична работа на релани проекти.",
  "Инструктори кои се докажани експерти во својата област. Преку нив имаш моќност да ги научиш и предвидиш предизвиците на иднината на работење и да се поврзеш со сегашните и идните врвни професионалци и компании.",
  "Академиите ќе ти го отворат патот кон кариера каква посакуваш",
  "IMG_7481"
);

academiesCard.forEach(card => {
  academiesCardsContainer.innerHTML += renderAcademieCard(card);
});
