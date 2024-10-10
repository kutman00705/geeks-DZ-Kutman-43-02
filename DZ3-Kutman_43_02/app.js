

let cars = ["Honda", "Audi", "BMW", "KIA", "Fiat", "Reno",];
let flags = {
    "Honda": "🇯🇵",
    "Audi": "🇩🇪",
    "BMW": "🇩🇪",
    "KIA": "🇰🇷",
    "Fiat": "🇮🇹",
    "Reno": "🇫🇷",
};
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i] + " " + flags[cars[i]]);
}





let points = [40, 55, 22, 89, 14, 78, 56, 47, 59];
let converResult = [];
for (let i = 0; i < points.length; i++)
{
    if (points[i] >= 0 && points[i] <= 20) {
        converResult.push(1); }
    else if (points[i] >= 21 && points[i] <= 40) {
        converResult.push(2); }
    else if (points[i] >= 41 && points[i] <= 60) {
        converResult.push(3); }
    else if (points[i] >= 61 && points[i] <= 80) {
        converResult.push(4); }
    else if (points[i] >= 81 && points[i] <= 100) {
        converResult.push(5); }
}
console.log(converResult);


let details = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961",];
let VisaCount = 0;
for (let i = 0; i < details.length; i++) {
    if (details[i].startsWith('4')) {
        VisaCount++;
    }
}
console.log(`Карт VISA ${VisaCount} из ${details.length}`);