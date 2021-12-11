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