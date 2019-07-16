
const place = "palestine";
const weatherApi = `http://api.apixu.com/v1/current.json?key=c0f2ccf7b56740debdb175933191507&q=${place}`;

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


let callBack = (respons) =>{
  let obj = {
    date: respons.current.last_updated,
    setution: respons.current.condition.text,
    urlIcon: respons.current.condition.icon,
    temp: respons.current.temp_c
  };
  console.log(obj);
  return obj;
}





const icon=selector('#icon');

selector("#btnSearch").addEventListener("click", (e) =>{
  e.preventDefault();
  server(weatherApi, callBack);


});



//module.exports = server;
