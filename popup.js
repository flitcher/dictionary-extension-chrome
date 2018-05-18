let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;

let url = `https://api.wordnik.com/v4/word.json/apple/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=YOURAPIKEY`;

document.getElementById("userselect").innerHTML = word;

