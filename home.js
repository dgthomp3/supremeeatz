function doStuff(){
	console.log('this shit works');
}

var pictures = [
	"http://i.imgur.com/2ohxihR.jpg",
];

function showPictures(){
	for(i = 0; i < pictures.length; i++){
		document.write("<img src=\"" + pictures[i] +"\" width=\"240\" length=\"160\" />");
	}
}