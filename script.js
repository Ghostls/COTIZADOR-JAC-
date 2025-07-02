// --- 1. DATOS Y CONFIGURACIÓN ---
// Modelos de vehículos disponibles con precios base
// Se recomienda llenar los precios base para que la funcionalidad sea más útil.
const vehicleModels = [
    { id: 'jac-x100', name: "X100", basePrice: 0 },
    { id: 'jac-urban-chasis-3ton', name: "Urban Chasis 3 TON", basePrice: 0 },
    { id: 'jac-urban-ferretero-3ton', name: "Urban Ferretero 3 TON", basePrice: 0 },
    { id: 'jac-c-3500-4x4', name: "C-3500 4x4", basePrice: 0 },
    { id: 'jac-doble-cabina', name: "Doble Cabina", basePrice: 0 },
    { id: 'jac-6t-chasis-6ton', name: "6T Chasis 6 TON", basePrice: 0 },
    { id: 'jac-6t-ferretero-6ton', name: "6T Ferretero 6 TON", basePrice: 0 },
    { id: 'jac-bufalo-12ton', name: "Búfalo 12 TON", basePrice: 0 },
    { id: 'jac-leyenda-chasis-20ton', name: "Leyenda Chasis - 20 TON", basePrice: 0 },
    { id: 'jac-cavalino-240hp-22ton', name: "Cavalino 240HP - 22 TON", basePrice: 0 },
    { id: 'jac-chuto-4251-380hp-40ton', name: "Chuto 4251 380HP - 40 TON", basePrice: 0 },
    { id: 'jac-la-venezolana-gasolina-4x2', name: "La Venezolana - Gasolina 4X2", basePrice: 0 },
    { id: 'jac-la-venezolana-diesel-4x2', name: "La Venezolana - Diesel 4X2", basePrice: 0 },
    { id: 'jac-la-venezolana-diesel-4x4', name: "La Venezolana - Diesel 4X4", basePrice: 0 },
    { id: 'jac-la-venezolana-pro-4x4', name: "La Venezolana Pro 4x4", basePrice: 0 },
    { id: 'jac-aventura-gasolina', name: "Aventura - Gasolina", basePrice: 0 },
    { id: 'jac-arena-manual', name: "Arena Manual", basePrice: 0 },
    { id: 'jac-arena-automatico', name: "Arena Automático", basePrice: 0 },
    { id: 'jac-arena-pro', name: "Arena PRO", basePrice: 0 },
    { id: 'jac-nevado-manual', name: "Nevado Manual", basePrice: 0 },
    { id: 'jac-nevado-automatico', name: "Nevado Automático", basePrice: 0 },
    { id: 'jac-tepuy', name: "Tepuy", basePrice: 0 },
    { id: 'jac-tepuy-pro', name: "Tepuy Pro", basePrice: 0 },
    { id: 'jac-savanna', name: "Savanna", basePrice: 0 },
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

// --- 2. FUNCIONES PRINCIPALES ---

/**
 * Agrega un nuevo formulario de vehículo al contenedor.
 * Incluye todos los campos de información y botones de acción.
 */
function addVehicle() {
    vehicleCounter++;
    const container = document.getElementById('vehicles-container');

    // Crea el elemento HTML para el nuevo vehículo
    const vehicleDiv = document.createElement('div');
    vehicleDiv.className = 'vehicle-item p-4 border border-gray-200 rounded-lg bg-gray-50 mb-4';
    vehicleDiv.dataset.id = `vehicle-${vehicleCounter}`; // ID único y claro

    // HTML del formulario de vehículo
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
                <select onchange="updatePrice(this)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 model-input">
                    ${vehicleModels.map(model =>
                        `<option value="${model.basePrice}">${model.name}</option>`
                    ).join('')}
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Cantidad:</label>
                <input type="number" value="1" min="1" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 quantity-input">
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Precio Unitario (USD):</label>
                <input type="number" step="0.01" value="${vehicleModels[0].basePrice}" min="0" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 price-input">
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

    container.appendChild(vehicleDiv);

    // Agrega event listeners para calcular automáticamente cuando los valores cambian
    const inputsToListen = vehicleDiv.querySelectorAll('.quantity-input, .price-input, .model-input, .brand-input, .color-input, .year-input, .motor-input');
    inputsToListen.forEach(input => input.addEventListener('input', calculateQuote));
    
    // Calcula la cotización inmediatamente después de agregar un vehículo
    calculateQuote();
}

/**
 * Actualiza el precio del vehículo cuando se selecciona un modelo del dropdown.
 * @param {HTMLSelectElement} selectElement - El elemento select que fue cambiado.
 */
function updatePrice(selectElement) {
    const vehicleDiv = selectElement.closest('.vehicle-item');
    const priceInput = vehicleDiv.querySelector('.price-input');
    
    // El valor de la opción es el precio base que guardamos en el HTML
    priceInput.value = selectElement.value;
    
    // Recalcula la cotización
    calculateQuote();
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
 * Calcula la cotización total y actualiza el resumen.
 */
function calculateQuote() {
    const vehicles = document.querySelectorAll('.vehicle-item');
    let subtotal = 0;
    const summaryContainer = document.getElementById('quote-summary');
    summaryContainer.innerHTML = ''; // Limpia el contenido anterior

    if (vehicles.length === 0) {
        summaryContainer.innerHTML = '<p class="text-gray-500 italic text-center">Agregue vehículos y calcule la cotización para ver el resumen.</p>';
    } else {
        vehicles.forEach(vehicle => {
            const modelSelect = vehicle.querySelector('.model-input');
            const model = modelSelect.options[modelSelect.selectedIndex].text;
            const quantity = parseInt(vehicle.querySelector('.quantity-input').value) || 0;
            const price = parseFloat(vehicle.querySelector('.price-input').value) || 0;
            const brand = vehicle.querySelector('.brand-input').value;
            const color = vehicle.querySelector('.color-input').value;
            const year = vehicle.querySelector('.year-input').value;
            const motor = vehicle.querySelector('.motor-input').value;
       
            const vehicleTotal = quantity * price;
            subtotal += vehicleTotal;
            
            // Crea el HTML para el resumen de cada vehículo
            const summaryItem = document.createElement('div');
            summaryItem.className = 'border-b pb-2 mb-2 last:border-b-0 last:pb-0';
            summaryItem.innerHTML = `
                <p class="font-semibold text-gray-800">${model}</p>
                <p class="text-gray-600 flex justify-between">
                    <span>${quantity} unidad(es) x $${price.toFixed(2)}</span>
                    <span class="font-semibold text-gray-800">$${vehicleTotal.toFixed(2)}</span>
                </p>
                ${brand ? `<p class="text-sm text-gray-500 mt-1">Marca: ${brand}</p>` : ''}
                ${color ? `<p class="text-sm text-gray-500 mt-1">Color: ${color}</p>` : ''}
                ${year ? `<p class="text-sm text-gray-500 mt-1">Año: ${year}</p>` : ''}
                ${motor ? `<p class="text-sm text-gray-500 mt-1">Motor: ${motor}</p>` : ''}
            `;
            summaryContainer.appendChild(summaryItem);
        });
    }

    const discountInput = document.getElementById('discount');
    const discountPercent = parseFloat(discountInput.value) || 0;
    const discountAmount = subtotal * (discountPercent / 100);
    const total = subtotal - discountAmount;
    
    // Muestra los resultados en el resumen
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('discount-amount').textContent = `-$${discountAmount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

/**
 * Prepara el área de impresión y activa el diálogo de impresión del navegador.
 */
function printQuote() {
    // 1. Obtener datos del formulario
    const clientName = document.getElementById('client-name').value;
    const clientId = document.getElementById('client-id').value;
    const clientPhone = document.getElementById('client-phone').value;
    const clientEmail = document.getElementById('client-email').value;
    const notes = document.getElementById('notes').value;
    const dealershipAddress = document.getElementById('dealership-address').value;
    const salesperson = document.getElementById('salesperson').value; // Obtener el valor del vendedor
    const subtotal = document.getElementById('subtotal').textContent;
    const discountAmount = document.getElementById('discount-amount').textContent;
    const total = document.getElementById('total').textContent;
    
    // 2. Llenar el área de impresión con el nuevo diseño
    const printArea = document.querySelector('.print-area');
    
    // Nuevo HTML para el área de impresión con un diseño más elaborado
    printArea.innerHTML = `
        <style>
            /* Estilos específicos para impresión */
            @page {
                size: A4;
                margin: 1cm; /* Márgenes reducidos para maximizar espacio */
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
            }
            .header-print {
                display: flex;
                justify-content: space-between; /* Alinea elementos a los extremos */
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid #ddd;
            }
            .header-print h1 {
                font-size: 2.5em; /* Tamaño de fuente ajustado */
                color: #000;
                margin: 0;
            }
            .header-print p {
                font-size: 0.9em;
                color: #555;
                margin: 2px 0;
            }
            .header-print img {
                height: 60px; /* Tamaño del logo ajustado */
                width: auto;
            }
            .section-print {
                margin-bottom: 20px;
                padding: 15px;
                border: 1px solid #eee;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
            .section-print h2 {
                font-size: 1.5em;
                color: #333;
                margin-bottom: 10px;
                padding-bottom: 5px;
                border-bottom: 1px solid #eee;
            }
            .section-print .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 10px;
            }
            .section-print p {
                font-size: 0.9em;
                line-height: 1.4;
            }
            .vehicle-item-print {
                border: 1px solid #ddd;
                padding: 10px;
                border-radius: 5px;
                background-color: #fff;
                margin-bottom: 10px;
            }
            .vehicle-item-print .flex {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;
            }
            .vehicle-item-print p {
                margin: 0;
            }
            .summary-print {
                margin-top: 30px;
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #fff;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            }
            .summary-print .flex {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
            }
            .summary-print .total-row {
                font-size: 1.8em;
                font-weight: bold;
                border-top: 2px solid #eee;
                margin-top: 10px;
                padding-top: 10px;
                color: #0056b3; /* Color para el total */
            }
            .footer-print {
                margin-top: 30px;
                text-align: center;
                font-size: 0.8em;
                color: #777;
            }
            .footer-print p {
                margin: 3px 0;
            }
        </style>
        <div class="print-container">
            <div class="header-print">
                <div class="text-left">
                    <h1 class="text-4xl font-bold text-gray-900">Cotización de Vehículos</h1>
                    <p class="text-gray-600 text-lg">Concesionario JAC</p>
                    <p class="text-gray-500 text-sm mt-1">Fecha de cotización: <span id="print-date" class="font-semibold"></span></p>
                </div>
                <img src="JACNEGRO.png" alt="Logo de la Empresa">
            </div>

            <div class="section-print">
                <h2>Datos del Cliente</h2>
                <div class="grid">
                    <p><strong>Nombre:</strong> <span id="print-client-name"></span></p>
                    <p><strong>Cédula/RIF:</strong> <span id="print-client-id"></span></p>
                    <p><strong>Teléfono:</strong> <span id="print-client-phone"></span></p>
                    <p><strong>Correo:</strong> <span id="print-client-email"></span></p>
                </div>
            </div>

            <div class="section-print">
                <h2>Vehículos Cotizados</h2>
                <div id="print-vehicles"></div>
            </div>

            <div class="summary-print">
                <h2>Resumen de la Cotización</h2>
                <div class="flex">
                    <span>Subtotal:</span>
                    <span id="print-subtotal">$0.00</span>
                </div>
                <div class="flex">
                    <span>Descuento:</span>
                    <span id="print-discount">-$0.00</span>
                </div>
                <div class="flex total-row">
                    <span>Total a Pagar:</span>
                    <span id="print-total">$0.00</span>
                </div>
            </div>

            <div class="section-print">
                <h3>Notas Adicionales:</h3>
                <p id="print-notes" class="italic"></p>
            </div>

            <div class="footer-print">
                <p><strong>Dirección del Concesionario:</strong> <span id="print-dealership-address"></span></p>
                <p><strong>Vendedor:</strong> <span id="print-salesperson"></span></p>
                <p>Esta cotización es válida por 24 horas y está sujeta a la disponibilidad de inventario.</p>
                <p>¡Gracias por preferirnos!</p>
            </div>
        </div>
    `;

    // 3. Rellenar los datos en el nuevo HTML del área de impresión
    document.getElementById('print-client-name').textContent = clientName || 'No especificado';
    document.getElementById('print-client-id').textContent = clientId || 'No especificado';
    document.getElementById('print-client-phone').textContent = clientPhone || 'No especificado';
    document.getElementById('print-client-email').textContent = clientEmail || 'No especificado';
    document.getElementById('print-notes').textContent = notes || 'No hay notas adicionales.';
    document.getElementById('print-subtotal').textContent = subtotal;
    document.getElementById('print-discount').textContent = discountAmount;
    document.getElementById('print-total').textContent = total;
    document.getElementById('print-date').textContent = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const printDealershipAddress = document.getElementById('print-dealership-address');
    if (dealershipAddress.trim() !== '') {
        printDealershipAddress.textContent = dealershipAddress;
    } else {
        printDealershipAddress.textContent = 'JAC Express, CIUDAD JAC';
    }

    // Rellenar el nuevo campo del vendedor
    document.getElementById('print-salesperson').textContent = salesperson || 'No especificado';

    const printVehiclesContainer = document.getElementById('print-vehicles');
    printVehiclesContainer.innerHTML = '';
    const vehicleItems = document.querySelectorAll('.vehicle-item');
    
    if (vehicleItems.length === 0) {
        printVehiclesContainer.innerHTML = '<p class="text-gray-500 italic">No se cotizaron vehículos.</p>';
    } else {
        vehicleItems.forEach((item) => {
            const model = item.querySelector('.model-input').options[item.querySelector('.model-input').selectedIndex].text;
            const quantity = parseInt(item.querySelector('.quantity-input').value) || 0;
            const price = parseFloat(item.querySelector('.price-input').value) || 0;
            const brand = item.querySelector('.brand-input').value;
            const color = item.querySelector('.color-input').value;
            const year = item.querySelector('.year-input').value;
            const motor = item.querySelector('.motor-input').value;
            
            const printItem = document.createElement('div');
            printItem.className = 'vehicle-item-print'; // Usa la clase de impresión
            printItem.innerHTML = `
                <div class="flex">
                    <p class="font-bold text-gray-900">${model} <span class="font-normal text-gray-600">(${quantity} unidad${quantity > 1 ? 'es' : ''})</span></p>
                    <p class="font-bold text-blue-600">$${(quantity * price).toFixed(2)}</p>
                </div>
                <div class="grid">
                    ${brand ? `<p><strong>Marca:</strong> ${brand}</p>` : ''}
                    ${color ? `<p><strong>Color:</strong> ${color}</p>` : ''}
                    ${year ? `<p><strong>Año:</strong> ${year}</p>` : ''}
                    ${motor ? `<p><strong>Motor:</strong> ${motor}</p>` : ''}
                </div>
            `;
            printVehiclesContainer.appendChild(printItem);
        });
    }

    // 4. Activar el diálogo de impresión
    window.print();
}

/**
 * Limpia todos los campos del formulario y reinicia la cotización.
 */
function clearForm() {
    // Limpia los campos de cliente y descuento
    document.getElementById('client-name').value = '';
    document.getElementById('client-id').value = '';
    document.getElementById('client-phone').value = '';
    document.getElementById('client-email').value = '';
    document.getElementById('notes').value = '';
    document.getElementById('discount').value = '0';
    document.getElementById('dealership-address').value = ''; 
    document.getElementById('salesperson').value = ''; // Limpiar el campo del vendedor
    
    // Limpia el contenedor de vehículos
    const vehiclesContainer = document.getElementById('vehicles-container');
    vehiclesContainer.innerHTML = '';
    
    // Reinicia el contador de vehículos y agrega un vehículo por defecto
    vehicleCounter = 0;
    addVehicle(); 
}

// --- 3. INICIALIZACIÓN ---

// Agrega event listeners al input de descuento para recalcular automáticamente
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('discount').addEventListener('input', calculateQuote);
    // Inicializa el formulario agregando un vehículo al cargar la página
    addVehicle(); 
});