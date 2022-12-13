var request = new XMLHttpRequest();

request.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=sTdF2n7y8wUcMa7x5uOo9uSdySawdPn3&tag=puppy&rating=g");
var imageTag = "";
request.onload = function () {

	var response = request.response; 
	//console.log(response);
	
	var parsedData = JSON.parse(response);
	//console.log(parsedData);

	var imageUrl = parsedData.data.images.original.url;
	//console.log(imageUrl);

	imageTag = "<img src=" + imageUrl + "  width='300'>";
	//console.log(imageTag);
	document.getElementById("holder").innerHTML = imageTag;
};

request.send();