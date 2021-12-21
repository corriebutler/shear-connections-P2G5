var modal = document.getElementById('openModal');
var modalBtn = document.getElementById('modalBtn')
var closeBtn = document.getElementById('close')

modalBtn.addEventListener('click', openModal);
modalBtn.addEventListener('click', closeModal);

function openModal() {
    var element = document.getElementById('openModal');
    element.classList.add('active');
}

function closeModal() {
    var element = document.getElementById('close');
    element.classList.remove('active');
}

