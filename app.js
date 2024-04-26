function adicionaDadosAluno(){
    let erros = []

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

    const tamanhoTable = recuperaDados();

    let id = tamanhoTable.length++;

    //cria estrutura de dados com os dados do aluno
    const dadosAluno = criaEstruturaDeDados(id, nome.value, email.value, ra.value, prova1.value, aep1.value, integrada1.value, prova2.value, aep2.value, integrada2.value);

    //armazena os dados no local storage
    adicionaAlunoLocalStorage(dadosAluno);
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

function recuperaDados(){
    const localStorage = window.localStorage;
    let listaAluno = [];
    if (localStorage.getItem('lista_alunos') != null) {
        listaAluno = JSON.parse(localStorage.getItem('lista_alunos'));
    }
    return listaAluno;
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

//adiciona event listener para os inputs das notas e RA
adicionarEventListenerInputsProvas("input_prova_1");
adicionarEventListenerInputsProvas("input_aep_1");
adicionarEventListenerInputsProvas("input_prova_integrada_1");
adicionarEventListenerInputsProvas("input_prova_2");
adicionarEventListenerInputsProvas("input_aep_2");
adicionarEventListenerInputsProvas("input_prova_integrada_2");
adicionarEventListenerInputsProvas("input_ra", true);
