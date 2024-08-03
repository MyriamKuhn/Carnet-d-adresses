const scrollTopButton = document.querySelector('#scrollTopButton')
const navbar = document.querySelector('#navbar-opacity')

window.onscroll = () => {
    if(window.scrollY>50){
        scrollTopButton.classList.add("show");
        navbar.classList.remove('bg-opacity-75');
    }
    else{
        scrollTopButton.classList.remove("show");
        navbar.classList.add('bg-opacity-75')
    };
};