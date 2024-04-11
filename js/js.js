document.querySelectorAll('a').forEach(function(link) {
    link.classList.add('text-reset');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




    document.addEventListener('DOMContentLoaded', function () {
        const icons = document.querySelectorAll('.icones-habilidades');

        icons.forEach(icon => {
            icon.addEventListener('mouseover', function () {
                const className = this.classList[2]; // Pega a segunda classe da lista
                const correspondingText = document.querySelector(`.${className}-texto`);
                if (correspondingText) {
                    correspondingText.style.display = 'block'
                    document.querySelector('.ocultar').style.display = 'none'
                }
            });

            icon.addEventListener('mouseout', function () {
                const className = this.classList[2]; // Pega a segunda classe da lista
                const correspondingText = document.querySelector(`.${className}-texto`);
                if (correspondingText) {
                    correspondingText.style.display = 'none'
                    document.querySelector('.ocultar').style.display = 'block'
                }
            });
        });
    });
