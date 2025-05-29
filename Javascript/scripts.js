
document.addEventListener('DOMContentLoaded', function() {
    // Function to reset all input fields
    function resetFields() {
        document.getElementById('modelo1').value = '';
        document.getElementById('version1').value = '';
        document.getElementById('cuota1').value = '';
        document.getElementById('modelo2').value = '';
        document.getElementById('version2').value = '';
        document.getElementById('cuota2').value = '';
        document.getElementById('kmsemana').value = '';
        document.getElementById('cargasemana').value = '0';
        document.getElementById('cargagratissemana').value = '0';
        document.getElementById('preciocomb').value = '';
        document.getElementById('precioelec').value = '';
    }

    // Function to calculate TCO
    function calculateTCO() {
        // Retrieve input values
        const cuota1 = parseFloat(document.getElementById('cuota1').value) || 0;
        const cuota2 = parseFloat(document.getElementById('cuota2').value) || 0;
        const kmsemana = parseFloat(document.getElementById('kmsemana').value) || 0;
        const cargasemana = parseFloat(document.getElementById('cargasemana').value) || 0;
        const cargagratissemana = parseFloat(document.getElementById('cargagratissemana').value) || 0;
        const preciocomb = parseFloat(document.getElementById('preciocomb').value) || 0;
        const precioelec = parseFloat(document.getElementById('precioelec').value) || 0;

        // Calculate TCO for each model
        const tco1 = cuota1 + (kmsemana * preciocomb) + (cargasemana * precioelec) - (cargagratissemana * precioelec);
        const tco2 = cuota2 + (kmsemana * preciocomb) + (cargasemana * precioelec) - (cargagratissemana * precioelec);

        // Display results
        alert(`TCO Model 1: €${tco1.toFixed(2)}\nTCO Model 2: €${tco2.toFixed(2)}`);
    }

    // Add event listeners to buttons
    document.getElementById('resetButton').addEventListener('click', resetFields);
    document.getElementById('calculateButton').addEventListener('click', calculateTCO);
});
