//selecionando o titulo 
let tituloPrincipal = document.querySelector('h1');
//altera conteudo do elemento 
tituloPrincipal.innerText = 'Faça parte do nosso time';

//seleciona o input email
let inputEmail = document.querySelector('#email');

//adicionar placeholder
inputEmail.setAttribute('placeholder', 'jane@email.com');

let inputCargaHoraria = document.querySelector('#carga-horaria');
//consultar o que esta dentro do elemento selecionado
console.log(inputCargaHoraria.innerHTML);
//innerHTML para adicionar ou substituir o conteúdo do elemento selecionado
inputCargaHoraria.innerHTML +='<option valoue="Trainee">Trainee</option>;

//alterando style
tituloPrincipal.style.color = 'orange';

let elementoDiv = document.querySelector('div');
