// --- 1. CONFIGURACIÓN INICIAL Y DATOS ---

// Modelos de vehículos disponibles con precios base
// NOTA: Con la nueva funcionalidad, basePrice ya no se usará para el cálculo principal,
// sino como un valor sugerido inicial al añadir un vehículo.
const vehicleModels = [
    { id: 'jac-x100', name: "X100", basePrice: 0 },
    { id: 'jac-urban-chasis-3ton', name: "Urban Chasis 3 TON", basePrice: 0 },
    { id: 'jac-urban-ferretero-3ton', name: "Urban Ferretero 3 TON", basePrice: 0 },
    { id: 'jac-c-3500-4x4', name: "C-3500 4x4", basePrice: 0 },
    { id: 'jac-doble-cabina', name: "Doble Cabina", basePrice: 0 },
    { id: 'jac-pionero-5TON', name: "Pionero Chasis - 5TON", basePrice: 0 },
    { id: 'jac-pionero-5TON', name: "Pionero Ferretero - 5TON", basePrice: 0 },
    { id: 'jac-6t-chasis-6ton', name: "6T Chasis 6 TON", basePrice: 0 },
    { id: 'jac-6t-ferretero-6ton', name: "6T Ferretero 6 TON", basePrice: 0 },
    { id: 'jac-bufalo-12ton', name: "Búfalo 12 TON", basePrice: 0 },
    { id: 'jac-leyenda-chasis-20ton', name: "Leyenda Chasis - 20 TON", basePrice: 0 },
    { id: 'jac-cavalino-240hp-22ton', name: "Cavalino 240HP - 22 TON", basePrice: 0 },
    { id: 'jac-chuto-4251-380hp-40ton', name: "Chuto 4251 380HP - 40 TON", basePrice: 0 },
    { id: 'jac-chuto-4251-430hp-45ton', name: "Chuto 4251 430HP - 45 TON", basePrice: 0 },
    { id: 'jac-la-venezolana-gasolina-4x2', name: "La Venezolana - Gasolina 4X2", basePrice: 0 },
    { id: 'jac-la-venezolana-diesel-4x2', name: "La Venezolana - Diesel 4X2", basePrice: 0 },
    { id: 'jac-la-venezolana-diesel-4x4', name: "La Venezolana - Diesel 4X4", basePrice: 0 },
    { id: 'jac-la-venezolana-pro-4x4', name: "La Venezolana Pro 4x4", basePrice: 0 },
    { id: 'jac-extreme', name: "T8 Extreme", basePrice: 0},
    { id: 'jac-aventura-gasolina', name: "Aventura - Gasolina", basePrice: 0 },
    { id: 'jac-aventura-diesel', name: "Aventura - Diesel", basePrice: 0 },
    { id: 'jac-arena-manual', name: "Arena Manual", basePrice: 0 },
    { id: 'jac-arena-automatico', name: "Arena Automático", basePrice: 0 },
    { id: 'jac-arena-pro', name: "Arena PRO", basePrice: 0 },
    { id: 'jac-nevado-manual', name: "Nevado Manual", basePrice: 0 },
    { id: 'jac-nevado-automatico', name: "Nevado Automático", basePrice: 0 },
    { id: 'jac-tepuy', name: "Tepuy", basePrice: 0 },
    { id: 'jac-tepuy-pro', name: "Tepuy Pro", basePrice: 0 },
    { id: 'jac-savanna', name: "Savanna", basePrice: 0 },
    { id: 'jac-j7', name: "J7", basePrice: 0 },
    { id: 'jac-elite', name: "Élite", basePrice: 0 },
    { id: 'sunray-v4-pasajero', name: "Sunray V4 Pasajeros", basePrice: 0 },
    { id: 'sunray-v4-carga', name: "Sunray V4 Carga", basePrice: 0 },
    { id: 'sunray-v6-pasajeros', name: "Sunray V6 Pasajeros", basePrice: 0 },
    { id: 'sunray-v6-carga', name: "Sunray V6 Carga", basePrice: 0 },
    { id: 'jac-refine', name: "Refine", basePrice: 0 },
    { id: 'voltio-electrico', name: "Voltio Eléctrico", basePrice: 0 },
    { id: 'electron-electrico', name: "Electron Eléctrico", basePrice: 0 },
    { id: 'nevado-electrico', name: "Nevado Eléctrico", basePrice: 0 },
    { id: '1073-electrico', name: "1073 Eléctrico", basePrice: 0 },
    { id: 'sunray-v4-ambulancia', name: "Sunray V4 Ambulancia", basePrice: 0 },
    { id: 'arena-policial', name: "Arena Policial", basePrice: 0 },
    { id: 'nevado-policial', name: "Nevado Policial", basePrice: 0 },
    { id: 'j7-policial', name: "J7 Policial", basePrice: 0 },
    { id: 'la-venezolana-policial', name: "La Venezolana Policial", basePrice: 0 },
    { id: 'la-venezolana-policial-diesel', name: "La Venezolana Policial Diesel", basePrice: 0 },
    { id: 'jac-compactador', name: "Compactador", basePrice: 0 },
    { id: '6730-autobus', name: "6730 autobus 28+6+1 Puestos", basePrice: 0 },
    { id: 'x100-cava-conservacion', name: "X100 Cava de Conservación", basePrice: 0 },
    { id: 'urban-cava-seca-3ton', name: "Urban Cava Seca - 3TON", basePrice: 0 },
    { id: 'urban-cava-conservacion-3ton', name: "Urban Cava de Conservación - 3 TON", basePrice: 0 },
    { id: 'urban-cava-refrigerada-3ton', name: "Urban Cava Refrigerada - 3 TON", basePrice: 0 },
    { id: '6t-cava-seca-6ton', name: "6T Cava seca - 6 TON", basePrice: 0 },
    { id: '6t-cava-conservacion-6ton', name: "6T Cava de Conservación - 6 TON", basePrice: 0 },
    { id: '6t-cava-refrigerada-6ton', name: "6T Cava Refrigerada - 6TON", basePrice: 0 },
    { id: 'bufalo-cava-seca-12ton', name: "Búfalo Cava Seca - 12TON", basePrice: 0 },
    { id: 'bufalo-cava-conservacion-12ton', name: "Búfalo Cava Conservación - 12TON", basePrice: 0 },
    { id: 'bufalo-cava-refrigerada-12ton', name: "Búfalo Cava Refrigerada - 12TON", basePrice: 0 },
    { id: 'leyenda-cava-seca-20ton', name: "Leyenda Cava Seca - 20 TON", basePrice: 0 },
    { id: 'elevador-brazo-20m', name: "Elevador Brazo Elevador - 20M", basePrice: 0 },
    { id: 'minero-20m3-tolva', name: "Minero 20M3 - Capacidad Tolva", basePrice: 0 },
    { id: 'minero-14m3-tolva', name: "Minero 14M3 - Capacidad Tolva", basePrice: 0 },
    { id: 'volkan-mezclador', name: "Volkan Mezclador", basePrice: 0 },
];

// Contador para generar IDs únicos para cada vehículo agregado
let vehicleCounter = 0;

// La tasa de cambio ahora es solo referencial para la impresión si el precio se introdujo en USD
// No se usará para CONVERTIR, sino para INFORMAR.
const EXCHANGE_RATE_VES_USD_DISPLAY = 36.5; // Ejemplo: 1 USD = 36.5 VES. Solo para mostrar en impresión.

// Referencias a elementos del DOM para evitar múltiples selecciones
const dom = {
    vehiclesContainer: document.getElementById('vehicles-container'),
    quoteSummary: document.getElementById('quote-summary'),
    subtotalDisplay: document.getElementById('subtotal'),
    totalDisplay: document.getElementById('total'),
    discountRow: document.getElementById('discount-row'), // Asumiendo que existe
    printArea: document.querySelector('.print-area'),
    clientNameInput: document.getElementById('client-name'),
    clientIdInput: document.getElementById('client-id'),
    clientPhoneInput: document.getElementById('client-phone'),
    clientEmailInput: document.getElementById('client-email'),
    notesInput: document.getElementById('notes'),
    dealershipAddressInput: document.getElementById('dealership-address'),
    salespersonInput: document.getElementById('salesperson'),
    paymentMethodSelect: document.getElementById('payment-method')
};

// --- 2. FUNCIONES DE UTILIDAD ---

/**
 * Formatea un número como moneda USD, VES o USDT.
 * @param {number} amount - El valor numérico a formatear.
 * @param {string} currencyCode - Código de la moneda ('USD', 'VES', 'USDT').
 * @returns {string} El valor formateado como string de moneda.
 */
const formatCurrency = (amount, currencyCode = 'USD') => {
    let symbol = '$';
    let locale = 'en-US';
    let minimumFractionDigits = 2;
    let maximumFractionDigits = 2;

    if (currencyCode === 'VES') {
        symbol = 'Bs';
        locale = 'es-VE';
    } else if (currencyCode === 'USDT') {
        symbol = 'USDT';
    }

    const formatter = new Intl.NumberFormat(locale, {
        style: 'decimal', // Usamos decimal para mayor control sobre el símbolo
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
        useGrouping: true
    });

    let formatted = formatter.format(amount);
    if (currencyCode === 'USD') {
        return `${symbol} ${formatted}`;
    } else if (currencyCode === 'USDT') {
        return `${symbol} ${formatted}`;
    } else if (currencyCode === 'VES') {
        return `${symbol} ${formatted}`;
    }
    return formatted; // Debería cubrirse por los if/else if
};


// --- 3. FUNCIONES PRINCIPALES DE GESTIÓN DE VEHÍCULOS ---

/**
 * Genera el HTML para las opciones de modelos de vehículos.
 * @returns {string} HTML de las opciones de select.
 */
const generateModelOptions = () => {
    // Al generar opciones, el value es el nombre del modelo para mapear, no el precio base.
    // El precio se llenará en el input de precio.
    return vehicleModels.map(model =>
        `<option value="${model.id}" data-base-price="${model.basePrice}">${model.name}</option>`
    ).join('');
};

/**
 * Agrega un nuevo formulario de vehículo al contenedor.
 * Incluye todos los campos de información y botones de acción.
 */
function addVehicle() {
    vehicleCounter++;
    const vehicleId = `vehicle-${vehicleCounter}`;
    const initialBasePrice = vehicleModels[0] ? vehicleModels[0].basePrice : 0; // Precio inicial del primer modelo

    const vehicleDiv = document.createElement('div');
    vehicleDiv.className = 'vehicle-item p-4 border border-gray-200 rounded-lg bg-gray-50 mb-4';
    vehicleDiv.dataset.id = vehicleId;

    vehicleDiv.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h4 class="font-bold text-gray-800">Vehículo #${vehicleCounter}</h4>
            <button type="button" onclick="removeVehicle(this)" class="text-red-500 hover:text-red-700 transition">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Modelo:</label>
                <select onchange="updatePriceInput(this)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 model-input">
                    ${generateModelOptions()}
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Cantidad:</label>
                <input type="number" value="1" min="1" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 quantity-input">
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1 price-label">Precio Unitario (USD):</label>
                <input type="number" step="0.01" value="${initialBasePrice}" min="0" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 price-input">
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Marca:</label>
                <input type="text" placeholder="JAC" value="JAC" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 brand-input">
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Color:</label>
                <input type="text" placeholder="Negro, Blanco, Rojo..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 color-input">
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Año:</label>
                <input type="number" placeholder="${new Date().getFullYear()}" min="2000" max="${new Date().getFullYear() + 2}" value="${new Date().getFullYear()}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 year-input">
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Motor:</label>
                <input type="text" placeholder="1.5L Gasolina, 2.0L Diesel..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 motor-input">
            </div>
        </div>
    `;

    dom.vehiclesContainer.appendChild(vehicleDiv);

    // Agrega event listeners para calcular automáticamente cuando los valores cambian
    const inputsToListen = vehicleDiv.querySelectorAll('.quantity-input, .price-input, .brand-input, .color-input, .year-input, .motor-input');
    inputsToListen.forEach(input => input.addEventListener('input', calculateQuote));

    // También escucha cambios en el select de modalidad de pago para actualizar los labels
    dom.paymentMethodSelect.addEventListener('change', updatePriceInputLabels);
    // Llamada inicial para asegurar que el label del precio unitario sea correcto al añadir el primer vehículo
    updatePriceInputLabels();
    calculateQuote(); // Recalcula la cotización
}

/**
 * Actualiza el valor del input de precio unitario y su label cuando se selecciona un modelo del dropdown.
 * @param {HTMLSelectElement} selectElement - El elemento select que fue cambiado.
 */
function updatePriceInput(selectElement) {
    const vehicleDiv = selectElement.closest('.vehicle-item');
    const priceInput = vehicleDiv.querySelector('.price-input');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const basePrice = parseFloat(selectedOption.dataset.basePrice) || 0;

    // Actualiza el valor del input de precio unitario con el precio base del modelo
    priceInput.value = basePrice;
    calculateQuote(); // Recalcula la cotización
}


/**
 * Actualiza los labels de "Precio Unitario" en cada formulario de vehículo
 * para reflejar la modalidad de pago seleccionada.
 */
function updatePriceInputLabels() {
    const paymentMethod = dom.paymentMethodSelect.value;
    const priceLabels = document.querySelectorAll('.price-label'); // Selecciona todos los labels de precio
    let labelText = 'Precio Unitario (';

    switch (paymentMethod) {
        case 'USD':
            labelText += 'USD):';
            break;
        case 'VES':
            labelText += 'Bs):';
            break;
        case 'USDT':
            labelText += 'USDT):';
            break;
        default:
            labelText += 'USD):'; // Por defecto
    }

    priceLabels.forEach(label => {
        label.textContent = labelText;
    });
}

/**
 * Elimina un formulario de vehículo.
 * @param {HTMLElement} button - El botón de eliminar presionado.
 */
function removeVehicle(button) {
    const vehicleItem = button.closest('.vehicle-item');
    vehicleItem.remove();
    calculateQuote(); // Recalcula la cotización
}

/**
 * Calcula la cotización total y actualiza el resumen, basándose en la modalidad de pago
 * y las entradas manuales del coordinador.
 */
function calculateQuote() {
    const vehicles = document.querySelectorAll('.vehicle-item');
    let totalAmount = 0; // Este será el total en la moneda seleccionada
    dom.quoteSummary.innerHTML = ''; // Limpia el contenido anterior

    const paymentMethod = dom.paymentMethodSelect.value;
    let currencySymbol = '';
    switch(paymentMethod) {
        case 'USD': currencySymbol = '$'; break;
        case 'VES': currencySymbol = 'Bs'; break;
        case 'USDT': currencySymbol = 'USDT'; break;
    }

    if (vehicles.length === 0) {
        dom.quoteSummary.innerHTML = '<p class="text-gray-500 italic text-center">Agregue vehículos y calcule la cotización para ver el resumen.</p>';
    } else {
        vehicles.forEach(vehicle => {
            const modelSelect = vehicle.querySelector('.model-input');
            const model = modelSelect.options[modelSelect.selectedIndex].text;
            const quantity = parseInt(vehicle.querySelector('.quantity-input').value) || 0;
            const price = parseFloat(vehicle.querySelector('.price-input').value) || 0; // Precio en la moneda seleccionada
            const brand = vehicle.querySelector('.brand-input').value;
            const color = vehicle.querySelector('.color-input').value;
            const year = vehicle.querySelector('.year-input').value;
            const motor = vehicle.querySelector('.motor-input').value;
            const vehicleTotal = quantity * price; // Total de este vehículo en la moneda seleccionada
            totalAmount += vehicleTotal;

            // Crea el HTML para el resumen de cada vehículo
            const summaryItem = document.createElement('div');
            summaryItem.className = 'border-b pb-2 mb-2 last:border-b-0 last:pb-0';
            summaryItem.innerHTML = `
                <p class="font-semibold text-gray-800">${model}</p>
                <p class="text-gray-600 flex justify-between">
                    <span>${quantity} unidad(es) x ${currencySymbol} ${formatCurrency(price, paymentMethod)}</span>
                    <span class="font-semibold text-gray-800">${currencySymbol} ${formatCurrency(vehicleTotal, paymentMethod)}</span>
                </p>
                ${brand ? `<p class="text-sm text-gray-500 mt-1">Marca: ${brand}</p>` : ''}
                ${color ? `<p class="text-sm text-gray-500 mt-1">Color: ${color}</p>` : ''}
                ${year ? `<p class="text-sm text-gray-500 mt-1">Año: ${year}</p>` : ''}
                ${motor ? `<p class="text-sm text-gray-500 mt-1">Motor: ${motor}</p>` : ''}
            `;
            dom.quoteSummary.appendChild(summaryItem);
        });
    }

    // Muestra los resultados en el resumen
    dom.subtotalDisplay.textContent = formatCurrency(totalAmount, paymentMethod); // Subtotal es igual al total en esta lógica
    dom.totalDisplay.textContent = formatCurrency(totalAmount, paymentMethod);

    // Oculta la fila de descuento si no se usa
    if (dom.discountRow) {
        dom.discountRow.style.display = 'none';
    }
}

// --- 4. FUNCIONES DE IMPRESIÓN ---

/**
 * Prepara el área de impresión y activa el diálogo de impresión del navegador.
 */
function printQuote() {
    // 1. Obtener datos del formulario
    const clientName = dom.clientNameInput.value;
    const clientId = dom.clientIdInput.value;
    const clientPhone = dom.clientPhoneInput.value;
    const clientEmail = dom.clientEmailInput.value;
    const notes = dom.notesInput.value;
    const dealershipAddress = dom.dealershipAddressInput.value;
    const salesperson = dom.salespersonInput.value;
    const paymentMethodText = dom.paymentMethodSelect.options[dom.paymentMethodSelect.selectedIndex].text;
    const paymentMethodValue = dom.paymentMethodSelect.value;

    let totalAmountForPrint = 0;
    let currencySymbolForPrint = '';

    // Recopilar los detalles de cada vehículo para la impresión
    let vehiclesHtmlForPrint = '';
    document.querySelectorAll('.vehicle-item').forEach(vehicle => {
        const modelSelect = vehicle.querySelector('.model-input');
        const model = modelSelect.options[modelSelect.selectedIndex].text;
        const quantity = parseInt(vehicle.querySelector('.quantity-input').value) || 0;
        const price = parseFloat(vehicle.querySelector('.price-input').value) || 0; // Precio en la moneda seleccionada
        const brand = vehicle.querySelector('.brand-input').value;
        const color = vehicle.querySelector('.color-input').value;
        const year = vehicle.querySelector('.year-input').value;
        const motor = vehicle.querySelector('.motor-input').value;
        const vehicleTotal = quantity * price; // Total de este vehículo en la moneda seleccionada
        totalAmountForPrint += vehicleTotal; // Sumamos para el total general

        currencySymbolForPrint = ''; // Reiniciar para cada vehículo, luego se establecerá por el método de pago
        switch(paymentMethodValue) {
            case 'USD': currencySymbolForPrint = '$'; break;
            case 'VES': currencySymbolForPrint = 'Bs'; break;
            case 'USDT': currencySymbolForPrint = 'USDT'; break;
        }

        vehiclesHtmlForPrint += `
            <div class="vehicle-item-print">
                <div class="flex justify-between items-center mb-1">
                    <p class="font-bold">${model}</p>
                    <p class="text-right">Subtotal: ${currencySymbolForPrint} ${formatCurrency(vehicleTotal, paymentMethodValue)}</p>
                </div>
                <p>${quantity} unidad(es) x ${currencySymbolForPrint} ${formatCurrency(price, paymentMethodValue)}</p>
                ${brand ? `<p class="text-sm">Marca: ${brand}</p>` : ''}
                ${color ? `<p class="text-sm">Color: ${color}</p>` : ''}
                ${year ? `<p class="text-sm">Año: ${year}</p>` : ''}
                ${motor ? `<p class="text-sm">Motor: ${motor}</p>` : ''}
            </div>
        `;
    });

    const currentDate = new Date().toLocaleDateString('es-VE', { year: 'numeric', month: 'long', day: 'numeric' });

    // Determinar el símbolo final y el texto del total
    let finalCurrencySymbol = '';
    switch(paymentMethodValue) {
        case 'USD': finalCurrencySymbol = '$'; break;
        case 'VES': finalCurrencySymbol = 'Bs'; break;
        case 'USDT': finalCurrencySymbol = 'USDT'; break;
    }
    const finalTotalFormatted = formatCurrency(totalAmountForPrint, paymentMethodValue);


    // 2. Llenar el área de impresión con el nuevo diseño
    dom.printArea.innerHTML = `
        <style>
            /* Estilos específicos para impresión */
            @page {
                size: A4;
                margin: 0.5cm;
                /* Intenta suprimir encabezados y pies de página en la impresión */
                @top-left { content: ""; }
                @top-center { content: ""; }
                @top-right { content: ""; }
                @bottom-left { content: ""; }
                @bottom-center { content: ""; }
                @bottom-right { content: ""; }
            }
            body {
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                color: #333;
                -webkit-print-color-adjust: exact; /* Asegura la impresión de colores de fondo */
            }
            .print-container {
                width: 100%;
                max-width: 21cm; /* Ancho de A4 menos márgenes */
                margin: 0 auto;
                padding: 0.5cm;
                box-sizing: border-box;
                position: relative;
            }
            .watermark {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0.10; /* Transparencia muy ligera */
                z-index: -1;
                pointer-events: none;
                width: 70%; /* Ajusta el tamaño de la marca de agua */
                height: auto;
            }
            .header-print {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
                padding-bottom: 8px;
                border-bottom: 1px solid #ddd;
            }
            .header-print h1 {
                font-size: 1.4em;
                color: #000;
                margin: 0;
            }
            .header-print p {
                font-size: 0.85em;
                color: #555;
                margin: 1px 0;
            }
            .header-print img {
                height: 50px;
                width: auto;
            }
            .section-print {
                margin-bottom: 15px;
                padding: 10px;
                border: 1px solid #eee;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
            .section-print h2 {
                font-size: 1.3em;
                color: #333;
                margin-bottom: 8px;
                padding-bottom: 4px;
                border-bottom: 1px solid #eee;
            }
            .section-print .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 8px;
            }
            .section-print p {
                font-size: 0.85em;
                line-height: 1.3;
            }
            .vehicle-item-print {
                border: 1px solid #ddd;
                padding: 8px;
                border-radius: 5px;
                background-color: #fff;
                margin-bottom: 8px;
            }
            .vehicle-item-print .flex {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 3px;
            }
            .vehicle-item-print p {
                margin: 0;
                font-size: 0.85em;
            }
            .vehicle-item-print .font-bold {
                font-size: 0.9em;
            }
            .summary-print {
                margin-top: 20px;
                padding: 12px;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #fff;
                box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            }
            .summary-print .flex {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 4px 0;
            }
            .summary-print span {
                font-size: 0.9em;
            }
            .summary-print .total-row {
                font-size: 1.6em;
                font-weight: bold;
                border-top: 1px solid #eee;
                margin-top: 8px;
                padding-top: 8px;
                color: #0056b3;
            }
            .footer-print {
                margin-top: 20px;
                text-align: center;
                font-size: 0.75em;
                color: #777;
            }
            .footer-print p {
                margin: 2px 0;
            }
        </style>
        <div class="print-container">
            <img src="JACNEGRO.png" alt="Marca de Agua JAC" class="watermark">

            <div class="header-print">
                <div class="text-left">
                    <h1 class="text-4xl font-bold text-gray-900"></h1>
                    <p class="text-gray-600 text-lg">Concesionario JAC Obelisco</p>
                    <p class="text-gray-500 text-sm mt-1">Fecha: <span id="print-date" class="font-semibold">${currentDate}</span></p>
                </div>
                <img src="JACNEGRO.png" alt="Logo de la Empresa">
            </div>

            <div class="section-print">
                <h2>Datos del Cliente</h2>
                <div class="grid">
                    <p><strong>Nombre:</strong> <span id="print-client-name">${clientName || 'N/A'}</span></p>
                    <p><strong>Cédula/RIF:</strong> <span id="print-client-id">${clientId || 'N/A'}</span></p>
                    <p><strong>Teléfono:</strong> <span id="print-client-phone">${clientPhone || 'N/A'}</span></p>
                    <p><strong>Correo:</strong> <span id="print-client-email">${clientEmail || 'N/A'}</span></p>
                </div>
            </div>

            <div class="section-print">
                <h2>Vehículos Cotizados</h2>
                <div id="print-vehicles">
                    ${vehiclesHtmlForPrint || '<p class="text-gray-500 italic">No hay vehículos cotizados.</p>'}
                </div>
            </div>

            <div class="summary-print">
                <h2>Resumen de la Cotización</h2>
                <div class="flex">
                    <span>Subtotal:</span>
                    <span id="print-subtotal">${finalCurrencySymbol} ${finalTotalFormatted}</span>
                </div>
                <div class="flex">
                    <span>Modalidad de Pago:</span>
                    <span id="print-payment-method">${paymentMethodText}</span>
                </div>
                <div class="flex total-row">
                    <span>Total a Pagar:</span>
                    <span id="print-total">${finalCurrencySymbol} ${finalTotalFormatted}</span>
                </div>
                
            <div class="section-print">
                <h3>Notas Adicionales:</h3>
                <p id="print-notes" class="italic">${notes || 'N/A'}</p>
            </div>

            <div class="footer-print">
                <p><strong>Dirección del Concesionario:</strong> <span id="print-dealership-address">${dealershipAddress}</span></p>
                <p><strong>Vendedor:</strong> <span id="print-salesperson">${salesperson}</span></p>
                <p>Esta proforma es válida por 12 horas y está sujeta a la disponibilidad del inventario</p>
            </div>
        </div>
    `;

    // 3. Activar el diálogo de impresión
    window.print();
}

// Limpiar el formulario y el resumen
function clearForm() {
    dom.clientNameInput.value = '';
    dom.clientIdInput.value = '';
    dom.clientPhoneInput.value = '';
    dom.clientEmailInput.value = '';
    dom.notesInput.value = '';
    dom.dealershipAddressInput.value = '';
    dom.salespersonInput.value = '';
    dom.vehiclesContainer.innerHTML = ''; // Elimina todos los vehículos
    vehicleCounter = 0; // Reinicia el contador de vehículos
    dom.paymentMethodSelect.value = 'USD'; // Restablece la modalidad de pago a USD
    updatePriceInputLabels(); // Actualiza los labels de precio unitario
    calculateQuote(); // Recalcula para limpiar el resumen
}

// Opcional: Llamar a calculateQuote al cargar la página si ya hay vehículos por defecto
document.addEventListener('DOMContentLoaded', () => {
    // Agrega un event listener al selector de modalidad de pago para que recalcule al cambiar
    dom.paymentMethodSelect.addEventListener('change', () => {
        updatePriceInputLabels(); // Actualiza los labels de precio cuando cambia la modalidad de pago
        calculateQuote();
    });
    calculateQuote();
});