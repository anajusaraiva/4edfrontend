

// const nota = 5;
// const media = 7;
// const nomes =["Ana","Andre","Andressa","Bruno","Eleandro","Fernando"];
// const sorteado = Math.floor( Math.random() * 6);

// console.log(sorteado);

// alert(nomes[sorteado]+ " " + "Paga a cerveja");

// console.log(frutas[5]);
// console.log( nota >= media );



// if(nota >= media) { 
    
//     alert("Parabens você foi aprovado!");

// } else {
//     alert("Você foi reprovado!");
// }

// if(nota >= media) { 
    
//     document.write("<h1> Parabens você foi aprovado! </h1>");

// } else {
//     document.write("<h1> Você foi reprovado! </h1>");
// }

// console.log( 10 == 5 && 10 == 10);

// if( 10 == 5 && 10 == 10) {
//     console.log('opaaa');
// } else {
//     console.log('aqui');
// }


// const nome= prompt("Qual é o seu nome?");
// document.write("<h1> Olá " + nome + " Seja bem-vindo! </h1>");


const select = document.getElementById('data-de-nascimento');
let options = ''; 

for (let index = 1920; index < 2021; index++) {

    console.log(index);

    options += `<option value="${index}">${index}</option>`;

}

select.innerHTML = options;
