import './css/footer.css';
import './css/modal-rating.css';
import './js/modal-rating.js';
import { submitSubscription } from './js/api.js';

document
  .getElementById('subscribe-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
      await submitSubscription(email);
      alert('Subscribed successfully!');
    } catch (error) {
      alert('Failed to subscribe. Try again later.');
    }
  });
