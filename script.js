
const toogle = document.querySelector('.navbar .toogle');
const links = document.querySelector('.navbar ul');

toogle.addEventListener('click', function(){
    links.classList.toggle('hidden');
});