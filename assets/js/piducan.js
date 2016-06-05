/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
});

// document.body.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);
/*

document.body.addEventListener("mousedown", function(e){
	if(e.target.tagName.toLowerCase() === "input"||e.target.tagName.toLowerCase()=="textarea"){
	} else {
		e.preventDefault();
	}
});
document.body.addEventListener("contextmenu",function(e){
	if(e.target.tagName.toLowerCase() === "input"||e.target.tagName.toLowerCase()=="textarea"){
    } else {
    	e.preventDefault();
    }
});
*/