document.addEventListener('DOMContentLoaded', () => {
  // Estado inicial: 'em-cartaz' (ou 'todos' se quiser mostrar a página inteira de início)
  let statusAtual = 'em-cartaz'; 
  let generoAtual = 'todos';

  const todosOsFilmes = document.querySelectorAll('.verFilmes figure');
  

  // Aplica a combinação de filtros
  function aplicarFiltros() {
    todosOsFilmes.forEach(filme => {
      // Checa se o filme bate com o status selecionado
      const atendeStatus = (statusAtual === 'todos') || filme.classList.contains(statusAtual);

      // Checa se o filme bate com o gênero selecionado
      const atendeGenero = (generoAtual === 'todos') || filme.classList.contains(generoAtual);

      // Exibe apenas se atender a AMBOS os filtros
      if (atendeStatus && atendeGenero) {
        filme.style.display = '';
      } else {
        filme.style.display = 'none';
      }
    });
  }

  // Mudar aba de Status
  window.Cartaz = function() {
    statusAtual = 'em-cartaz';
    aplicarFiltros();
  };

  window.Embreve = function() {
    statusAtual = 'em-breve';
    aplicarFiltros();
  };

  // Botão "Todos": Limpa apenas o filtro de gênero (mantém Em Cartaz / Em Breve)
  window.Todos = function() {
    generoAtual = 'todos';
    aplicarFiltros();
  };

  // Filtros de Gênero
  window.Terror = function() { generoAtual = 'terror'; aplicarFiltros(); };
  window.Comedia = function() { generoAtual = 'comedia'; aplicarFiltros(); };
  window.Fantasia = function() { generoAtual = 'fantasia'; aplicarFiltros(); };
  window.Aventura = function() { generoAtual = 'aventura'; aplicarFiltros(); };
  window.Ficcao = function() { generoAtual = 'ficcao'; aplicarFiltros(); };
  window.Drama = function() { generoAtual = 'drama'; aplicarFiltros(); };
  window.Suspense = function() { generoAtual = 'suspense'; aplicarFiltros(); };
  window.Romance = function() { generoAtual = 'romance'; aplicarFiltros(); };
  window.Animacao = function() { generoAtual = 'animacao'; aplicarFiltros(); };

  // Aplica o filtro inicial ao carregar a página
  aplicarFiltros();
});