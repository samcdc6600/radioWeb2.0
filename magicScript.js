var audio = new Audio('https://cast-1.nucleusstreaming.com:4443/pbsfm_live_64.aacp');
var playing = false;


// document.onload = function script()
// {
//     console.log("body loaded");
// }
document.onreadystatechange = function()
{
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
    { // We are on a mobile device.
	if(location.pathname.indexOf("M.html") == -1)
	{   // "M.html" wasn't in the path name.
	    // Replace ".html" in the path name with "M.html" and load page at path.
	    window.location.replace(location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1) + location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf(".html")) + "M.html");
	}
    }
}


window.addEventListener("load", function(){
    console.log("body loaded");

    // image is already loaded
    if(document.querySelector("#mainBackground").complete) {
	console.log("complete");
	// var image_width_actual = document.querySelector("#mainBackground").naturalWidth;
	// var image_height_actual = document.querySelector("#mainBackground").naturalHeight;

	// var image_width_rendered = document.querySelector("#mainBackground").width;
	// var image_height_rendered = document.querySelector("#mainBackground").height;
	// console.log("image loaded");
    }
    else {
	document.querySelector("#mainBackground").addEventListener('load', function() {
	    console.log("loaded");
	    // var image_width_actual = this.naturalWidth;
	    // var image_height_actual = this.naturalHeight;

	    // var image_width_rendered = this.width;
	    // var image_height_rendered = this.height;
	    // console.log("image now loaded");
	});
	console.log("not loaded");
    }

    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
    // { // Take the user to a different screen here.
    // 	window.location.replace("http://www.w3schools.com");
    // }
});


function playButtonClicked()
{
    let buttonElementName = "playStreamButton";
    let buttonTextElementName = "buttonTextColorId";
    if(!playing)
    {
	playing = true;
	playStream();
	changeElementText(buttonTextElementName, "PLAYING");
	changeElementBorder(buttonElementName, "thick inset #efd6d6");
	changeElementBackground(buttonElementName, "#efd6d6");
    }
    else
    {
	playing = false;
	stopStream();
	changeElementText(buttonTextElementName, "PLAY");
	changeElementBorder(buttonElementName, "thick outset #ffe6e6");
	changeElementBackground(buttonElementName, "#ffe6e6");
    }
    console.log("\n");
}


function playStream()
{
    audio.play();
    console.log("playing stream");
}


// Currently pauses stream (this should be changed in the future.)
function stopStream()
{
    audio.pause();
    console.log("pausing stream");
}


function changeElementText(elementName, str)
{
    console.log("chaning button text");
    console.log(elementName);
    console.log(str);
    document.querySelector("#" + elementName).innerText = str;
}


function changeElementBorder(elementName, str)
{
    document.querySelector("#" + elementName).style.border = str;
}


function changeElementBackground(elementName, str)
{
    document.querySelector("#" + elementName).style.background = str;
}
