const modal = document.getElementById('modal-rating');
const closeModalBtn = document.querySelector('.modal-close-btn');

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.rate-btn')) {
    modal.classList.remove('hidden');
  }
});

document.getElementById('rating-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const rating = document.querySelector('input[name="rating"]:checked').value;
  console.log('Rating submitted:', rating);
  modal.classList.add('hidden');
});
