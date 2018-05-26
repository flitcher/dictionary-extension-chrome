let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;

let url = `https://api.wordnik.com/v4/word.json/
${word}
/definitions?limit=200
&includeRelated=false
&sourceDictionaries=all
&useCanonical=false
&includeTags=false
&api_key=91f1dfbb415256f52f2013b27935ee7e8ffa5ac02f8f7dd85`;

url = url.replace(/\s+/g, '');

$(function () {

	$.ajax({
		type: 'GET',
		url: url,
		success: function(data) {
			document.getElementById("userselect").innerHTML = data[0].text;
		}
	})
})

// document.getElementById("userselect").innerHTML = word;

