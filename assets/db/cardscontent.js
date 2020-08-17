let cardsAboutUs = [
  {
    id: "educationOneCard",
    img: "Za_Nas/edukacija",
    title: "Едукација",
    target: "_blank",
    href: "https://brainster.co/",
    description:
      "Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани обуки."
  },
  {
    id: "eventCard",
    img: "Za_Nas/nastani",
    title: "Настани",
    target: "_self",
    href: "#calendar",
    description:
      "Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани."
  },
  {
    id: "coworkingCard",
    img: "Za_Nas/coworking",
    title: "Coworking",
    target: "_self",
    href: "#",
    description:
      "Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го својот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии."
  },
  {
    id: "eventSpaceCard",
    img: "Za_Nas/prostorzanastani",
    title: "Простор за настани",
    href: "#eventspace",
    target: "_self",
    description:
      "Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани."
  },
  {
    id: "partnershipCard",
    img: "Za_Nas/edukacija1",
    title: "Партнерства со компании",
    target: "_self",
    href: "#",
    description:
      "Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии..."
  },
  {
    id: "educationTwoCard",
    img: "Za_Nas/edukacija2",
    title: "Иновации за компании",
    target: "_self",
     href: "#",
    description:
      "Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација."
  }
];

let cardsEvents = [
  {
    id: "eventOne", 
    img: "Nastani/IMG_7481",
    title: "CodeWorks",
    target: "_blank",
    href:
      "https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152",
    description:
      "Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да нучат што е ново во tech заедницата. Настан кој ги поврзува mid програмерите со IT компаниите. Deep Dive Intensive Seminar. Ексклузивни семинари кои комбинираат три различни техники на учење."
  },
  {
    id: "eventTwo",
    img: "Nastani/instruktori",
    title: "Deep Dive into Marketing",
    href: "https://deepdive.brainster.co/",
    target: "_blank",
    description:
      "Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа на макетингот."
  },
  {
    id: "eventThree",
    img: "Nastani/Hristijan-Nosecka-1024x536",
    title: "Deep Dive into Data Science",
    href: "https://blog.brainster.co/deepdive_ds/",
    target: "_blank",
    description:
      "Од искуството на студентите на нашата академија, решивме да ви помогнеме со неколку tips за потребните skills за да започнете да работите Data Science."
  }
];

let spaceBlogCards = [
  {
    id: "1",
    img: "Space_Blog_Kartici/Marketing-1920x1080-1",
    title: "Deep Dive семинари кои ќе овозможуваат брз кариерен напредок",
    href: "https://blog.brainster.co/deepdive_ds/",
    category: "КАРИЕРА",
    description:
      "Нов продукт од Brainster во Brainster Space. Интензивни дводневни семинари кои ќе ти помогнат од Mid Level брзо да го постигнеш твојот Senior напредок."
  },
  {
    id: "2",
    img: "Space_Blog_Kartici/brainster12",
    title: "Ако не те бива за програмирање дали можеш да имаш кариера во Tech?",
    href: "https://blog.brainster.co/kariera-vo-tech-za-neprogrameri/",
    category: "КАРИЕРА",
    description:
      "Tech индустријата е најпосакуваната област за работа, заради големата побарувачка, секојдневните промени и големиот инкам."
  },
  {
    id: "3",
    img: "Space_Blog_Kartici/OFIS LEASURE_01_1",
    title: "Што тоа значи денес, твојата канцеларија да е Smart?",
    href:
      "https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152",
    category: "ТЕХНОЛОГИЈА",
    description:
      "На отворањето на Brainster Space, добивме супер подарок - Smart home уред. Голем дел од нас беа збунети за тоа што се можеме да добиеме од него."
  },
  {
    id: "4",
    img: "Space_Blog_Kartici/1_xX6Cpskem0SbqQuPZ8R-4g",
    title: "Како до кариера во Data Science? Прва академија на Brainster.",
    href:
      "https://datascience.brainster.co/?gclid=Cj0KCQjw09HzBRDrARIsAG60GP8XkyYufCWazlR0_ElLbbJ4c9iFPBHsa6mU_j9D3rKu9n5ph-j-5F8aAtlGEALw_wcB",
    category: "Data Science",
    description:
    "На Laika, Tech професионалците можат да аплицираат на отворени позиции во 4 држави и да добиваат работни понуди од IT компаниите – врз база на вештините, задржувајќи го својот идентитет.",
  },
  {
    id: "5",
    img: "Space_Blog_Kartici/instruktori",
    title:
      "Интервју со Николај Ванчев, арт Директор во Tank Естонија.",
    href: "https://blog.brainster.co/deep-dive-marketing-nikolai-vanchev/",
    category: "Маркетинг",
    description:
      "Николај Ванчев е Creative Director во TANK(Естонија). Неговата успешна 12 годишна кариера како арт Директор тој ја гради во реномирани агенции..."
  },
  {
    id: "6",
    img: "Space_Blog_Kartici/Untitled-design-5-1200x600",
    title: "Зошто Дизајн? Накратко со Дијана Димитриевска #SpaceFamily",
    href: "https://blog.brainster.co/akademija-za-dizajn-brainster-2/",
    category: "Дизајн",
    description:
      "Интервју со Дијана Димитриевска, графички дизајнер, DJ и инструктор на Академијата за графички дизајн во Brainster"
  },
  {
    id: "7",
    img: "Space_Blog_Kartici/tumblr_ovyswyxMYJ1stn28do1_1280",
    title: "Што е потребно за добар мобиле дизајн? 5 добри практики.",
    href: "https://blog.brainster.co/idei-za-mobilen-dizajn/",
    category: "Дизајн",
    description:
      "UX/UI дизајнерите се дигитални продукт дизајнери. Нашата задача е да создадат корисен, релевантен и едноставен за корисниците продукт."
  },
  {
    id: "8",
    img: "Space_Blog_Kartici/Team-Picture-1200x600",
    title:
      "Македонско-Американската компанија Upshift со инвестиција од 3.7 милиони",
    href: "https://blog.brainster.co/upshift-macedonia/",
    category: "Impact",
    description:
      "Он-дименд, платформата за работа се шири со нова рунда финансирање предводена од Recruit која е најголемата HR Tech компанија во светот..."
  },
  {
    id: "9",
    img: "Space_Blog_Kartici/20191128_141433810_iOS-1200x600",
    title: "Локалната апликација Challenger и нејзиниот Impact. #SpaceFamily",
    href:
      "https://blog.brainster.co/4-godini-rodenden-vrednosti-have-emoathy-challenger/",
    category: "Impact",
    description:
      "Мисијата на Challenger е создавање општествено одговорна заедница која создава позитивна промена преку развивање на подобри индивидуални навики."
  }
];
const eventsData = [
  {
      date: new Date(2020, 3, 4),
      title: 'Deep dive into Data Science Ден 1',
      time: '10:00 - 12:00',
      bgColor: 'red',
      color: 'white'
  },
  {
      date: new Date(2020, 3, 8),
      title: 'Deep dive into Data Science Ден 2',
      time: '10:00 - 12:00',
      bgColor: 'red',
      color: 'white'
  },
  {
      date: new Date(2020, 3, 15),
      title: 'Deep dive into Marketing Ден 1',
      time: '10:00 - 12:00',
      bgColor: 'indigo',
      color: 'white'
  },
 
  {
      date: new Date(2020, 3, 20),
      title: 'Deep dive into Marketing Ден 2',
      time: '10:00 - 12:00',
      bgColor: 'indigo',
      color: 'white'
  }
]

let arrayOfSpaceImages = [
  {
  img: "0",
  title: "Brainster"
},
{
  img: "1",
  title: "Конференциска сала"
},
{
  img: "2",
  title: "Сала со бина"
},
{
  img: "3",
  title: "Адаптибилна училница"
},
{
  img: "4",
  title: "Училница"
},
{
  img: "5",
  title: "Канцелариски простор"
},
{
  img: "6",
  title: "Хол"
},
{
  img: "7",
  title: "Училница"
},
{
  img: "8",
  title: "Space Kitchen"
},
]

let buttonsContent = [
  {
  icon: "fas fa-globe", 
  title:"Простор",
},
  {
  icon: "fas fa-utensils", 
  title:"Space Kitchen",
},
  {
  icon: "fas fa-globe", 
  title:"логистика",
},
  {
  icon: "fas fa-concierge-bell", 
  title:"Техничка Поддршка",
},
  {
  icon: "fas fa-volume-up", 
  title:"Звук",
},
  {
  icon: "fas fa-lightbulb", 
  title:"Светло",
},
  {
  icon: "fas fa-sitemap", 
  title:"Помош при организација",
},
  {
  icon: "fas fa-photo-video", 
  title:"Видео и Фотографија",
},
  {
  icon: "fab fa-facebook", 
  title:"Промоција на социјални мрежи",
},
]

let academiesCard = [
  {
  href: "https://design.brainster.co/",
  title: "Академија за графички дизајн",
  bgImg: "https://brainster.co/storage/academy_1574434268.jpg"
},
  {
  href: "https://marketpreneurs.brainster.co/",
  title: "Академија за дигитален маркетинг",
  bgImg: "https://brainster.co/storage/academy_1574507099.png"
},
  {
  href: "http://codepreneurs.co/",
  title: "Академија за Front-End програмирање",
  bgImg: "https://brainster.co/storage/academy_1574507399.png"
},
  {
  href: "http://codepreneurs.co/",
  title: "Академија за Full-Stack програмирање",
  bgImg: "https://brainster.co/storage/academy_1574507592.png"
},
  {
  href: "https://datascience.brainster.co/",
  title: "Академија за Data Science",
  bgImg: "https://brainster.co/storage/academy_1574508115.png"
},
  {
  href: "https://qa.brainster.co/",
  title: "Академија за Software Testing",
  bgImg: "https://brainster.co/storage/academy_1574507930.png"
},
]