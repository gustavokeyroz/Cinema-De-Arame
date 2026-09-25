const filmes = document.querySelectorAll('.verFilmes > figure');

function esconderTodos() {
  filmes.forEach(filme => {
    filme.style.display = 'none';
  });
}

function Todos() {
  filmes.forEach(filme => {
    filme.style.display = '';
  });
}

function Terror() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .terror').forEach(filme => {
    filme.closest('figure').style.display = '';
  });
}

function Ficcao() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .sciFI').forEach(filme => {
    filme.closest('figure').style.display = '';
  });
}

function Comedia() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .comedia').forEach(filme => {
    filme.closest('figure').style.display = '';
  });
}

function Fantasia() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .fantasia').forEach(filme => {
    filme.closest('figure').style.display = '';
  });
}

function Aventura() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .aventura').forEach(filme => {
    filme.closest('figure').style.display = '';
  });
}
