


var videoid;


function Video(id){
    var emb = document.getElementById("trailer");
    var clone = emb.cloneNode(true);
    clone.setAttribute('src', "https://drive.google.com/file/d/" + id +"/preview");
    game.parentNode.replaceChild(clone, emb)
}


function reply_click(clicked_id)
{
    window.location.href = "video.html";
    switch(clicked_id){

        case "augurimonochino":
            videoid = "1k7ncwRcPxmTYafkxQKoP0kdA6_kt3FMZ";
            Video(videoid);
            break;
        case "auguritumor":
            videoid = "1p1dRe0DfLcQaifQOfpIsG1wwS8K2EqBb";
            Video(videoid);
            break;
            
        case "augurialbacio":
            videoid = "1Lb26SH7by4t_g8WtH6TOazh7I1fGPfRA";
            Video(videoid);
            break;
            



    }
 }



