window.onload=init;


function init() {
	let btns=document.getElementById('search');
	btns.addEventListener('click' , test1);


	
}
function  test1() {
	alert()
	let url = "https://www.google.com/search?q=site+digikala.ir"+ document.getElementById('in').value;
	window.open(url);
    
	
}