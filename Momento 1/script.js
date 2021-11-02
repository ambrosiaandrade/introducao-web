// Vamos mudar o estilo
function tarefaFeita(item){
  item.className = "realizada";

  // HOMEWORK: Altere o código para que a tarefa marcada como feita, fique tachada por exemplo
  // console.log(">>> ", item)
  // console.log(">>> ", item.children[3].style)
  
  // let mudarEstiloTexto = item.children[3];
  // mudarEstiloTexto.style.textDecoration="line-through";
}

function tarefaNaoFeita(item){
  item.className = "naoFeita";
}

function setCor(value){
  let meuTitulo = document.querySelector("h1");
  meuTitulo.style.backgroundColor = value;
}


function adicionarTarefa(){
  let inputTexto = document.querySelector("#textoTarefa");
  let novaTarefa = inputTexto.value;
  
  // se o texto não for vazio, adicionar tarefa
  if(novaTarefa != ""){
    // criando um li para ser interado no ul "tarefas"
    let item = document.createElement("li");

// Template literals
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals

    item.innerHTML = 
    `<button class="alteracao" type="button" onclick="tarefaFeita(this.parentNode)">
      <i class="fa fa-check-square"></i>
    </button> 
    <button class="alteracao" type="button" onclick="tarefaNaoFeita(this.parentNode)">
      <i class="fa fa-minus-square"></i>
    </button>
    <button class="alteracao" type="button" onclick="removerTarefa(this.parentNode)">
      <i class="fa fa-trash-o"></i>
     </button> 
     <span> ${novaTarefa} </span>`;

    // Atribuindo esse li criado para a ul, se não fica uma filha sem mãe!
    document.getElementById("tarefas").appendChild(item);

    // Zerando o valor do input
    inputTexto.value = "";
  }

}

function removerTarefa(item){
  item.remove();
}



// EXEMPLO DE addEventListener

let meuInputTeclado = document.querySelector("#eventoTeclado");
// nos parâmetros do addEventListener (evento, função_a_ser_chamada)
meuInputTeclado.addEventListener("keypress", teclaPressionada);

function teclaPressionada(e){
  console.log(e);
}

let meuInputMouse = document.getElementById("eventoMouse");
meuInputMouse.addEventListener("click", (evento)=> {
  console.log("Menina tu clicastes!");
  console.log(evento);
});