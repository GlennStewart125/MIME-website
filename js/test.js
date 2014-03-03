var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c457f5319bc387b3095229e9286f7994&tags=internet&safe_search=1&per_page=20";
var src;
$.getJSON(url + "&format=json&jsoncallback=?", function(data){
    $.each(data.photos.photo, function(i,item){
        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
        $("<img/>").attr("src", src).appendTo("#images");
      
    });
});