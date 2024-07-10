let array = [3, 5, 10, 2, 8];

let media = array.reduce((acc, num)=>acc + num)/array.length;

let valoriMin = array.filter((n)=> n < media);

let valoriMag = array.filter((n)=> n > media);

console.log(`Media: ${media}.\nI valori minori della media sono ${valoriMin} per un totale di ${valoriMin.length} numeri.\nI valori maggiori della media sono ${valoriMag} per un totale di ${valoriMag.length} numeri.`);