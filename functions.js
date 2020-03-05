/*global $*/
$(document).ready(function() {
$("button").on("click", function() {
   var ISBNinfo = $("#ISBNinfo").val();

   $.ajax({
    method: "GET",
    //&bibkeys=ISBN:0451526538
    //jscmd=data
    //"name": ".."
    //"url": ".."
    
    // Testing numbers: 1594200092 and 0451526538
   
    //https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
    
    url: "https://openlibrary.org/api/books?bibkeys=ISBN:" + ISBNinfo + "&format=json&jscmd=data",
    datatype: "json",
    success: function(data) 
    {
     $("#ShowingCover").html("");
     $("#Title").html("");
     $("#Publisher").html("");
     $("#ISBN").html("");
     $("#Pages").html("");
     //small
     // medium
     // large
     $("#ShowingCover").append("<img class='cover' src='" + data["ISBN:" + ISBNinfo]["cover"]["small"] + "' />");
     $("#Title").append("Title: " + data["ISBN:" + ISBNinfo]["title"]);
     $("#Publisher").append("Publisher: " + data["ISBN:" + ISBNinfo]["publishers"][0]["name"]);
     $("#ISBN").append("ISBN: " + ISBNinfo);
     //number_of_pages
     $("#Pages").append("Pages: " + data["ISBN:" + ISBNinfo]["pageNum"]);
    },

    error: function(error) {console.log(error);

    } 

   }); 

  }); 

 }); 
 
 
 
 
 
 
 
 
 
 
 //&bibkeys=ISBN:0451526538
    //jscmd=data
    //"name": ".."
    //"url": ".."
    
    // Testing numbers: 1594200092 and 0451526538
   
    //https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data