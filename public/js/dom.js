let selector = select => {
    return document.querySelector(select);
};
let creat = e => {
    return document.createElement(e);
};
let append = (parent, e) => {
    parent.appendChild(e);
};

const flag = creat('img');
const name = creat('p');
const region = creat('p');
const subRegion = creat('p');
const currency = creat('p');
const weatherDate=creat('p');
const lastUpdate1 = creat("p");
const time = creat("span");
const icon = creat("img");
const setuation = creat("p");
const temp = creat("p");
time.setAttribute("class", "weather__time");
lastUpdate1.setAttribute("class", "weather__last-update");
weatherDate.setAttribute("class","weather__date");
temp.setAttribute("class", "weather__temp");
setuation.setAttribute("class", "weather__setuation");
icon.setAttribute("class", "weather__icon");
setuation.id = "setuation";
weatherDate.id="weatherDate";
lastUpdate1.id = "lastUpdate";
time.id = "time";
temp.id = "temp";
icon.id = "icon";
temp.class = "weather__temp";
let mainSec = selector("#mainSec");
let weatherSec = selector("#weather");
append(weatherSec,weatherDate);
append(weatherSec,lastUpdate1);
append(lastUpdate1,time);
append(weatherSec, temp);
append(weatherSec, setuation);
append(weatherSec, icon);
let lastUpdate = selector("#time");
let tempW = selector("#temp");
let setuationW = selector("#setuation");
let iconSetuationW = selector("#icon");
let dateW = selector("#weatherDate");
let cityName = selector("#city-name");
let add = selector('#btnSearch');
let container = selector(".container");
let url1 ='http://countryapi.gear.host/v1/Country/getCountries';


/* Country API */

add.addEventListener('click', function country (e){
    e.preventDefault();
    const place = cityName.value.trim();
    let url1 =`http://countryapi.gear.host/v1/Country/getCountries/?pName=${place}`;
    makeRequest(url1, renderUserInfo);
    const url2 = `http://api.apixu.com/v1/current.json?key=c0f2ccf7b56740debdb175933191507&q=${place}`;
    makeRequest(url2, callBack);
});
let callBack = respons => {
    let arr = respons.current.last_updated.split(" ");
    dateW.textContent = arr[0];
    lastUpdate.textContent = "Last Update: " + arr[1];
    tempW.textContent = respons.current.temp_c + " C °";
    setuationW.textContent = respons.current.condition.text;
    iconSetuationW.setAttribute("src", respons.current.condition.icon);
  };

function renderUserInfo(result) {
    console.log(result.Response[0].Name)

    flag.src = result.Response[0].Flag;
    name.textContent = `Country name is: ${data.getName(result)}`;
    region.textContent = `Country region: ${data.getRegion(result)}`;
    subRegion.textContent = `Country sub-region: ${data.getSubRegion(result)}`;
    currency.textContent = `Country currency: ${data.getCurrency(result)}  ${data.getCurrName(result)}`;
    append(container,flag);
    append(container,name);
    append(container,region);
    append(container,subRegion);
    append(container, currency);
};