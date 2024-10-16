let coins = 0;
let energy = 200;

let coinCount = document.getElementById('coinCount');
let energyLevel = document.getElementById('energyLevel');
let hamster = document.getElementById('hamster');

hamster.addEventListener('click', () => {
    if (energy > 0) {
        coins += 20;
        energy -= 20;

        coinCount.textContent = coins;
        energyLevel.textContent = energy;
    } else {
        alert("У хамстера закончилась энергия!");
    }
});
