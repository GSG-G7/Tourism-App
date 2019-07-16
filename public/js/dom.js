let selector = (select) =>{return document.querySelector(select)};
let creat = (e) => {return document.createElement(e)}
let append = (to, e) => {to.appendChild(e)};

const cityName= selector('#city-name');
const mainSec=selector('#mainSec')

const weatherSec = creat('section');
const weatherDate = creat('article');
weatherDate.id='weatherDate';
const temp = creat('article');
temp.id='temp';
const setuation = creat('article');
setuation.id='setuation';
const icon=creat('spane');
icon.id='icon';

append(mainSec,weatherSec);
append(weatherSec, weatherDate);
append(weatherSec, temp);
append(weatherSec, setuation);
append(weatherSec, icon);








