function doStuff(){
	console.log('this shit works');
}

var pictures = [
	"https://picturethismaths.files.wordpress.com/2016/03/fig6bigforblog.png?w=419&h=364",

];

function showPictures(){
	for(i = 0, len = pictures.length, i++) {
		document.write("<img src=" + pictures[i] + "width="160" height="120"/>");
	}
}