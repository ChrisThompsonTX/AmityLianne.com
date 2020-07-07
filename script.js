const imageContainers = document.querySelectorAll('.post-item');
const amity = document.querySelector('.amity');



function openInfo(e) {
    console.log(e)
}

imageContainers.forEach(image => image.addEventListener('click', openInfo));
window.addEventListener('scroll', (e)=> console.log(e))