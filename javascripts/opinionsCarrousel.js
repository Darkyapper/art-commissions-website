document.addEventListener('DOMContentLoaded', () => {
    const opinions = document.querySelectorAll('.opinion-item');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    let currentIndex = 0;
    let autoSlideInterval;

    const showOpinion = (index) => {
        opinions.forEach((opinion, i) => {
            opinion.classList.remove('active');
            indicators[i].classList.remove('active');
            if (i === index) {
                opinion.classList.add('active');
                indicators[i].classList.add('active');
            }
        });
    };

    const nextOpinion = () => {
        currentIndex = (currentIndex === opinions.length - 1) ? 0 : currentIndex + 1;
        showOpinion(currentIndex);
    };

    const prevOpinion = () => {
        currentIndex = (currentIndex === 0) ? opinions.length - 1 : currentIndex - 1;
        showOpinion(currentIndex);
    };

    document.querySelector('.next-btn').addEventListener('click', () => {
        nextOpinion();
        resetAutoSlide();
    });

    document.querySelector('.prev-btn').addEventListener('click', () => {
        prevOpinion();
        resetAutoSlide();
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showOpinion(currentIndex);
            resetAutoSlide();
        });
    });

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextOpinion, 5000); // Cambia cada 5 segundos
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Iniciar el carrusel automático
    startAutoSlide();
    showOpinion(currentIndex);
});
