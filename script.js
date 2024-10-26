document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu-button');
    const sideMenu = document.querySelector('.side-menu');
    const closeButton = document.createElement('button');

    closeButton.textContent = '×';
    closeButton.classList.add('close-menu');
    closeButton.style.fontSize = '2rem';
    closeButton.style.color = '#ff3333';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '-5px';
    closeButton.style.right = '10px';

    sideMenu.appendChild(closeButton);

    menuButton.addEventListener('click', function() {
        sideMenu.classList.toggle('show-menu');
    });

    closeButton.addEventListener('click', function() {
        sideMenu.classList.remove('show-menu');
    });

    const languageSelector = document.getElementById("language");
    languageSelector.addEventListener("change", changeLanguage);
});

function changeLanguage() {
    const selectedLang = document.getElementById("language").value;
    document.querySelectorAll("[data-lang-en]").forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${selectedLang}`);
    });
}
