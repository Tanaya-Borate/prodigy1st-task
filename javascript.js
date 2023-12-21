// JavaScript Document
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click",function() {
	navbar.classList.toggle("active");
});

window.onscroll=()=>{
	navbar.classList.remove("active");
};
$(document).ready(function(){
	$(".invisible-content").hide();
	$(document).on('click',"#btn",function(){
		var morelessButton=$(".invisible-content").is(".visible")?'Read Less':'Read More';
		$(this).text(morelessButton);
		$(this).parent(".about-text").find(".visible-content").toggle();
		$(this).parent(".about-text").find(".invisible-content").toggle();
	});
});