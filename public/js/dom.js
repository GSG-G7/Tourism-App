let selector = select => {
    return document.querySelector(select);
};
let creat = e => {
    return document.createElement(e);
};
let append = (to, e) => {
    to.appendChild(e);
};

const cityName = selector("#city-name");
const mainSec = selector("#mainSec");
const weatherSec = selector("#weather");

const weatherDate=creat('p');
weatherDate.id="weatherDate";
weatherDate.setAttribute("class","weather__date");
append(weatherSec,weatherDate);

const lastUpdate1 = creat("p");
lastUpdate1.id = "lastUpdate";
lastUpdate1.setAttribute("class", "weather__last-update");
append(weatherSec,lastUpdate1);

const time = creat("span");
time.id = "time";
time.setAttribute("class", "weather__time");
append(lastUpdate1,time);

const temp = creat("p");
temp.id = "temp";
temp.class = "weather__temp";
append(weatherSec, temp);

temp.setAttribute("class", "weather__temp");
const setuation = creat("p");
setuation.id = "setuation";
append(weatherSec, setuation);

setuation.setAttribute("class", "weather__setuation");
const icon = creat("img");
icon.id = "icon";
icon.setAttribute("class", "weather__icon");
append(weatherSec, icon);


