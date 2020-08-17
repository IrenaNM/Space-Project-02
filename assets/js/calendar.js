let today = new Date(); // get todays date
let currentMonth = today.getMonth(); // get current month 0 - 11 ... Jan - Dec
let currentYear = today.getFullYear(); // get full/long year 2020
let months = ['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']; 
let calendarContainer = document.querySelector('#calendarContainer');
let calendarCont = document.querySelector(".calendar-add-more")

let nextBtn = document.querySelector('#nextMonth');
let prevBtn = document.querySelector('#prevMonth');

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

renderCalendar(currentMonth, currentYear, eventsData);

function next() {
    currentYear = (currentMonth == 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    calendarCont.innerHTML = "";   
    renderCalendar(currentMonth, currentYear, eventsData);
}

function prev() {
    currentYear = (currentMonth == 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth == 0) ? 11 : currentMonth - 1;
    calendarCont.innerHTML = "";   
    renderCalendar(currentMonth, currentYear, eventsData);
}

function renderCalendar(month, year, events) {
    let renderToday = new Date();
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let calendar = document.querySelector('#calendar-body');
    let monthAndYear = document.querySelector('#montyAndYear')
    monthAndYear.innerHTML = `${months[month]} ${year}`;
    calendar.innerHTML = '';

    let thisYearAndMonthEvents = events.filter(event => event.date.getFullYear() == year && event.date.getMonth() == month);

    let date = 1;

    for (let i = 0; i < 6; i++) {

        let week = document.createElement('div');
        week.classList.add('calendar-week');
        for (let j = 0; j < 7; j++) {

            if (i == 0 && j < firstDay) {
                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty-cell');
                week.appendChild(emptyCell);

            } else if (date <= daysInMonth) {
                let dayCell = document.createElement('div');
                dayCell.classList.add('day-cell', 'gray-background');

                if (date == renderToday.getDate() && month == renderToday.getMonth() && year == renderToday.getFullYear()) {
                    dayCell.classList.add('today');
                }
                let dayCellHTML = '';

                // if there are events in current month and current year
                if (thisYearAndMonthEvents.length) {
                    let todayEvent = thisYearAndMonthEvents.filter(event => event.date.getDate() == date);
                    if (todayEvent.length) {
                        dayCell.classList.add('event-day');                         
                        todayEvent.forEach(ev => {
                            dayCellHTML += `<div class="event"><div class="${ev.color}">${ev.title}</div><div class="${ev.color}">${ev.time}</div></div><span class="${ev.color}">${date}</span>`;
                            dayCell.style.backgroundColor = ev.bgColor;
                            dayCell.style.color = ev.color;
                        
                        // To show every first event of category
                            let filtered = todayEvent.filter(el => el.title.includes('1'));
                            if (filtered.length) {     
                                                     
                              calendarCont.innerHTML += `<div style="border-left:5px solid ${ev.bgColor}" class="next-ev-content">
                              <div class="nex-ev-time white">${date}/${month}/${year}</div>
                              <div class="next-ev-title bold white">${ev.title}</div>
                              <div class="next-ev-time white">${ev.time}</div>
                              </div>`
                            }       
                        });
                    }
                }
                dayCell.innerHTML = (dayCellHTML == '') ? `<span>${date}</span>` : dayCellHTML;
                week.appendChild(dayCell);
                date++;
            } else if (date > daysInMonth) {
                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty-cell');
                week.appendChild(emptyCell);
            }
        }
        calendar.appendChild(week);
    }
}
