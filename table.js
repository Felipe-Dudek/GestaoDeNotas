function recuperaDados(){
    const localStorage = window.localStorage;
    let listaAluno = [];
    if (localStorage.getItem('lista_alunos') != null) {
        listaAluno = JSON.parse(localStorage.getItem('lista_alunos'));
    }
    return listaAluno;
}

function populaDadosNaTabela(){
    const dados = recuperaDados();
    if(dados != null){
        const idTabela = document.getElementById("tabela-body-tchola");
        idTabela.innerHTML = "";
        dados.forEach(dado => {
            const novaLinha = document.createElement('tr');
            const colunaNome = document.createElement('td');
            colunaNome.innerText = dado.nome;
            novaLinha.appendChild(colunaNome);

            const colunaRA = document.createElement('td');
            colunaRA.innerText = dado.ra;
            novaLinha.appendChild(colunaRA);

            const colunaProva1 = document.createElement('td');
            colunaProva1.innerText = dado.prova1;
            novaLinha.appendChild(colunaProva1);

            const colunaAep1 = document.createElement('td');
            colunaAep1.innerText = dado.aep1;
            novaLinha.appendChild(colunaAep1);

            const colunaIntegrada = document.createElement('td');
            colunaIntegrada.innerText = dado.integrada1;
            novaLinha.appendChild(colunaIntegrada);

            idTabela.appendChild(novaLinha);
        });
    }
}

populaDadosNaTabela()
