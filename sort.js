var urls = [
    "http://commercevirginia.co1.qualtrics.com/jfe/form/SV_bfPxhenFgQ8b5Hv",
    "http://commercevirginia.co1.qualtrics.com/jfe/form/SV_73d131eyve0P2Cx",
];

function randomsort() {
    var url = urls[Math.floor(Math.random()*urls.length)];
    echo url;
}