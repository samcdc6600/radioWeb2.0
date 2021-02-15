// document.onreadystatechange
loadFunction  = function()
{
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
    { // We are on a mobile device. We will load an alternative CSS file.
	// HeadCount contains the string in-between the head tags.
	let headContent = document.head.innerHTML;
	let strIndex1 = headContent.lastIndexOf("<!-- Start Link Magic(#@!56^) -->");
	let strIndex2 = headContent.lastIndexOf("<!-- End Link Magic(#@!56^) -->");
	// Replace the string in-between the start of the start link comment and the start of the end link comment with the second argument below.
	headContent = headContent.replace(headContent.substring(strIndex1, strIndex2), "<link rel=\"stylesheet\" type=\"text/css\" href=\"styleMobile.css\" id=\"mobileStyleSheet\">");
	// Replace head.innerHTML with the headContent string.
	document.head.innerHTML = headContent;
    }
}


// Run loadFunction() (this is run when the parser encounteres the script tag in the head tag in the html file and runs this scrilpt.)
loadFunction();


// Vars for audio functionality.
var audio = new Audio('https://cast-1.nucleusstreaming.com:4443/pbsfm_live_64.aacp');
var playing = false;


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
