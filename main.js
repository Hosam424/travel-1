const bottom_header = document.querySelector(".bottom-header")
const up_btn = document.querySelector(".up-btn")

window.onscroll = function(){
    if(window.scrollY > 0){
        bottom_header.classList.add("active")
        up_btn.classList.add("active")
    }else{
        up_btn.classList.remove("active")
        bottom_header.classList.remove("active")
    }
}

