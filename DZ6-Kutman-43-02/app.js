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
                const btnTextNamesSeasons = document.createElement('button')
                btnTextNamesSeasons.style.backgroundColor = '#4389c7'
                btnTextNamesSeasons.innerText = item
                month.append(btnTextNamesSeasons)
            })
        }else if (btnSpring === e.target){
            const namesSeasonMonth = ["Март", "Апрель", "Май"]
            namesSeasonMonth.forEach(item => {
                const btnTextNamesSeasons = document.createElement('button')
                btnTextNamesSeasons.style.backgroundColor = '#0daa1a'
                btnTextNamesSeasons.innerText = item
                month.append(btnTextNamesSeasons)
            })
        }else if (btnSummer === e.target){
            const namesSeasonMonth = ["Июнь", "Июль", "Август"]
            namesSeasonMonth.forEach(item => {
                const btnTextNamesSeasons = document.createElement('button')
                btnTextNamesSeasons.style.backgroundColor = '#e2d407'
                btnTextNamesSeasons.innerText = item
                month.append(btnTextNamesSeasons)
            })
        }else if (btnAutumn === e.target){
            const namesSeasonMonth = ["Сентябрь", "Октоябрь", "Ноябрь"]
            namesSeasonMonth.forEach(item => {
                const btnTextNamesSeasons = document.createElement('button')
                btnTextNamesSeasons.style.backgroundColor = '#e4990f'
                btnTextNamesSeasons.innerText = item
                month.append(btnTextNamesSeasons)
            })
        }
    }
})


