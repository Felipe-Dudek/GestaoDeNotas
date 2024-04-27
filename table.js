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
            const link = document.createElement('a');
            link.href = `/index.html?id=${dado.id}`;
            link.innerText = dado.nome;
            colunaNome.appendChild(link);
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

            const colunaIntegrada1 = document.createElement('td');
            colunaIntegrada1.innerText = dado.integrada1;
            novaLinha.appendChild(colunaIntegrada1);

            const colunaProva2 = document.createElement('td');
            colunaProva2.innerText = dado.prova2;
            novaLinha.appendChild(colunaProva2);

            const colunaAep2 = document.createElement('td');
            colunaAep2.innerText = dado.aep2;
            novaLinha.appendChild(colunaAep2);
            
            const colunaIntegrada2 = document.createElement('td');
            colunaIntegrada2.innerText = dado.integrada2;
            novaLinha.appendChild(colunaIntegrada2);

            const colunaMediaBi1 = document.createElement('td');
            if(isNaN(parseFloat(dado.prova1) + parseFloat(dado.aep1) + parseFloat(dado.integrada1))){
                colunaMediaBi1.innerText = "Não Lançada";
            } else{
                colunaMediaBi1.innerText = parseFloat(dado.prova1) + parseFloat(dado.aep1) + parseFloat(dado.integrada1);
            }
            novaLinha.appendChild(colunaMediaBi1);

            const colunaMediaBi2 = document.createElement('td');
            if(isNaN(parseFloat(dado.prova2) + parseFloat(dado.aep2) + parseFloat(dado.integrada2))){
                colunaMediaBi2.innerText = "Não Lançada";
            } else{
                colunaMediaBi2.innerText = parseFloat(dado.prova2) + parseFloat(dado.aep2) + parseFloat(dado.integrada2);
            }
            novaLinha.appendChild(colunaMediaBi2);

            const colunaMediaTotal = document.createElement('td');
            if(isNaN(parseFloat(colunaMediaBi2.innerText)) || isNaN(parseFloat(colunaMediaBi2.innerText))){
                colunaMediaTotal.innerText = "Esperando Notas";
            }else{
                colunaMediaTotal.innerText = ((parseFloat(dado.prova1) + parseFloat(dado.aep1) + parseFloat(dado.integrada1)) + (parseFloat(dado.prova2) + parseFloat(dado.aep2) + parseFloat(dado.integrada2))) / 2;
            }
            novaLinha.appendChild(colunaMediaTotal);

            const colunaAprovado = document.createElement('td');
            if(isNaN(parseFloat(colunaMediaTotal.innerText))){
                colunaAprovado.innerText = "Esperando Notas";
            } else{
                if(parseFloat(colunaMediaTotal.innerText) >= 6.0){
                    colunaAprovado.innerText = "Aprovado";
                } else if(parseFloat(colunaMediaTotal.innerText) < 6.0 || parseFloat(colunaMediaTotal.innerText) >= 3.0){
                    colunaAprovado.innerText = "Recuperação";
                } else {
                    colunaAprovado.innerText = "Reprovado";
                }
            }
            novaLinha.appendChild(colunaAprovado);

            idTabela.appendChild(novaLinha);
        });
    }
}

function redirecionarParaCadastro(){
    window.location.replace("/index.html?id=-1");
}

populaDadosNaTabela()
