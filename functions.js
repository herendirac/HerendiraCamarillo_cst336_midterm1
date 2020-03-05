$(document).ready(function() {
  $("button").on("click", function() {
   
   // creating variable on click
   var callNum = $("#callNum").val();
   
   //ajax call!
   $.ajax({
    
    //getter
    method: "GET",
    
     // is used to get 1===== &bibkeys=ISBN:0451526538
    //jscmd=data
    //"name": ".."
    //"url": ".."
    
    // Testing numbers: 1594200092 and 0451526538
   
    //https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
    
    url: "https://openlibrary.org/api/books?bibkeys=ISBN:" + callNum + "&format=json&jscmd=data",
    datatype: "json",
// calling for data here
    success: function(data) 
    {
    //https://openlibrary.org/api/books?bibkeys=ISBN:callNum +the cover and the size
          
     $("#DisplayCover").append("<img class='cover' src='" + data["ISBN:" + callNum]["cover"]["large"] + "' />");
     $("#ISBN").append("ISBN: " + callNum);
     $("#Author").append("Author: " + data["ISBN:" + callNum]["authors"][0]["name"]);
     
     //https://openlibrary.org/api/books?bibkeys=ISBN:callNum 
     
     $("#PublishedNum").append("Publish: " + data["ISBN:" + callNum]["publish_date"]);
     $("#Publisher").append("Publisher: " + data["ISBN:" + callNum]["publishers"][0]["name"]);
     
     //https://openlibrary.org/api/books?bibkeys=ISBN:callNum  numpages
     
     $("#PagesNums").append("Pages: " + data["ISBN:" + callNum]["pageNum"]);
     $("#Title").append("Title: " + data["ISBN:" + callNum]["title"]);
    },
    
   }); 
  }); 
 });
