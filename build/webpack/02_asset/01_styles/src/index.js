import './style.css';

function component () {
	var element = document.createElement('div');

    // Lodash, now imported by this script
	element.innerHTML = 'Hello webpack';
	element.classList.add('hello');

	return element;
}

document.body.appendChild(component());