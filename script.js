const imageContainers = document.querySelectorAll('.post-item');
const amity = document.querySelector('.amity');



function openInfo(e) {
    console.log(e.target)
}

imageContainers.forEach(image => image.addEventListener('click', openInfo));
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function checkSlide(e) {
    const slideUpAt = (window.scrollY + window.innerHeight) -
        (amity.height / 2);
    const imageBottom = amity.offsetTop + amity.height;
    const isHalfShown = slideUpAt > amity.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
        amity.classList.add('active');
    } else {
        amity.classList.remove('active');
    }
}

window.addEventListener('scroll', debounce(checkSlide));