 document.getElementById('btnInscription').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('inscription').style.display = 'block';
        window.scrollTo({
            top: document.getElementById('inscription').offsetTop,
            behavior: 'smooth'
        });
    });

    