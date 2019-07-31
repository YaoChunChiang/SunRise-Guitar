//Loading
let loadingPage = () =>{
    document.getElementsByClassName("loadingDefault")[0].classList.add("loading");
    window.addEventListener("load", function(){
        let loadingDefault = document.getElementsByClassName("loadingDefault")[0];
        let opacity = () =>{
            loadingDefault.style.opacity = loadingDefault.style.opacity - 0.2;
            if(loadingDefault.style.opacity <= -2){
                loadingDefault.classList.remove("loading");
                clearInterval(timer);
            }
        }
        let timer = setInterval(opacity, 50);
    });
}
//headerChange
let headerChange = () =>{
    let header = document.getElementsByClassName("header")[0];
    let headerForMobile = document.getElementsByTagName("header")[0];
    if(window.pageYOffset > 600 ){
        header.classList.add("headerAfter");
    }else{
        header.classList.remove("headerAfter");
    }
    
}


window.addEventListener("DOMContentLoaded", loadingPage);
window.addEventListener("scroll", headerChange, false);

