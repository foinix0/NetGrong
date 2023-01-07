


var videoid;
function Video(id){
    var div = document.getElementById("video");
    div.innerHTML = '<embed class="trailer" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" src="https://drive.google.com/file/d/' + id +'/preview"></embed>'
}



function reply_click(clicked_id)
{
    window.location.href = "video.html";
   
    switch(clicked_id){
        case "augurimonochino":
            videoid = "1k7ncwRcPxmTYafkxQKoP0kdA6_kt3FMZ";
            Video(videoid);
            console.log("monoc")
            break;
        case "auguritumor":
            videoid = "1p1dRe0DfLcQaifQOfpIsG1wwS8K2EqBb";
            Video(videoid);
            console.log("tumor")
            break;
            
        case "augurialbacio":
            videoid = "1Lb26SH7by4t_g8WtH6TOazh7I1fGPfRA";
            Video(videoid);
            console.log("alba")
            break;
            



    }
 }



