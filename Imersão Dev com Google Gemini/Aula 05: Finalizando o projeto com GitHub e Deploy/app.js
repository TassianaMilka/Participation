//Função para o botão
function exibir() {
    //Declaração e id do html para o Javascript
    let section = document.getElementById("resultados-pesquisa");

    //Destinado para o campo de pesquisa que o usuário  vai descrever 
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

 
    

    if (!campoPesquisa) {
        
        section.innerHTML = "<P>Nada foi encontrado</P>"
        return

    }
    

    campoPesquisa = campoPesquisa.toLowerCase();


    //String vazia
    let resultados = "";
    let titulo = " ";
    let descricao = " ";
    /*let tags = "";*/



    //Para cada dado dentro da lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.titulo.toLowerCase();

       /* tags = dado.tags.toLowerCase();*/

        //Validação
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

            // if(tags.includes(campoPesquisa)){

            //console.log(dado.titulo.includes(campoPesquisa));

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

}
        
        
        
       if (resultados== " ") {
            
           resultados = "<p>Nada foi encontrado</p>";

        } 

   
    section.innerHTML = resultados;


}


