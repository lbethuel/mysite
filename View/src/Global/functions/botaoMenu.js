const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementsById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);