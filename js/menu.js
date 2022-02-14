//footer navigation

document.querySelectorAll(".accordion").forEach(function(element){
    if( (window.innerWidth || document.documentElement.clientWidth) <=576){

        element.onclick = function () {
            var panel=element.nextElementSibling;

            if (panel.style.maxHeight) {

                panel.style.maxHeight = null;

                element.querySelector(".arrow").style.transform = 'rotate(0deg)';
                element.querySelector(".arrow").style.transition = '0.2s ease-out';

            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";

                element.querySelector(".arrow").style.transform = 'rotate(180deg)';
                element.querySelector(".arrow").style.transition = '0.2s ease-out';

            }

        }
    }


})
// header navigation

let menu=document.querySelector(".menu");
var wrapperAnchors = document.querySelector(".wrapper_anchors");
var anchors=document.querySelector(".anchors");
var anchors_deep=document.querySelector(".anchors_deep");
menu.onclick=function() {

    anchors.style.display="flex";
    anchors.style.justifyContent="space-between"
    anchors_deep.style.flexWrap = "nowrap";
    wrapperAnchors.style.display="block";
    wrapperAnchors.style.position = "fixed";
    wrapperAnchors.style.left = "0";
    wrapperAnchors.style.top = "0";
    wrapperAnchors.style.right = "0";
    wrapperAnchors.style.zIndex = "100";
    wrapperAnchors.style.background = "#F1F1F1";
    anchors_deep.style.display = "flex";
    anchors_deep.style.width = "90%";
    anchors_deep.style.flexWrap = "wrap";
    wrapperAnchors.classList.remove("animate__fadeOutUp");
    wrapperAnchors.classList.add("animate__animated");
    wrapperAnchors.classList.add("animate__fadeInDown");


    let a_list =anchors_deep.querySelectorAll(' a');
    let a_array = Array.prototype.slice.call(a_list);

    a_array.forEach(function(element) {
      element.style.width="100%";
      element.style.padding="10px";
    });

    document.querySelector(".cross").style.display="block";


}

let crossDeep=document.querySelector(".cross_deep");
crossDeep.onclick=function() {
    wrapperAnchors.classList.remove("animate__fadeInDown");
    wrapperAnchors.classList.add("animate__fadeOutUp");
}


window.addEventListener("resize", function() {

    document.querySelectorAll(".accordion").forEach(function(element){
        if( (window.innerWidth || document.documentElement.clientWidth) <=576){

            element.onclick = function () {
                var panel=element.nextElementSibling;

                if (panel.style.maxHeight) {

                    panel.style.maxHeight = null;

                    element.querySelector(".arrow").style.transform = 'rotate(0deg)';
                    element.querySelector(".arrow").style.transition = '0.2s ease-out';

                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";

                    element.querySelector(".arrow").style.transform = 'rotate(180deg)';
                    element.querySelector(".arrow").style.transition = '0.2s ease-out';

                }

            }
        }


    })

    if (window.matchMedia("(min-width: 992px)").matches) {

        anchors.style.display="flex";
        anchors.style.justifyContent="";
        anchors_deep.style.width = "100%";
        anchors_deep.style.flexWrap = "nowrap";
        wrapperAnchors.style.display="";
        wrapperAnchors.style.position = "";
        wrapperAnchors.style.left = "";
        wrapperAnchors.style.top = "";
        wrapperAnchors.style.right = "";
        wrapperAnchors.style.zIndex = "";
        wrapperAnchors.style.background = "";
        anchors_deep.style.display = "";
        anchors_deep.style.width = "";
        anchors_deep.style.flexWrap = "";
        document.querySelector(".cross").style.display="none";
        wrapperAnchors.classList.remove("animate__animated");
        wrapperAnchors.classList.remove("animate__fadeInDown");


        let a_list =anchors_deep.querySelectorAll(' a');
        let a_array = Array.prototype.slice.call(a_list);
        a_array.forEach(function(element) {
            element.style.padding="0";
        });
    }

})


