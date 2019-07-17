
const test = require('tape');
const data = require('../public/js/logic');

test('Initial test', (t)=> {
    t.pass();
    t.end();
});
let response = {
    IsSuccess: true,
    UserMessage: null,
    TechnicalMessage: null,
    TotalCount: 250,
    Response: [
    {
    Name: "Afghanistan",
    Alpha2Code: "AF",
    Alpha3Code: "AFG",
    NativeName: "افغانستان",
    Region: "Asia",
    SubRegion: "Southern Asia",
    Latitude: "33",
    Longitude: "65",
    Area: 652230,
    NumericCode: 4,
    NativeLanguage: "pus",
    CurrencyCode: "AFN",
    CurrencyName: "Afghan afghani",
    CurrencySymbol: "؋",
    Flag: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/afg.svg",
    FlagPng: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/afg.png"
    } 
    ] }
test('testing for country API', (t)=> {
    t.deepEqual(data.getName(response),"Afghanistan","country name should be Afghanistan");
    t.deepEqual(data.getRegion(response),"Asia", "Region should be Asia");
    t.deepEqual(data.getSubRegion(response),"Southern Asia", "SubRegion should be Southern Asia");
    t.deepEqual(data.getCurrency(response), "؋", "currency symple should be ؋");
    t.deepEqual(data.getCurrName(response),"Afghan afghani", "currency name shouls be Afghan afghani");
    t.end();
});
