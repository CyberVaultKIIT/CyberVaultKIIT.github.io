document.getElementById('copy-email').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor click behavior

  const email = 'cybervault.kiit@kiit.ac.in'; // Replace with your email ID
  const temporaryInput = document.createElement('input');
  temporaryInput.value = email;
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  document.execCommand('copy');
  document.body.removeChild(temporaryInput);

  alert('Email ID copied to clipboard!');
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbzBkY2Zq5Hcwd6BU2P6ZUuBy8VnMqL4ioed1aokUzzYVI-okXHyneRZxHbj2meNqAQgeg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
