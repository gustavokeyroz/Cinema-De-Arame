const filmes = document.querySelectorAll('.verFilmes > img');

function esconderTodos() {
  filmes.forEach(filme => {
    filme.style.display = 'none';
  });
}

function Todos() {
  filmes.forEach(filme => {
    filme.style.display = 'grid';
  });
}

function Terror() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .terror').forEach(filme => {
    filme.style.display = 'block';
  });
}

function Ficcao() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .sciFI').forEach(filme => {
    filme.style.display = 'grid';
  });
}

function Comedia() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .comedia').forEach(filme => {
    filme.style.display = 'grid';
  });
}

function Fantasia() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .fantasia').forEach(filme => {
    filme.style.display = 'grid';
  });
}

function Aventura() {
  esconderTodos();

  document.querySelectorAll('.verFilmes .aventura').forEach(filme => {
    filme.style.display = 'grid';
  });
}
