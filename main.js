

const sliders = document.querySelector(".box")
var scrcl;
var scr = 0;
function sxscroll(){
    sliders.scrollTo({
        top: 0,
        left: (scr -= scrcl),
        behavior: "smooth"
    });

    if(scr < 0){
        scr = 0;
    }

}

function dxscroll(){
    if(scr <= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top: 0,
            left: (scr += scrcl),
            behavior: "smooth"
        })
    }

}


 
