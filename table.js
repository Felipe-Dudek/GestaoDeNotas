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
table.js
<!DOCTYPE HTML>
<Html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h2> Tabela teste </h2>
    <div class="table-width">
        <table Id="tabela-header" class="table table-striped table-dark">
            <Thead>
                <tr>
                    <th scope="col"> Nome</th>
                    <th scope="col"> RA</th>
                    <th scope="col"> Prova 1</th>
                    <th scope="col"> AEP 1</th>
                    <th scope="col"> Integrada 1</th>
                    <th scope="col"> Prova 2</th>
                    <th scope="col"> AEP 2 </th>
                    <th scope="col"> Integrada 2 </th>
                    <th scope="col"> Média Bimestre 1</th>
                    <th scope="col"> Média Bimestre 2</th>
                    <th scope="col"> Media Total </th>
                    <th scope="col"> Situação</th>
                </tr>
            </Thead>
            <tbody id="tabela-body-tchola">
            </tbody>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="app.js"></script>
    <script src="table.js"></script>
</body>
