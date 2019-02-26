import './style.css';
import Icon from './pozadi-min.jpg';

function component () {
	var element = document.createElement('div');

    // Lodash, now imported by this script
	element.innerHTML = 'Hello webpack';
	element.classList.add('hello');

    // Add the image to our existing div.
	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());
