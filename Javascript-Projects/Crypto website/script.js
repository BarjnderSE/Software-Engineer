var btc=document.getElementById("bitcoin");
var btc=document.getElementById("ethereum");
var btc=document.getElementById("dogecoin");



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (response) {
    // Assuming response is in the format: { bitcoin: { usd: price1 }, ethereum: { usd: price2 }, dogecoin: { usd: price3 } }
    $('#bitcoin').text('$' + response.bitcoin.usd);
    $('#ethereum').text('$' + response.ethereum.usd);
    $('#dogecoin').text('$' + response.dogecoin.usd);
});
