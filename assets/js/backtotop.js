const scrollTopButton = document.querySelector('#scrollTopButton')

window.onscroll = () => {
    if(window.scrollY>200){
        scrollTopButton.classList.add("show");
    }
    else{
        scrollTopButton.classList.remove("show");
    };
};