document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o container principal da secção de destaques
  const containerDestaque = document.querySelector('.destaque');
  
  if (!containerDestaque) return;

  // Seleciona apenas os elementos internos da secção de destaques
  const slides = containerDestaque.querySelectorAll('.container-destaques .slider');
  const btnPrev = containerDestaque.querySelector('.prev-button');
  const btnNext = containerDestaque.querySelector('.next-button');

  if (slides.length === 0) return;

  let slideAtual = 0;

  // Função para exibir o slide correspondente ao índice
  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });
  }

  // Avança para o próximo banner (com ciclo infinito)
  function proximoSlide() {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
  }

  // Volta para o banner anterior
  function slideAnterior() {
    slideAtual = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(slideAtual);
  }

  // Regista os eventos de clique nos botões
  if (btnNext) btnNext.addEventListener('click', proximoSlide);
  if (btnPrev) btnPrev.addEventListener('click', slideAnterior);

  // Inicializa o primeiro banner visível
  mostrarSlide(slideAtual);

  // Troca automática de banner a cada 5 segundos
  setInterval(proximoSlide, 5000);
});