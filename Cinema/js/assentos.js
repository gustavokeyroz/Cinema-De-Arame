const cinema_layout = document.getElementById('cinema-seats');
const count = document.getElementById('count');
const price = document.getElementById('price');

const TOTAL_SEATS = 432;
const TICKET_PRICE = 20;

// 1. Cria a estrutura dos assentos no DOM
function createSeats(container, totalSeats) {
  container.innerHTML = ''; // Limpa a div antes de renderizar
  for (let i = 0; i < totalSeats; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    container.appendChild(seat);
  }
}

// 2. Carrega os dados gravados no localStorage e atualiza a interface
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    const seats = cinema_layout.querySelectorAll('.seat');

    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
}

// 3. Salva os assentos selecionados e atualiza a contagem/preço
function updateSelectedCount() {
  const selectedSeats = cinema_layout.querySelectorAll('.seat.selected');
  const seats = cinema_layout.querySelectorAll('.seat');

  // Mapeia os índices numéricos das cadeiras selecionadas (ex: [0, 4, 12])
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // Grava o array de índices no localStorage convertendo para String JSON
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedCount = selectedSeats.length;

  count.innerText = selectedCount;
  price.innerText = selectedCount * TICKET_PRICE;
}

// 4. Ouvinte de evento de clique nos assentos
cinema_layout.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Inicialização da página
createSeats(cinema_layout, TOTAL_SEATS);
populateUI(); // Restaura a seleção do localStorage
updateSelectedCount(); // Atualiza os números de assentos e preço na tela