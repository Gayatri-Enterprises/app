const scriptURL = 'https://script.google.com/macros/s/AKfycbwdd464b3U2Zckvqs3Oc3umKIe9ni07610tAsKgTQsxIWbOEaHnnGQtCYrGSXbvphm3hQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    alert("Thank you! Your form is submitted successfully.");
    form.reset();
    // window.location.href = '/index.html'; // Redirect to the home page
  })
  .catch(error => console.error('Error!', error.message))
})
