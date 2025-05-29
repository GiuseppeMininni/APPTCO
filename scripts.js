
document.addEventListener('DOMContentLoaded', function() {
    fetch('table1.json')
        .then(response => response.json())
        .then(data => {
            const model1Select = document.getElementById('model1');
            const version1Select = document.getElementById('version1');
            const model2Select = document.getElementById('model2');
            const version2Select = document.getElementById('version2');

            const models = [...new Set(data.cars.map(car => car.Modelo))];

            models.forEach(model => {
                const option1 = document.createElement('option');
                option1.value = model;
                option1.textContent = model;
                model1Select.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = model;
                option2.textContent = model;
                model2Select.appendChild(option2);
            });

            model1Select.addEventListener('change', function() {
                const selectedModel = this.value;
                const versions = data.cars.filter(car => car.Modelo === selectedModel).map(car => car.Version);
                version1Select.innerHTML = '';
                versions.forEach(version => {
                    const option = document.createElement('option');
                    option.value = version;
                    option.textContent = version;
                    version1Select.appendChild(option);
                });
            });

            model2Select.addEventListener('change', function() {
                const selectedModel = this.value;
                const versions = data.cars.filter(car => car.Modelo === selectedModel).map(car => car.Version);
                version2Select.innerHTML = '';
                versions.forEach(version => {
                    const option = document.createElement('option');
                    option.value = version;
                    option.textContent = version;
                    version2Select.appendChild(option);
                });
            });
        });
});
