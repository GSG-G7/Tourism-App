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

