function adicionaDadosAluno(){
    //dados pessoais
    const nome = document.getElementById("input_nome");
    const email = document.getElementById("input_email");
    const ra = document.getElementById("input_ra");

    //dados primeira prova
    const prova1 = document.getElementById("input_prova_1");
    const aep1 = document.getElementById("input_aep_1");
    const integrada1 = document.getElementById("input_prova_integrada_1");

    //dados segunda prova
    const prova2 = document.getElementById("input_prova_2");
    const aep2 = document.getElementById("input_aep_2");
    const integrada2 = document.getElementById("input_prova_integrada_2");

    //verifica se os números estão nos intevalos certo, caso contrário, será dado um alert

    if(nome.value.length < 3){
        alert(`Digite um nome`);
        return "";
    }

    if(email.value.length < 7){
        alert(`Digite um email`);
        return "";
    }

    if((parseFloat(prova1.value) < 0.0 || parseFloat(prova1.value) > 8.0)){
        alert(`A prova 1 deve estar entre 0.0 e 8.0 pontos. Nota atual: ${prova1.value}`);
        return "";
    }
    if((parseFloat(prova2.value) < 0.0 || parseFloat(prova2.value) > 8.0)){
        alert(`A prova 2 deve estar entre 0.0 e 8.0 pontos. Nota atual: ${prova2.value}`);
        return "";
    }
    if((parseFloat(aep1.value) < 0.0 || parseFloat(aep1.value) > 1.0)){
        alert(`A AEP 1 deve estar entre 0.0 e 1.0 pontos. Nota atual: ${aep1.value}`);
        return "";
    }
    if((parseFloat(aep2.value) < 0.0 || parseFloat(aep2.value) > 1.0)){
        alert(`A AEP 2 deve estar entre 0.0 e 1.0 pontos. Nota atual: ${aep2.value}`);
        return "";
    }
    if((parseFloat(integrada1.value) < 0.0 || parseFloat(integrada1.value) > 1.0)){
        alert(`A integrada 1 deve estar entre 0.0 e 1.0 pontos. Nota atual: ${integrada1.value}`);
        return "";
    }
    if((parseFloat(integrada2.value) < 0.0 || parseFloat(integrada2.value) > 1.0)){
        alert(`A integrada 1 deve estar entre 0.0 e 1.0 pontos. Nota atual: ${integrada2.value}`);
        return "";
    }
    //Verifica se o RA está com o tamanho correto
    if(ra.value.length != 9){
        alert("Insira o RA completo (9 Números)");
        return ""; 
    }

    const idURL = pegaValorURL();

    if(parseInt(idURL.id) == -1){
        const tamanhoTable = recuperaDados();

        let id = tamanhoTable.length++;

        //cria estrutura de dados com os dados do aluno
        const dadosAluno = criaEstruturaDeDados(id, nome.value, email.value, ra.value, prova1.value, aep1.value, integrada1.value, prova2.value, aep2.value, integrada2.value);

        //armazena os dados no local storage
        adicionaAlunoLocalStorage(dadosAluno);
    }else{
        const localStorage = window.localStorage;
        let dadosEditar = [];
        dadosEditar = JSON.parse(localStorage.getItem("lista_alunos"));

        if (dadosEditar != null) {
            dadosEditar.forEach((dados, index) => {
                if (parseInt(dados.id) === parseInt(idURL.id)) {
                    const dadosAluno = criaEstruturaDeDados(parseInt(idURL.id), nome.value, email.value, ra.value, prova1.value, aep1.value, integrada1.value, prova2.value, aep2.value, integrada2.value);
                    dadosEditar[index] = dadosAluno;
                }
            });
            EditarAlunoLocalStorage(dadosEditar);
        }
    }

    redirecionarParaTable();
}

function criaEstruturaDeDados(id, nome, email, ra, prova1, aep1, integrada1, prova2, aep2, integrada2){
    return {
        id: id,
        nome: nome,
        email: email,
        ra: ra,
        prova1: prova1,
        aep1: aep1,
        integrada1: integrada1,
        prova2: prova2,
        aep2: aep2,
        integrada2: integrada2
    }
}

function adicionaAlunoLocalStorage(Aluno) {
    const localStorage = window.localStorage;
    let listaAlunos = [];
    if (localStorage.getItem('lista_alunos') != null) {
        listaAlunos = JSON.parse(localStorage.getItem('lista_alunos'));
    }
    listaAlunos.push(Aluno);
    localStorage.setItem('lista_alunos', JSON.stringify(listaAlunos));
}

function EditarAlunoLocalStorage(Aluno) {
    const localStorage = window.localStorage;
    localStorage.setItem('lista_alunos', JSON.stringify(Aluno));
}

function recuperaDados(){
    const localStorage = window.localStorage;
    let listaAluno = [];
    if (localStorage.getItem('lista_alunos') != null) {
        listaAluno = JSON.parse(localStorage.getItem('lista_alunos'));
    }
    return listaAluno;
}

function desabilitarInputsSegundoBimestre(){
    
    const id = pegaValorURL();
    if(parseFloat(id.id) == -1){
        document.getElementById("input_prova_2").disabled = true;
        document.getElementById("input_aep_2").disabled = true;
        document.getElementById("input_prova_integrada_2").disabled = true;
    } else{
        preencheInputsComValoresDoLocalStorage(parseFloat(id.id));
    }
}

function preencheInputsComValoresDoLocalStorage(id){
    const dados = recuperaDadosAluno();

    dados.forEach(function (dado) {
        if(dado.id == id){
            //dados pessoais
            document.getElementById("input_nome").value = dado.nome;
            document.getElementById("input_email").value = dado.email;
            document.getElementById("input_ra").value = dado.ra;

            //dados primeira prova
            document.getElementById("input_prova_1").value = dado.prova1
            document.getElementById("input_aep_1").value = dado.aep1
            document.getElementById("input_prova_integrada_1").value = dado.integrada1

            //dados segunda prova
            document.getElementById("input_prova_2").value = dado.prova2
            document.getElementById("input_aep_2").value = dado.aep2
            document.getElementById("input_prova_integrada_2").value = dado.integrada2
        }
    });
}

function recuperaDadosAluno(){
    const localStorage = window.localStorage;
    let listaAluno = [];
    if (localStorage.getItem('lista_alunos') != null) {
        listaAluno = JSON.parse(localStorage.getItem('lista_alunos'));
    }
    return listaAluno;
}

function pegaValorURL(){
    //pega parametros de Id passados na URL e retorna o valor
    let query = location.search.slice(1);
    let partes = query.split('&');
    let data = {};
    partes.forEach(function (parte) {
        let chaveValor = parte.split('=');
        let chave = chaveValor[0];
        let valor = chaveValor[1];
        data[chave] = valor;
    });
    return data;
}

function redirecionarParaTable(){
    window.location.replace("/main.html");
}

function adicionarEventListenerInputsProvas(input, isRA = false) {
    const inp = document.getElementById(input);
    inp.addEventListener("input", function(event) {
        //regex para verificar se a string dos inputs númericos estão recebendo só números decimais
        let regex = /^(\d+\.?\d*|\.\d+)$/;
        if (!regex.test(inp.value)) {
            inp.value = "";
        }

        if(!isRA){
            //verifica se o tamanho do número n ultrapassa 4 caracteres contando com o ponto
            if(inp.value.length > 4){
                inp.value = inp.value.substring(0, 4);
            }
        }
    });
}

const botaoSalvar = document.getElementById('salvar');

botaoSalvar.addEventListener('click', function(event) {
    event.preventDefault();
    adicionaDadosAluno();
});

const botaoVoltar = document.getElementById('voltar');

botaoVoltar.addEventListener('click', function(event) {
    event.preventDefault();
    redirecionarParaTable();
});

//adiciona event listener para os inputs das notas e RA
adicionarEventListenerInputsProvas("input_prova_1");
adicionarEventListenerInputsProvas("input_aep_1");
adicionarEventListenerInputsProvas("input_prova_integrada_1");
adicionarEventListenerInputsProvas("input_prova_2");
adicionarEventListenerInputsProvas("input_aep_2");
adicionarEventListenerInputsProvas("input_prova_integrada_2");
adicionarEventListenerInputsProvas("input_ra", true);

desabilitarInputsSegundoBimestre();
