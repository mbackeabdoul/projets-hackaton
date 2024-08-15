 document.getElementById('btnInscription').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('inscription').style.display = 'block';
        window.scrollTo({
            top: document.getElementById('inscription').offsetTop,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    