function verificar() {
    let anoNascimento = document.getElementById('ano').value.trim();
    let anoAtual = new Date().getFullYear(); // Obtém o ano atual

    let p = document.getElementById('teste');

    // Verifica se o ano de nascimento é numérico, não está vazio, e tem 4 dígitos
    if (anoNascimento === "" || isNaN(anoNascimento) || anoNascimento.length !== 4 || 
    Number(anoNascimento) > anoAtual || Number(anoNascimento) < 1940) {
        p.innerHTML = 'Por favor, insira um ano de nascimento válido (ex: 2004, 2010, 1986).';
        p.style.color = "red";
    }else if (anoNascimento.trim() === "" || isNaN(anoNascimento)) {
        p.innerHTML = 'Por favor, insira um ano de nascimento válido em números.';
        p.style.color = "red";    
    } else {
        let idade = anoAtual - Number(anoNascimento);

        if (idade >= 18 && idade <= 70) {
            p.innerHTML = 'Sim, você já tem idade para votar!';
            p.style.color = "green";
        } else if ((idade >= 16 && idade < 18) || idade > 70) {
            p.innerHTML = 'Seu voto é facultativo, você pode votar, mas não é obrigatório.';
        } else if (idade < 16) {
            p.innerHTML = 'Não, você ainda é menor de idade.';
            p.style.color = "red";
        }
    }
}



