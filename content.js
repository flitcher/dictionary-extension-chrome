console.log('content script!!!!!')

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
	let selectedText = window.getSelection().toString();
	console.log(selectedText);
}