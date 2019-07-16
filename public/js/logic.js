

let add = document.getElementById('add');
add.addEventListener('click', function country (){
    var xhr = new XMLHttpRequest();
    console.log
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText)
            console.log(res);
            console.log(res.Response[0].Name);
            console.log(res.Response[0].Region);
            console.log(res.Response[0].SubRegion);
            console.log(res.Response[0].CurrencyName);
            console.log(res.Response[0].CurrencySymbol);
        }
    }
    xhr.open('GET',"http://countryapi.gear.host/v1/Country/getCountries");
    xhr.send()
});
