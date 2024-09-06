// Mapeo de imágenes según el tipo de fondo
const backgrounds = {
    noBG: "",
    simpleBG: "url('/images/preview img/simpleBG.png')",
    flatBG: "url('/images/preview img/flatBG.png')",
    detailedBG: "url('/images/preview img/detailBG.png')"
};

// Mapeo de costos según el tipo de fondo
const backgroundCosts = {
    noBG: 0,
    simpleBG: 0,
    flatBG: 15,
    detailedBG: 35
};

// Mapeo de costos según el tipo de coloreado
const colorCosts = {
    noColor: 95,
    flatColor: 175,
    trueColorS: 275,
    trueColorTS: 300
};

// Estado inicial de la herramienta
let selectedColor = 'noColor';
let selectedBG = 'noBG';
let exchangeRate = 19; // Cambia esto al valor actual del dólar

// Función para manejar la selección del tipo de coloreado
function handleColorSelection(event) {
    const selectedOption = event.target;

    // Remover la clase 'active' de todos los botones y agregarla solo al seleccionado
    document.querySelectorAll('.option-group:nth-child(1) .option').forEach(option => {
        option.classList.remove('active');
    });
    selectedOption.classList.add('active');

    // Actualizar el tipo de coloreado seleccionado
    selectedColor = selectedOption.dataset.color;

    // Si se selecciona "No Color" y hay un fondo activo que no es "No BG", se cambia el fondo a "No BG"
    if (selectedColor === 'noColor' && selectedBG !== 'noBG') {
        selectedBG = 'noBG';
        document.querySelectorAll('.option-group:nth-child(2) .option').forEach(option => {
            option.classList.remove('active');
        });
        document.querySelector('.option-group:nth-child(2) .option:nth-child(1)').classList.add('active');
        updatePreviewBackground();
    }

    // Actualizar la imagen de previsualización según el tipo de coloreado
    updatePreviewImage();

    // Actualizar el precio total
    updateTotalPrice();
}

// Función para manejar la selección del tipo de fondo
function handleBackgroundSelection(event) {
    const selectedOption = event.target;

    // Remover la clase 'active' de todos los botones y agregarla solo al seleccionado
    document.querySelectorAll('.option-group:nth-child(2) .option').forEach(option => {
        option.classList.remove('active');
    });
    selectedOption.classList.add('active');

    // Actualizar el tipo de fondo seleccionado
    selectedBG = selectedOption.dataset.background;

    // Si se selecciona un fondo que no es "No BG" y el color es "No Color", cambiar el color a "Flat Color"
    if (selectedBG !== 'noBG' && selectedColor === 'noColor') {
        selectedColor = 'flatColor';
        document.querySelectorAll('.option-group:nth-child(1) .option').forEach(option => {
            option.classList.remove('active');
        });
        document.querySelector('.option-group:nth-child(1) .option:nth-child(2)').classList.add('active');
        updatePreviewImage();
    }

    // Actualizar el fondo de previsualización
    updatePreviewBackground();

    // Actualizar el precio total
    updateTotalPrice();
}

// Función para actualizar la imagen de previsualización según el tipo de coloreado
function updatePreviewImage() {
    const imagePath = `images/preview img/p-${selectedColor}.png`;
    const previewImage = document.querySelector('.image-preview img');
    previewImage.src = imagePath;
}

// Función para actualizar el fondo de previsualización
function updatePreviewBackground() {
    const bgPath = backgrounds[selectedBG]; // Ruta del fondo según la selección
    const backgroundPreview = document.querySelector('.background-preview');
    if (bgPath!=="") {
        backgroundPreview.style.backgroundImage = bgPath;
    } else {
        backgroundPreview.style.backgroundImage = 'none';
    }
}

// Función para actualizar el precio total
function updateTotalPrice() {
    const colorPrice = colorCosts[selectedColor];
    const bgPrice = backgroundCosts[selectedBG];
    const totalPriceMXN = colorPrice + bgPrice;
    const totalPriceUSD = (totalPriceMXN / exchangeRate).toFixed(2);

    // Actualizar los textos de precio en la página
    document.querySelector('.total-es').textContent = `Precio Estimado: ${totalPriceMXN} MXN | ${totalPriceUSD} USD`;
}

// Asignar el dataset a cada opción de coloreado para identificar su tipo
document.querySelector('.option-group:nth-child(1) .option:nth-child(1)').dataset.color = 'noColor';
document.querySelector('.option-group:nth-child(1) .option:nth-child(2)').dataset.color = 'flatColor';
document.querySelector('.option-group:nth-child(1) .option:nth-child(3)').dataset.color = 'trueColorS';
document.querySelector('.option-group:nth-child(1) .option:nth-child(4)').dataset.color = 'trueColorTS';

// Asignar el dataset a cada opción de fondo para identificar su tipo
document.querySelector('.option-group:nth-child(2) .option:nth-child(1)').dataset.background = 'noBG';
document.querySelector('.option-group:nth-child(2) .option:nth-child(2)').dataset.background = 'simpleBG';
document.querySelector('.option-group:nth-child(2) .option:nth-child(3)').dataset.background = 'flatBG';
document.querySelector('.option-group:nth-child(2) .option:nth-child(4)').dataset.background = 'detailedBG';

// Agregar los event listeners para las opciones de coloreado
document.querySelectorAll('.option-group:nth-child(1) .option').forEach(option => {
    option.addEventListener('click', handleColorSelection);
});

// Agregar los event listeners para las opciones de fondo
document.querySelectorAll('.option-group:nth-child(2) .option').forEach(option => {
    option.addEventListener('click', handleBackgroundSelection);
});

// Inicializar la previsualización y el precio cuando se carga la página
updatePreviewImage();
updatePreviewBackground();
updateTotalPrice();
