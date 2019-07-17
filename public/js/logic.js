function makeRequest(url, renderFunction) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            renderFunction(JSON.parse(xhr.responseText));
        }
    }
    xhr.open('GET', url);
    xhr.send();
};

function getName(res) {
    return res.Response.Name;
}
if (typeof module !== "undefined")
    module.exports = makeRequest;
const place = "palestine";
const weatherApi = `http://api.apixu.com/v1/current.json?key=c0f2ccf7b56740debdb175933191507&q=${place}`;

const lastUpdate = selector("#time");
const tempW = selector("#temp");
const setuationW = selector("#setuation");
const iconSetuationW = selector("#icon");
const dateW = selector("#weatherDate");

let server = (url, callBack) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let respons = JSON.parse(xhr.responseText);
      callBack(respons);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
};

let objRes = {};
let callBack = respons => {
  let obj = {
    date: respons.current.last_updated,
    setution: respons.current.condition.text,
    urlIcon: respons.current.condition.icon,
    temp: respons.current.temp_c
  };

  let arr = obj.date.split(" ");
  dateW.textContent = arr[0];
  lastUpdate.textContent = "Last Update: " + arr[1];
  tempW.textContent = obj.temp + " C °";
  setuationW.textContent = obj.setution;
  iconSetuationW.setAttribute("src", obj.urlIcon);
  return obj;
};

selector("#btnSearch").addEventListener("click", e => {
  e.preventDefault();
  server(weatherApi, callBack);
});


