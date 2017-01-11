$(document).ready(function() {
    // the rest of your javascript must go in here
    console.log("hello");
    $("#giphy").submit(function(event) {

        event.preventDefault();
    var query= $("#query").val();
    console.log(query);
    
$.ajax({
        // This is the URL of the API
        url: "https://api.giphy.com/v1/gifs/search?q="+query+"&api_key=dc6zaTOxFJmzC"
    }).done(function(response) { // the .done function happens after the API response is returned
        console.log(response);
      
        // this is the jQuery way to create
        // a new image element
        var image = $('<img>');
        console.log(image);
        // when we create a new element,
        // jQuery returns an array. So we
        // need to look for the first item
        // in the image array
image[0].src = response.data[0].images.fixed_width_downsampled.url;
      
    $("#results")..append(image);
    });
  

        // everything you want to happen *after* the form is submitted must go in here
    });

});

// After the line that declares and defines the variable query, add a call to the Giphy API. 