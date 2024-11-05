function alterarStatus(id) {
    // Seleciona o elemento div correspondente ao jogo, utilizando o ID fornecido
    const elementoDaImagem = document.getElementById(`game-${id}`).querySelector('div');

    // Seleciona o elemento <a> (botão) correspondente ao jogo
    const elementoDoBotao = document.getElementById(`game-${id}`).querySelector('a');

    // Verifica se o texto do botão é 'Alugar'
    if (elementoDoBotao.textContent == 'Alugar') {
        // Adiciona a classe que indica que o jogo está alugado à div da imagem
        elementoDaImagem.classList.add('dashboard__item__img--rented');

        // Adiciona a classe que indica que o botão deve ser de 'Devolução'
        elementoDoBotao.classList.add('dashboard__item__button--return');

        // Muda o texto do botão para 'Devolver'
        elementoDoBotao.textContent = 'Devolver';
    }
    else {
        // Remove a classe que indica que o jogo está alugado da div da imagem
        elementoDaImagem.classList.remove('dashboard__item__img--rented');

        // Remove a classe que indica que o botão deve ser de 'Devolução'
        elementoDoBotao.classList.remove('dashboard__item__button--return');

        // Muda o texto do botão para 'Alugar'
        elementoDoBotao.textContent = 'Alugar';
    }
}