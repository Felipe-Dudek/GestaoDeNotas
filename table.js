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

            const colunaProva2 = document.createElement('td');
            colunaProva2.innerText = dado.Prova2;
            novaLinha.appendChild(colunaProva2);

            const colunaAep2 = document.createElement('td');
            colunaAep2.innerText = dado.Aep2;
            novaLinha.appendChild(colunaAep2);
            
            const colunaIntegrada2 = document.createElement('td');
            colunaIntegrada2.innerText = dado.integrada2;
            novaLinha.appendChild(colunaIntegrada2);

            const colunamediabimetre1 = document.createElement('td');
            colunamediabimetre1.innerText = dado.mediabimetre1;
            novaLinha.appendChild(colunamediabimetre1);

            const colunamediabimetre2 = document.createElement('td');
            colunamediabimetre2.innerText = dado.mediabimetre2;
            novaLinha.appendChild(colunamediabimetre2);

            const colunamediatotal = document.createElement('td');
            colunamediamediatotal.innerText = dado.mediatotal;
            novaLinha.appendChild(colunamediatotal);

            const colunaaprovado = document.createElement('td');
            colunaaprovado.innerText = dado.aprovado;
            novaLinha.appendChild(colunaaprovado);

            const colunareprovado = document.createElement('td');
            colunareprovado.innerText = dado.reprovado;
            novaLinha.appendChild(colunareprovado);

            idTabela.appendChild(novaLinha);
        });
    }
}

populaDadosNaTabela()
