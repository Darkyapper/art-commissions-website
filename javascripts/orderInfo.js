//Funcion para mostrar una descripcion simulada de acuerdo a los parametros en la herramienta de previsualizacion.
function showOrderInfo() {
    const descriptions = {
        'noColor-noBG': "Detalles: Dibujo de un lobo usando un short roto, solo lineas sin color y sin fondo.",
        'flatColor-noBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe, sin fondo.",
        'trueColorS-noBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe, sombreado sencillo y plano, sin fondo.",
        'trueColorTS-noBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe, sombreado detallado y con iluminación sin fondo.",
        'flatColor-simpleBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe, con fun fondo azul con gradiantes por arriba y abajo.",
        'trueColorS-simpleBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe, sombreado sencillo y plano, con fondo azul con gradiantes por arriba y abajo.",
        'trueColorTS-simpleBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe, sombreado detallado y con iluminación, con fondo azul con gradiantes por arriba y abajo.",
        'flatColor-flatBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe en un barco navegando mientras cae una tormenta, el coloreado del fondo sería simple.",
        'trueColorS-flatBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe en un barco navegando mientras cae una tormenta, el coloreado del fondo sería simple, el personaje con sombreado sencillo y plano.",
        'trueColorTS-flatBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe en un barco navegando mientras cae una tormenta, el coloreado del fondo sería simple, el personaje con un sombreado detallado y con iluminación.",
        'flatColor-detailedBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe en un barco navegando mientras cae una tormenta, el coloreado del fondo sería detallado, con sombreado y degradados.",
        'trueColorS-detailedBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe en un barco navegando mientras cae una tormenta, el coloreado del fondo sería detallado, con sombreado y degradados, el personaje con sombreado sencillo y plano.",
        'trueColorTS-detailedBG': "Detalles: Dibujo de un lobo gris con patrones de escalas de grises, usando piercings y un short roto de color cafe en un barco navegando mientras cae una tormenta, el coloreado del fondo sería detallado, con sombreado y degradados, el personaje con un sombreado detallado y con iluminación."
    };

    const orderKey = `${selectedColor}-${selectedBG}`;

    const orderDescription = descriptions[orderKey] || "La descripción para la combinación selecionada no está disponible en este momento.";

    alert(orderDescription);
}

document.querySelector('.btn-danger').addEventListener('click', showOrderInfo);