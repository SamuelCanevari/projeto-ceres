const form = document.getElementById("formularioCadastro");
const senha = document.getElementById("cadastroSenha");
const senhaConfirmacao = document.getElementById("cadastroSenhaConfirma");


form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checarInputs();
});



function checarInputs() {
    const senhaValor = senha.value;
    const senhaConfirmacaoValor = senhaConfirmacao.value;

    if(senhaValor != senhaConfirmacaoValor){
        alert("Senhas não coincidem")
    }

}