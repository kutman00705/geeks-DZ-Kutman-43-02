const btnWinter = document.querySelector('#winter')
const btnSpring = document.querySelector('#spring')
const btnSummer = document.querySelector('#summer')
const btnAutumn = document.querySelector('#autumn')
const arraySeason = [btnWinter, btnSpring,btnSummer,btnAutumn]
const month = document.querySelector('.month')
arraySeason.forEach((item) => {
    item.onclick = (e) => {
        month.innerHTML = ''
        if(btnWinter === e.target){
            const namesSeasonMonth = ["Декабрь", "Январь", "Февраль"]
            namesSeasonMonth.forEach(item => {
                document.body.style.backgroundImage = 'url(./images/zima.jpg)'
                const btnTextNamesSeasons = document.createElement('button')
                btnTextNamesSeasons.style.backgroundColor = '#4389c7'
                btnTextNamesSeasons.innerText = item
                month.append(btnTextNamesSeasons)
            })
        }else if (btnSpring === e.target){
            const namesSeasonMonth = ["Март", "Апрель", "Май"]
            namesSeasonMonth.forEach(item => {
                document.body.style.backgroundImage = 'url(./images/vesna.jpg)'
                const btnTextNamesSeasons = document.createElement('button')
                btnTextNamesSeasons.style.backgroundColor = '#0daa1a'
                btnTextNamesSeasons.innerText = item
                month.append(btnTextNamesSeasons)
            })
        }else if (btnSummer === e.target){
            const namesSeasonMonth = ["Июнь", "Июль", "Август"]
            namesSeasonMonth.forEach(item => {
                document.body.style.backgroundImage = 'url(./images/leta.jpg)'
                const btnTextNamesSeasons = document.createElement('button')
                btnTextNamesSeasons.style.backgroundColor = '#e2d407'
                btnTextNamesSeasons.innerText = item
                month.append(btnTextNamesSeasons)
            })
        }else if (btnAutumn === e.target){
            const namesSeasonMonth = ["Сентябрь", "Октоябрь", "Ноябрь"]
            namesSeasonMonth.forEach(item => {
                document.body.style.backgroundImage = 'url(./images/osen.jpg)'
                const btnTextNamesSeasons = document.createElement('button')
                btnTextNamesSeasons.style.backgroundColor = '#e4990f'
                btnTextNamesSeasons.innerText = item
                month.append(btnTextNamesSeasons)
            })
        }
    }
})





//
// function getMonthes(season) {
//     switch (season) {
//         case "winter":
//             return ["December", "January", "February"];
//         case "spring":
//             return ["March", "April", "May"];
//         case "summer":
//             return ["June", "July", "August"];
//         case "autumn":
//             return ["September", "October", "November"];
//     }
// }
//
// function getColorBySeason(season) {
//     switch (season) {
//         case "winter":
//             return "#4389c7";
//         case "spring":
//             return "#0daa1a";
//         case "summer":
//             return "#e2d407";
//         case "autumn":
//             return "#e4990f";
//     }
// }
//
// function getSeasonImagePath(season) {
//     return `images/${season}.jpg`;
// }
//
// let $seasons = document.querySelectorAll(".seasons button");
// let $monthes = document.querySelector(".monthes");
// for (const $season of $seasons) {
//     $season.addEventListener("click", () => {
//         $monthes.innerHTML = "";
//         let season = $season.innerText.toLowerCase();
//         let monthes = getMonthes(season);
//         for (const month of monthes) {
//             let $month = document.createElement("button");
//             $month.innerText = month;
//             $month.style.backgroundColor = getColorBySeason(season);
//             $monthes.append($month);
//             document.body.style.backgroundImage = `url('${getSeasonImagePath(
//                 season
//             )}')`;
//         }
//     });
// }
