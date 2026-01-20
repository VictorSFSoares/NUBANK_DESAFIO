function verificaSenha() {
    var nome_pessoa, senha_pessoa;
    
    nome_pessoa = document.getElementById("nome").value;
    senha_pessoa = document.getElementById("senha").value;

    if ((nome_pessoa === "Aline") && (senha_pessoa === "A12345678$")) {
        alert("Acesso permitido!");
        return true;
    }

    else {
        alert("Acesso negado!");
        return false;
    }
}
