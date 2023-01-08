


id = localStorage.getItem("id");
div = document.getElementById("videoview");
videostring1 = '<iframe style="transform:rotate(90deg); position:fixed; top:25%; left:-60%; bottom:0; right:0; width:220%; height:50%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" src="https://drive.google.com/file/d/'; 
videostring2 = '/preview" frameborder="0"></iframe>';


switch(id){


    case "augurimonochino":
        idvideo = "1k7ncwRcPxmTYafkxQKoP0kdA6_kt3FMZ";
        div.innerHTML = videostring1 + idvideo + videostring2;
        break;
    case "auguritumor":
        idvideo = "1p1dRe0DfLcQaifQOfpIsG1wwS8K2EqBb";
        div.innerHTML = videostring1 + idvideo + videostring2; 
        break;
    case "augurialbacio":
        idvideo = "1Lb26SH7by4t_g8WtH6TOazh7I1fGPfRA";
        div.innerHTML = videostring1 + idvideo + videostring2;
        break;    

}







