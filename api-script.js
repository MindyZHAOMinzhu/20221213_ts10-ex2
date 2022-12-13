var request = new XMLHttpRequest();

request.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=sTdF2n7y8wUcMa7x5uOo9uSdySawdPn3&tag=puppy&rating=g");
var imageTag = "";
request.onload = function() {

    var response = request.response;
    //console.log(response);

    var parsedData = JSON.parse(response);
    //console.log(parsedData);



    // // images CODE!!!
    // var imageUrl = parsedData.data.images.original.url;
    // //console.log(imageUrl);

    // imageTag = "<img src=" + imageUrl + "  width='500'>";
    // //console.log(imageTag);
    // document.getElementById("holder").innerHTML = imageTag;


    // V&A CODE!!!
    // API gives as much as it can

    // console.log(parsedData.records);
    parsedData.records.forEach(record => {
        /* ------------ Smaller Images ------------*/
        // if(record._primaryImageId != null){
        // 	 console.log(record);
        // 	imageUrl = record._images._primary_thumbnail;

        // 	imageTag += "<img src='" + imageUrl + "'  >";
        // }
        /* ----------------------------------------*/

        /* ------------ Larger Images ------------*/
        if (record._primaryImageId != null) {
            console.log(record);
            imageUrl = record._images._iiif_image_base_url;

            imageTag += "<img src='" + imageUrl + "full/!300,300/0/default.jpg'  >";
        }
    });
    document.getElementById("holder").innerHTML = imageTag;


};

request.send();