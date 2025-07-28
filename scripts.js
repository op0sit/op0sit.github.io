const lightbox = document.getElementById('big_image');
const lightboxImg = document.getElementById('big_image-img');

document.querySelectorAll('.gallery img').forEach(img => {
img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
});
});

// Close the big image when you click outside it
lightbox.addEventListener('click', () => {
lightbox.style.display = 'none';
});