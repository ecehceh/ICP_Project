document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Nama:', name);
        console.log('Email:', email);
        console.log('Pesan:', message);

        alert('Form berhasil dikirim!');
        form.reset();
    });
});
