var Base64 = require('Base64');

var g = typeof window !== 'undefined' &&
window.Math === Math ? window : typeof global === 'object' ? global : this;

polyfill(g || {});

function polyfill(object) {
	object.btoa || (
		delete object.btoa, 
		object.btoa = Base64.btoa
	);
	object.atob || (
		delete object.atob, 
		object.atob = Base64.atob
	);
}
