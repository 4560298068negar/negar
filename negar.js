/*window.onload = init ;

function init(argument){
	alert('hellOOOooooooo');

	let h = document.getElementById('Nn');
	h.addEventListener('click', Headerclick);
}

function Headerclick(argument) {
		let h = document.getElementById('Nn');
		h.innerHTML = "negar";

}


window.onload=se;

function  se() {
	let btn = document.querySelector('#b2');
    btn.addEventListener('click', khar);

}
function  khar() {
	let p = document.querySelector('#k');
	p.innerHTML = "khar";
}
*/
//----------------------------------------------------------------------------------------
/*function initMap() {
  // The location of Uluru
  const uluru = { lat: 35.58905303130289 , lng: 53.40745205101589 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
*/


//search

/*window.onload=pap;


function  pap() {
	let button=document.getElementById('search');
	button.addEventListener=("click", "test1");


	
}
function  test1() {
	alert('yes')
	
}
*/
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
