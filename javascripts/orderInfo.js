function showOrderInfo() {
    const descriptions = {
        'noColor-noBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Solo el delinado sin fondo y sin color.",
        'flatColor-noBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color simple y plano, sin fondo.",
        'trueColorS-noBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color con sombreado simple, sin fondo.",
        'trueColorTS-noBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color con sombreado difuminado en los personajes, sin fondo.",
        'flatColor-simpleBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color simple y plano, con un fondo color azul y degradados.",
        'trueColorS-simpleBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color con sombreado simple, con un fondo color azul y degradados.",
        'trueColorTS-simpleBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color con sombreado difuminado en los personajes, con un fondo color azul y degradados.",
        'flatColor-flatBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color simple y plano, ambos están en una nave en el espacio, el fondo que sea de color plano sin mucho detalle.",
        'trueColorS-flatBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color con sombreado simple, ambos están en una nave en el espacio, el fondo que sea de color plano sin mucho detalle.",
        'trueColorTS-flatBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color con sombreado difuminado en los personajes, ambos están en una nave en el espacio, el fondo que sea de color plano sin mucho detalle.",
        'flatColor-detailedBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color simple y plano, ambos están en la playa cerca de la costa, hay un barquito en el mar y una palmera detras de ellos, coloreado detallado.",
        'trueColorS-detailedBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color con sombreado simple, ambos están en la playa cerca de la costa, hay un barquito en el mar y una palmera detras de ellos, coloreado detallado.",
        'trueColorTS-detailedBG': "Detalles: Fan Art de un lobo y un zorro de un videojuego, el zorro tiene su brazo pasado por el cuello del lobo, usan ropa interior solmente y guantes tipicos de su traje. Color con sombreado difuminado en los personajes, ambos están en la playa cerca de la costa, hay un barquito en el mar y una palmera detras de ellos, coloreado detallado."
    };

    // Crear una clave basada en las opciones seleccionadas
    const orderKey = `${selectedColor}-${selectedBG}`;

    // Obtener la descripción correspondiente
    const orderDescription = descriptions[orderKey] || "Descripción no disponible para la combinación seleccionada.";

    // Mostrar la descripción en una ventana emergente
    alert(orderDescription);
}

// Asignar el event listener al botón de "Info. Simulado del Pedido"
document.querySelector('.btn-danger').addEventListener('click', showOrderInfo);