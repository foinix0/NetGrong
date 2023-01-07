

var ifr = document.getElementById("frame");
var videoid;
console.log("palle2")
function reply_click(clicked_id)
{
    window.location.href = "video.html";
    switch(clicked_id){

        case "augurimonochino":
            console.log("palle")
            videoid = "1k7ncwRcPxmTYafkxQKoP0kdA6_kt3FMZ";
            ifr.setAttribute(src, "https://drive.google.com/file/d/" + videoid +"/preview")
            console.log("palle")
      
            break;
        case "auguritumor":
            videoid = "1p1dRe0DfLcQaifQOfpIsG1wwS8K2EqBb";
            ifr.load("https://drive.google.com/file/d/" + videoid +"/preview")
            break;
        case "augurialbacio":
            videoid = "1Lb26SH7by4t_g8WtH6TOazh7I1fGPfRA";
            ifr.load("https://drive.google.com/file/d/" + videoid +"/preview")
            break;



    }
 }



