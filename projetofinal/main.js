const button = document.querySelectorAll('.opcoes a');

const boxmenu1 = document.querySelector('.menu1');
const boxmenu2 = document.querySelector('.menu2');
const boxmenu3 = document.querySelector('.menu3');

button.forEach(element => {

    element.addEventListener("click", function(e){

        e.preventDefault();
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


    } )


});


const sanduba = document.querySelector('.menusanduiche');

    sanduba.addEventListener("click", function(e){

        const sandubao = document.querySelector('.barra');

        sandubao.classList.toggle('active')

        
    })

const sanduba2 = document.querySelector('.xis');

    sanduba2.addEventListener("click", function(e){

        const sandubao2 = document.querySelector('.barra');

        sandubao2.classList.toggle('active')

        
    })    