function openModal(image) {
    var modal = document.getElementById('modal');
    var fullImage = document.getElementById('fullImage');
    fullImage.src = image.querySelector('img').src;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}