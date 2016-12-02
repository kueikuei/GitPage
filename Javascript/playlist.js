window.onload = init;
function init(){
	var btn = document.getElementById('addButton');
	btn.addEventListener('click',eventHandler,false);
};


function eventHandler(){
	var ul = document.getElementById('playlist');
	var songText = document.getElementById('songTextInput');
	var songTextValue = songText.value;
	var li = document.createElement('li');
	li.innerHTML = songTextValue;
    ul.appendChild(li);
};