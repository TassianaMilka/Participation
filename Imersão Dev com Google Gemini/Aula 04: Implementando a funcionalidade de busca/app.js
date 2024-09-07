//console.log(dados);
//Função para o botão
function exibir() {
//Declaração e id do html para o Javascript
let section = document.getElementById("resultados-pesquisa");
let resultados = "";

//Para cada dado dentro da lista de dados
    for (let dado of dados) {
    //Inclementação(soma dos elementos)
    resultados += `
        <div class="item-resultado">
            <h2>
                <a class="item-resultado a" href="${dado.link}" target="_blank">
                    ${dado.titulo}
                </a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    `;

     `<div class="item-resultado">
            <h2>
                <a class="item-resultado a" href="${dado.link}" target="_blank">
                    ${dado.titulo}
                </a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    `;
}

section.innerHTML = resultados;
           
 
}


            