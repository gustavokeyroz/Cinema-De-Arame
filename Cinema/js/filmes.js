const FILMES_DATA = {
  // --- Em Cartaz ---
  'arvore-encantada': {
    titulo: 'A Maravilhosa Árvore Encantada',
    status: 'em-cartaz',
    imagem: '../images/cartaz/a-maravilhosa-arvore-encantada.jpeg',
    descricao: 'Crianças descobrem um portal mágico escondido no coração de uma floresta mística.',
    dias: [
      { data: '28/09', horario: '11:00' },
      { data: '29/09', horario: '11:00' }
    ]
  },
  'toy-story-5': {
    titulo: 'Toy Story 5',
    status: 'em-cartaz',
    imagem: '../images/cartaz/toy-story-5.jpeg',
    descricao: 'Woody, Buzz e a turma enfrentam uma nova era onde os brinquedos competem com a tecnologia.',
    dias: [
      { data: '28/09', horario: '13:30' },
      { data: '29/09', horario: '13:30' }
    ]
  },
  'homem-aranha': {
    titulo: 'Homem Aranha: Um Novo Dia',
    status: 'em-cartaz',
    imagem: '../images/cartaz/homem-aranha-um-novo-dia.jpeg',
    descricao: 'O herói da vizinhança enfrenta novos vilões para proteger a cidade de Nova York.',
    dias: [
      { data: '28/09', horario: '16:00' },
      { data: '29/09', horario: '16:00' }
    ]
  },
  'odisseia': {
    titulo: 'A Odisseia',
    status: 'em-cartaz',
    imagem: '../images/cartaz/odisseia.jpeg',
    descricao: 'Uma jornada épica pelo mar Egeu em busca do retorno para casa.',
    dias: [
      { data: '30/09', horario: '16:00' },
      { data: '01/10', horario: '16:00' }
    ]
  },
  'resident-evil': {
    titulo: 'Resident Evil',
    status: 'em-cartaz',
    imagem: '../images/cartaz/resident-evil.jpeg',
    descricao: 'Uma equipe de elite combate ameaças biológicas em uma cidade tomada por zumbis.',
    dias: [
      { data: '28/09', horario: '18:30' },
      { data: '29/09', horario: '18:30' }
    ]
  },
  'devoradores-de-estrelas': {
    titulo: 'Devoradores de Estrelas',
    status: 'em-cartaz',
    imagem: '../images/cartaz/devoradores-de-estrelas.jpeg',
    descricao: 'Astronautas partem em uma missão espacial desesperada para salvar o futuro da Terra.',
    dias: [
      { data: '28/09', horario: '21:00' },
      { data: '29/09', horario: '21:00' }
    ]
  },
  'la-la-land': {
    titulo: 'La La Land',
    status: 'em-cartaz',
    imagem: '../images/cartaz/la-la-land.jpeg',
    descricao: 'Um pianista de jazz e uma atriz iniciante buscam seus sonhos na cidade de Los Angeles.',
    dias: [
      { data: '30/09', horario: '21:00' },
      { data: '01/10', horario: '21:00' }
    ]
  },
  'virtuosas': {
    titulo: 'Virtuosas',
    status: 'em-cartaz',
    imagem: '../images/cartaz/virtuosas.jpeg',
    descricao: 'Uma história intensa e misteriosa sobre segredos, fé e redenção.',
    dias: [
      { data: '02/10', horario: '15:00' }
    ]
  },
  'franz': {
    titulo: 'Franz',
    status: 'em-cartaz',
    imagem: '../images/cartaz/franz.jpeg',
    descricao: 'Um drama emocionante sobre a vida, conflitos e obras de Franz Kafka.',
    dias: [
      { data: '02/10', horario: '18:00' }
    ]
  },
  'minha-melhor-amiga': {
    titulo: 'Minha Melhor Amiga',
    status: 'em-cartaz',
    imagem: '../images/cartaz/minha-melhor-amiga.jpeg',
    descricao: 'Uma comédia leve e divertida sobre as confusões de uma amizade inseparável.',
    dias: [
      { data: '03/10', horario: '14:00' }
    ]
  },
  'no-limite-da-justica': {
    titulo: 'No Limite da Justiça',
    status: 'em-cartaz',
    imagem: '../images/cartaz/no-limite-da-justica.jpeg',
    descricao: 'Um investigador arrisca tudo para desvendar uma conspiração no sistema judiciário.',
    dias: [
      { data: '03/10', horario: '17:00' }
    ]
  },

  // --- Em Breve ---
  'vingadores': {
    titulo: 'Vingadores: Doutor Destino',
    status: 'em-breve',
    imagem: '../images/cartaz/vingadores-doomsday.jpeg',
    descricao: 'Os heróis da Terra se reúnem para enfrentar a maior e mais perigosa ameaça do multiverso.',
  },
  'duna-3': {
    titulo: 'Duna: Parte 3',
    status: 'em-breve',
    imagem: '../images/cartaz/duna-parte-3.jpeg',
    descricao: 'A conclusão épica da jornada de Paul Atreides no planeta desértico Arrakis.',
  },
  'verity': {
    titulo: 'Verity',
    status: 'em-breve',
    imagem: '../images/cartaz/verity.jpeg',
    descricao: 'Uma escritora encontra manuscritos perturbadores que revelam verdades obscuras.',
  },
  'jogos-vorazes': {
    titulo: 'Jogos Vorazes',
    status: 'em-breve',
    imagem: '../images/cartaz/jogos-vorazes.jpeg',
    descricao: 'A luta pela sobrevivência e pela liberdade em uma sociedade distópica e cruel.',
  }
};

// 2. Capturar os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('filme');
const diaIndex = urlParams.get('diaIndex');

// 3. Função para carregar as informações básicas do filme (Título, Imagem, Descrição)
function carregarInfoFilme() {
  const filmeInfo = FILMES_DATA[movieId];

  if (filmeInfo) {
    document.getElementById('filme-titulo').innerText = filmeInfo.titulo;
    document.getElementById('filme-img').src = filmeInfo.imagem;
    document.getElementById('filme-descricao').innerText = filmeInfo.descricao;
    return true;
  } else {
    document.getElementById('filme-titulo').innerText = 'Filme não encontrado';
    document.getElementById('filme-descricao').innerText = 'Por favor, selecione um filme no catálogo.';
    return false;
  }
}

// 4. Função para exibir os botões interativos de sessão (Usada em sessao.html / detalhes)
function exibirSessoesDoFilme(filmeKey) {
  const filme = FILMES_DATA[filmeKey];
  const container = document.querySelector('.info-painel');

  if (!filme || !container) return;

  if (filme.status === 'em-cartaz' && filme.dias) {
    let divBotoes = document.getElementById('botoes-sessoes');

    if (!divBotoes) {
      divBotoes = document.createElement('div');
      divBotoes.id = 'botoes-sessoes';
      divBotoes.className = 'container-botoes-sessoes';
      container.appendChild(divBotoes);
    }

    divBotoes.innerHTML = '';

    filme.dias.forEach((sessao, index) => {
      const btnSessao = document.createElement('button');
      btnSessao.className = 'btn-sessao';
      btnSessao.innerText = `${sessao.data} às ${sessao.horario}`;

      btnSessao.addEventListener('click', () => {
        window.location.href = `./reserva.html?filme=${filmeKey}&diaIndex=${index}`;
      });

      divBotoes.appendChild(btnSessao);
    });
  } else if (filme.status === 'em-breve') {
    const aviso = document.createElement('h3');
    aviso.id = 'aviso_de_sessao';
    aviso.innerText = 'Ops! Filme está no catálogo "em breve", então ainda não possui sessões!';
    container.appendChild(aviso);
  }
}

// 5. Função para exibir apenas a sessão selecionada como texto (Usada em reserva.html)
function exibirDetalhesReserva(filmeKey, indexSelecionado) {
  const filme = FILMES_DATA[filmeKey];
  const container = document.querySelector('.info-sessao-selecionada');

  if (!filme || !container || indexSelecionado === null || isNaN(indexSelecionado)) return;

  const sessaoEscolhida = filme.dias[indexSelecionado];

  if (sessaoEscolhida) {
    const infoSessao = document.createElement('div');
    infoSessao.className = 'badge-sessao';
    infoSessao.innerHTML = `
      <span>Data: <strong>${sessaoEscolhida.data}</strong></span> | 
      <span>Horário: <strong>${sessaoEscolhida.horario}</strong></span>
    `;

    container.appendChild(infoSessao);
  }
}

// --- INICIALIZAÇÃO DA PÁGINA ---
const filmeCarregado = carregarInfoFilme();

if (filmeCarregado) {
  // Se for a página de reserva e houver diaIndex, mostra apenas a badge informativa
  if (window.location.pathname.includes('reserva.html') && diaIndex !== null) {
    exibirDetalhesReserva(movieId, parseInt(diaIndex));
  } else {
    // Caso contrário, mostra os botões para selecionar horário
    exibirSessoesDoFilme(movieId);
  }
}