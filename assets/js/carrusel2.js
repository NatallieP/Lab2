let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
    
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    //let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for (i = 0; i < dots.length; i++) {
       // dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex2 - 1].style.display = "block";
    //dots[slideIndex - 1].className += " active";
}