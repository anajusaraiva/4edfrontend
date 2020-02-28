const button = document.querySelectorAll('.opcoes a');

const boxmenu1 = document.querySelector('.menu1');
const boxmenu2 = document.querySelector('.menu2');
const boxmenu3 = document.querySelector('.menu3');

button.forEach(element => {

    element.addEventListener("click", function(e){

        boxmenu1.classList.remove('active');
        boxmenu2.classList.remove('active');
        boxmenu3.classList.remove('active');

        button.forEach(el => {
            el.classList.remove('active');
        
        })

        const menu = e.target.getAttribute('data-menu');

        const menuActive = document.querySelector(".menu" + menu);

        menuActive.classList.add('active');
        
        e.target.classList.add('active');



        // e.target.classList.add('active');

        // const image = document.querySelector(".car");

        // image.setAttribute('src', `imagens/car-${color}.jpg`);

    } )


});