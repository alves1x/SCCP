function pesquisar() {
let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;
if (campoPesquisa == "") {
    section.innerHTML = "<p> Esse jogador não foi encontrado!"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.titulo.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <p href="#" target="_blank">${dado.titulo}</p>
            </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
                </div>
    `;
    }
}

if (!resultados) {
    resultados = "<p>Esse jogador não foi encontrado!</p>"
}

section.innerHTML = resultados;
}
