let tituloBackground = document.querySelector("h1");

function setBackgroundTitle(value){
    console.log(value);
    tituloBackground.style.backgroundColor = value;
}

function tarefaFeita(item){
    //console.log(item);
    //item.style.backgroundColor = "#555";
    item.className = "realizada";
}

function tarefaNaoFeita(item){
    item.className = "naoFeita";
}

// todo 
function removerTarefa(item){
    item.remove();
}

function adicionarTarefa(){
    let inputTexto = document.querySelector("#textoTarefa");
    let novaTarefa = inputTexto.value.trim();

    if(novaTarefa != ""){
        let novoLi = document.createElement("li");

        // Template Literals
        novoLi.innerHTML = 
        `
            <button class="alteracao" onclick="tarefaFeita(this.parentNode)"><i class="fa fa-check-square"></i></button> 
            <button class="alteracao" onclick="tarefaNaoFeita(this.parentNode)"><i class="fa fa-minus-square"></i></button> 
            <button class="alteracao" onclick="removerTarefa(this.parentNode)"><i class="fa fa-trash-o"></i></button> 
            <span> ${novaTarefa} </span>
        `
        // Atribuindo o novoLi para a ul(mãe), se não fica orfão :'(
        document.querySelector("#mae").appendChild(novoLi);

    }

    inputTexto.value = "";
}