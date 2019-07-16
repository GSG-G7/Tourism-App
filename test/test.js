var test = require("tape");
var server = require("../public/js/logic.js");

test("test for weather respons", t => {
  let actual = server(
    "http://api.apixu.com/v1/current.json?key=c0f2ccf7b56740debdb175933191507&q=palestine",
    respons => {
      let obj = {
        date: respons.current.last_updated,
        setution: respons.current.condition.text,
        urlIcon: respons.current.condition.icon,
        temp: respons.current.temp_c,
        name: respons.location.name
      };
      return obj;
    }
  );
  let excpected = {
    date: "2019-07-16 15:40",
    setution: "Sunny",
    urlIcon: "//cdn.apixu.com/weather/64x64/day/113.png",
    temp: 32,
    name: "Ramallah"
  };
  t.deepEqual(actual, excpected, "pass");

  t.end();
});
