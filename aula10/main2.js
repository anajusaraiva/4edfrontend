

$('.texto').click(function(){
console.log("pato")
});

console.log($('button'));

$('button');

$('button').click(function(){
console.log ("clicado");

})

$('h1');

$('a').click(function(e){
    e.preventDefault();
    console.log( $(e.target).attr('href'));
    console.log( $(this).attr('data-color'));

    //e = elemento que foi clicado
    //this = e.target
    
});



