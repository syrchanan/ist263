// hamburger js

function turn_nav_on_off() {
    if (document.getElementById("navlinks").style.getPropertyValue("display") == "block") {
        document.getElementById("navlinks").style.display = "none";
        document.getElementById("hamicon").style.display = "block";
        document.getElementById("x").style.display = "none";

    }
    else {
        document.getElementById("navlinks").style.display = "block";
        document.getElementById("hamicon").style.display = "none";
        document.getElementById("x").style.display = "block";
    }

}

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

// map_open_close

function modal_map() {
    document.getElementById("modal_map").style.display = "block";
    document.getElementById("open_map").style.display = "none";
    document.getElementById("close_map").style.display = "block";
}
function modal_close() {
    document.getElementById("modal_map").style.display = "none";
    document.getElementById("open_map").style.display = "block";
    document.getElementById("close_map").style.display = "none";
}

//dark mode

function light_mode() {
    localStorage.setItem("mode", "light")
    document.getElementById("dark").style.display = "block";
    document.getElementById("light").style.display = "none";
    document.body.style.backgroundColor = "#f7f7f7"
    document.getElementById("main").style.backgroundColor = "#ebebeb";
    document.getElementById("main").style.border = "1px solid #f9f9f9";
    document.querySelectorAll('p, h1, h2, th, td, li').forEach(e => e.style.color = "black");
    document.querySelectorAll('tr:nth-child(odd)').forEach(e => e.style.backgroundColor = "#b2c5cf");
    document.querySelectorAll('footer p, footer h2').forEach(e => e.style.color = "#f7f7f7");
}
function dark_mode() {
    localStorage.setItem("mode", "dark")
    document.getElementById("dark").style.display = "none";
    document.getElementById("light").style.display = "block";
    document.body.style.backgroundColor = "#080808";
    document.getElementById("main").style.backgroundColor = "#141414";
    document.getElementById("main").style.border = "1px solid #060606";
    document.querySelectorAll('p, h1, h2, th, td, li').forEach(e => e.style.color = "#f7f7f7");
    document.querySelectorAll('tr:nth-child(odd)').forEach(e => e.style.backgroundColor = "#50575b");
    document.querySelectorAll('footer p, footer h2').forEach(e => e.style.color = "#f7f7f7");
}

function load_mode() {
    const mode = localStorage.getItem("mode");
    if(mode == "dark") {
        dark_mode();
    }
    else {
        light_mode();
    }
}
