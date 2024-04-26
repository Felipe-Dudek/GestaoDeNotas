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

    if(parseFloat(prova1.value) >= 0.0 || parseFloat(prova1.value) <= 8.0){

    }

    //cria estrutura de dados com os dados do aluno
    const dadosALuno = criaEstruturaDeDados(nome.value, email.value, ra.value, prova1.value, aep1.value, integrada1.value, prova2.value, aep2.value, integrada2.value)

    //armazena os dados no local storage
    localStorage.setItem('lista_alunos', JSON.stringify(dadosALuno))
}

function criaEstruturaDeDados(nome, email, ra, prova1, aep1, integrada1, prova2, aep2, integrada2){
    return {
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

function adicionarEventListenerInputsProvas(input) {
    const inp = document.getElementById(input);
    inp.addEventListener("input", function(event) {
        //regex para verificar se a string dos campos númericos estão recebendo só números decimais
        let regex = /^(\d+\.?\d*|\.\d+)$/;
        if (!regex.test(inp.value)) {
            inp.value = "";
        }
    });
}

//adiciona event listener para os inputs das notas
adicionarEventListener("input_prova_1");
adicionarEventListener("input_aep_1");
adicionarEventListener("input_prova_integrada_1");
adicionarEventListener("input_prova_2");
adicionarEventListener("input_aep_2");
adicionarEventListener("input_prova_integrada_2");
        aep2: aep2,
        integrada2: integrada2
    }
}
