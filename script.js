document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');
    const buttonsContainer = document.querySelector('.buttons');
    const titulo = document.getElementById('titulo');

    const noButtonPhrases = [
        'Segura?',
        'Muy segura?',
        'Segura segura?',
        'Segurísima?',
        'Completamente segura?',
        '¿No te arrepentirás?',
        'Piénsalo otra vez',
        'Di que si por favor',
        '😭😭',
        'No hay vuelta atrás',
        'No hay reembolso',
        'No hay devolución',
        'No hay nada',
        '¿Nada?'
    ];
    let noButtonClickCount = 0;

    yesButton.addEventListener('click', () => {
        titulo.classList.add('hidden');

        document.getElementById('firstImage').classList.add('hidden');
        buttonsContainer.classList.add('hidden');

        message.textContent = 'Mi amor, estoy tan feliz de que seas mi San Valentín. Me haces falta cada segundo que estamos separados, tus ojitos me matan, eres tan hermosa😍😍... Te amo, te amo, te amo😘🩷 Sabía que dirías que sí jsjsj🤭';
        message.classList.remove('hidden');
        document.getElementById('secondImage').classList.remove('hidden');
    });


    noButton.addEventListener('mouseover', () => {
        if (noButtonClickCount === 0) {
            noButton.style.position = 'absolute';    
        }

        const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonRect = noButton.getBoundingClientRect();
    const maxX = windowWidth - buttonRect.width;
    const maxY = windowHeight - buttonRect.height;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    
        noButton.textContent = noButtonPhrases[noButtonClickCount % noButtonPhrases.length];
        noButtonClickCount++;

        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize + 0}px`;
    });
});