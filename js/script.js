var container = document.querySelector(".thumb-container");
var control = document.querySelector(".control");
var allBox = container.children;
var containerWidth = container.offsetWidth;
console.log(containerWidth);


let items = 0;
let margin = 20;
let totalItem =0;
let jumpSlideWidth=0;



var responsive = [
	{breakpoint:{width:250, item:1}},
	{breakpoint:{width:600, item:2}},
	{breakpoint:{width:900, item:4}},
]

function load(){
	for(let i=0; i<responsive.length; i++){
		if(window.innerWidth>responsive[i].breakpoint.width){
			items = responsive[i].breakpoint.item;
			
		}
	}
	console.log("items:" + items);
	console.log("width:" + window.innerWidth);
	start();
}



function start(){
	var totalWidth=0;
	for(let i=0; i<allBox.length; i++){
		allBox[i].style.width=(containerWidth/items)-margin + "px";
		allBox[i].style.margin=margin/2 + "px";
		totalWidth +=containerWidth/items;
		totalItem++;
		
	}
	container.style.width = totalWidth + "px";
	
}

// function controleSlide(element){
	// var ul = control.children;
	// var li = ul[0].children;
	// var active;
	
	// for(let i=0; i<li.length; i++){
		// if(li[i].className=="active"){
			// active=i;
			// li[i].className="";
		// }
	// }
	// element.className="active";
	// var numb = (element.id-1)-active;
	// jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
	// container.style.marginLeft=-jumpSlideWidth + "px";
	// console.log(li);
// }

window.onload= load();




var toggle = document.querySelector(".bar");
var menu = document.querySelector(".menu");
var closeBtn = document.querySelector(".close");


toggle.addEventListener("click", openFunction);
closeBtn.addEventListener("click", closeFunction);


function openFunction(){
	menu.style.left="0px";
	
}

function closeFunction(){
	menu.style.left="-250px";
}