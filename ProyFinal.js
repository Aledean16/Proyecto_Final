document.addEventListener('DOMContentLoaded', () => {
    const registrarBtn = document.getElementById('registrar');
    const actualizarBtn = document.getElementById('actualizar');
    const filtroEstatus = document.getElementById('filtroEstatus');
    let selectedRow = null;

    registrarBtn.addEventListener('click', () => {
        try {
            const nombreRemitente = document.getElementById('remitente-nombre').value.trim();
            const ciudadRemitente = document.getElementById('remitente-ciudad').value.trim();
            const estadoRemitente = document.getElementById('remitente-estado').value.trim();
            const domicilioRemitente = document.getElementById('remitente-domicilio').value.trim();
            const codigoPostalRemitente = document.getElementById('remitente-codigo-postal').value.trim();
            const telefonoRemitente = document.getElementById('remitente-telefono').value.trim();

            const nombreDestinatario = document.getElementById('destinatario-nombre').value.trim();
            const ciudadDestinatario = document.getElementById('destinatario-ciudad').value.trim();
            const estadoDestinatario = document.getElementById('destinatario-estado').value.trim();
            const domicilioDestinatario = document.getElementById('destinatario-domicilio').value.trim();
            const codigoPostalDestinatario = document.getElementById('destinatario-codigo-postal').value.trim();
            const telefonoDestinatario = document.getElementById('destinatario-telefono').value.trim();

            const descripcionMercancia = document.getElementById('mercancia-descripcion').value.trim();
            const pesoMercancia = document.getElementById('mercancia-peso').value.trim();
            const largoMercancia = document.getElementById('mercancia-largo').value.trim();
            const anchoMercancia = document.getElementById('mercancia-ancho').value.trim();
            const altoMercancia = document.getElementById('mercancia-alto').value.trim();
            const fechaSalidaMercancia = document.getElementById('mercancia-fecha-salida').value.trim();
            const fechaLlegadaMercancia = document.getElementById('mercancia-fecha-llegada').value.trim();
            const precioMercancia = document.getElementById('mercancia-precio').value.trim();

            if (!nombreRemitente || !ciudadRemitente || !estadoRemitente || !domicilioRemitente ||
                !codigoPostalRemitente || !telefonoRemitente || !nombreDestinatario || !ciudadDestinatario ||
                !estadoDestinatario || !domicilioDestinatario || !codigoPostalDestinatario || !telefonoDestinatario ||
                !descripcionMercancia || !pesoMercancia || !largoMercancia || !anchoMercancia ||
                !altoMercancia || !fechaSalidaMercancia || !fechaLlegadaMercancia || !precioMercancia) {
                throw new Error('Por favor, complete todos los campos antes de registrar.');
            }

            const fila = document.createElement('tr');

            const columnas = [
                nombreRemitente, ciudadRemitente, estadoRemitente, domicilioRemitente, codigoPostalRemitente, telefonoRemitente,
                nombreDestinatario, ciudadDestinatario, estadoDestinatario, domicilioDestinatario, codigoPostalDestinatario, telefonoDestinatario,
                descripcionMercancia, pesoMercancia, `${largoMercancia}x${anchoMercancia}x${altoMercancia}`, fechaSalidaMercancia, fechaLlegadaMercancia, precioMercancia
            ];

            columnas.forEach(valor => {
                const columna = document.createElement('td');
                columna.textContent = valor;
                fila.appendChild(columna);
            });

            const cuerpoTabla = document.getElementById('cuerpo-tabla');
            cuerpoTabla.appendChild(fila);

            limpiarCampos();
        } catch (error) {
            alert(error.message);
        }
    });

    actualizarBtn.addEventListener('click', () => {
        if (selectedRow) {
            const estatus = document.getElementById('estatus').value;
            const comentarios = document.getElementById('comentarios').value;
            const fecha = new Date().toLocaleString();

            selectedRow.cells[6].textContent = estatus;
            if (comentarios) {
                selectedRow.cells[7].textContent += `${fecha}: ${comentarios}\n`;
            }
        }
    });

    filtroEstatus.addEventListener('change', () => {
        const estatusSeleccionado = filtroEstatus.value;
        const filas = document.getElementById('registroTabla').getElementsByTagName('tbody')[0].rows;

        for (let fila of filas) {
            if (estatusSeleccionado === 'Todos' || fila.cells[6].textContent === estatusSeleccionado) {
                fila.style.display = '';
            } else {
                fila.style.display = 'none';
            }
        }
    });

    function limpiarCampos() {
        document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
        document.querySelectorAll('input[type="numer"]').forEach(input => input.value = '0');
        document.querySelectorAll('input[type="date"]').forEach(input => input.value = '');
    }
});
