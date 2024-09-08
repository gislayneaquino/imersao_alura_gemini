function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("pesquisa-candidato").value

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let tag = "";

    for (let candidato of candidatos) {

        nome = candidato.nome.toLowerCase()
        tag = candidato.tags.toLowerCase().trim()

        if ((nome.includes(campoPesquisa)) || (tag.includes(campoPesquisa))) {
            resultados += `
            <div class="item-resultado">
                    <h3>${candidato.nome}</h3>
                    <p class="descricao-meta">${candidato.vice}</p>
                    <p class="descricao-meta">${candidato.descricao}</p>
                    <p class="descricao-meta">Coligação: ${candidato.coligacao}</p>
                    <a href="${candidato.link}"target="_blank" rel="noopener noreferrer">Mais Informações</a>
            </div>
            `
        }
    }
        if (!resultados) {
            resultados = `
            <div class="item-resultado">
            <p>Desculpe, não encontramos o candidato solicitado em nossa base.</p>
            <p>Realize sua busca diretamente na página do TSE, através do link abaixo.</p>
            <a href="https://divulgacandcontas.tse.jus.br/divulga/#/candidato/SUDESTE/MG/2045202024"target="_blank" rel="noopener noreferrer">Divulga Candidaturas TSE</a>
            `
        } if ((!campoPesquisa) || (campoPesquisa == " ")) {
            resultados = `
            <div class="item-resultado">
            <p>Informe o nome do candidato ou cargo elegível para pesquisa.</p>
            `
        }

    section.innerHTML = resultados
}