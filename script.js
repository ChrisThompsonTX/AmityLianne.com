const imageContainers = document.querySelectorAll('.post-item')

function openInfo() {
    console.log('hey')
}

imageContainers.forEach(image => image.addEventListener('click', openInfo()));