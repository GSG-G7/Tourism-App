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

let data = {
    getName:(res)=>{
        return res.Response[0].Name;
    },
    getRegion:(res)=>{
        return res.Response[0].Region;
    },
    getSubRegion:(res)=>{
        return res.Response[0].SubRegion;
    },
    getCurrency:(res)=>{
        return res.Response[0].CurrencySymbol;
    },
    getCurrName:(res)=>{
        return res.Response[0].CurrencyName;
    }
}

if (typeof module !== "undefined"){
    module.exports = data;
}


