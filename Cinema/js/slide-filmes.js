document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todas as seções de carrossel existentes na página
  const slider_filmes = document.querySelectorAll('.em-cartaz, .em-breve');

  slider_filmes.forEach(section => {
    const container = section.querySelector('.container-filmes');
    const prevBtn = section.querySelector('.prev-button');
    const nextBtn = section.querySelector('.next-button');
    const firstCard = section.querySelector('.slider');
    const arrows = section.querySelectorAll('.prev-button, .next-button');

    if (!container || !prevBtn || !nextBtn || !firstCard) return;

    // Distância de rolagem
    function getScrollAmount() {
      const cardWidth = firstCard.offsetWidth;
      const track = section.querySelector('.slider-track');
      const gap = parseFloat(getComputedStyle(track).gap) || 16;
      return (cardWidth + gap);
    }

    // Função que esconde ou mostra as setas
    function checkOverflow() {
      // Tolera 2px de variação para arredondamentos de tela
      const hasScroll = container.scrollWidth - container.clientWidth > 2;

      

      arrows.forEach(arrow => {
        if (hasScroll) {
          arrow.classList.remove('hidden-arrow');
        } else {
          arrow.classList.add('hidden-arrow');
        }
      });

}


// Checa se a seta está escondida
if (prevBtn.classList.contains('hidden-arrow')) {
  console.log('As setas estão apagadas/escondidas');
} else {
  console.log('As setas estão visíveis');
}

    // Cliques das setas
    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    // Execução inicial
    checkOverflow();

    // Recalcula após o carregamento completo das imagens do carrossel
    const movieImages = container.querySelectorAll('img');
    movieImages.forEach(img => {
      if (img.complete) {
        checkOverflow();
      } else {
        img.addEventListener('load', checkOverflow);
      }
    });

    // Recalcula ao redimensionar a tela
    window.addEventListener('resize', checkOverflow);
  });
});