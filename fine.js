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
