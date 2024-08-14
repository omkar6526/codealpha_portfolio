document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    setTimeout(function() {
        document.getElementById('form-status').innerText = 'Thank you for your message, ' + name + '! I will get back to you at ' + email + ' soon.';
        document.getElementById('contact-form').reset();
    }, 1000);
});
