
const place = 'palestine'
const weatherApi= `http://api.apixu.com/v1/current.json?key=c0f2ccf7b56740debdb175933191507&q=${place}`;

let server =  (url, callBack) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        
        if(xhr.readyState === 4 && xhr.status === 200){
            let respons = JSON.parse(xhr.responseText);
            callBack(respons);
        }
    }
    
    xhr.open('GET', url, true);
    xhr.send();
}




server(weatherApi, (respons) => {
    console.log(true);
    // console.log(respons.current.last_updated);
    // console.log(respons.current.condition.text);
    // console.log(respons.current.condition.icon);
    // console.log(respons.current.temp_c);
    // console.log(respons.location.name)


})
