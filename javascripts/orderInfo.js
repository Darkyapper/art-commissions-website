function showOrderInfo() {
    const descriptions = {
        'noColor-noBG': "",
        'flatColor-noBG': "",
        'trueColorS-noBG': "",
        'trueColorTS-noBG': "",
        'flatColor-simpleBG': "",
        'trueColorS-simpleBG': "",
        'trueColorTS-simpleBG': "",
        'flatColor-flatBG': "",
        'trueColorS-flatBG': "",
        'trueColorTS-flatBG': "",
        'flatColor-detailedBG': "",
        'trueColorS-detailedBG': "",
        'trueColorTS-detailedBG': ""
    };

    // Crear una clave basada en las opciones seleccionadas
    const orderKey = `${selectedColor}-${selectedBG}`;

    // Obtener la descripción correspondiente
    const orderDescription = descriptions[orderKey] || "iErr001: Descripción no disponible para la combinación seleccionada y/o no disponible en este momento.";

    // Mostrar la descripción en una ventana emergente
    alert(orderDescription);
}

// Asignar el event listener al botón de "Info. Simulado del Pedido"
document.querySelector('.btn-danger').addEventListener('click', showOrderInfo);