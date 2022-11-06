import '../style.css';

const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formSerialized = Object.fromEntries(formData);
  console.log(formSerialized);
}
