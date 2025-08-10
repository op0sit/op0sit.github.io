const Bigimage = document.getElementById('bigimage');
const BigimageImg = document.getElementById('bigimage-img');

document.querySelectorAll('.gallery img').forEach(img => {
img.addEventListener('click', () => {
    Bigimage.style.display = 'flex';
    BigimageImg.src = img.src;
});
});

// Close the big image when you click outside it
Bigimage.addEventListener('click', () => {
Bigimage.style.display = 'none';
});