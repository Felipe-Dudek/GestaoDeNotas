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
    
    const dadosALuno = criaEstruturaDeDados(nome.value, email.value, ra.value, prova1.value, aep1.value, integrada1.value, prova2.value, aep2.value, integrada2.value)

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
