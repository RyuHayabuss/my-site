let ty = document.querySelector ('.leto');
let tu = document.querySelector('caption');
ty.classList.remove('leto');
/*let fe = document.querySelector('');
let re = document.querySelector('');
let qe = document.querySelector('');*/
//qe.classList.remove('');
ty.onclick = function() { 
ty.classList.toggle('leto');
tu.textContent = 'LEGEND';
//.classList.add('');
};


let tii = document.querySelector('.bit1');
let tiii = document.querySelector('.ta');
let er = document.querySelector('.net');
tii.onsubmit = function(evt){
	evt.preventDefault();

console.log(tiii.value);
er.textContent = tiii.value;
};
/*ti.classList.toggle('caption');*/