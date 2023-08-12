document.getElementById('calculatePerimeterBtn').addEventListener('click', function () {
    var side1 = parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert('Masukan Salah!!.');
        return;
    }

    var perimeter = side1 + side2 + side3;

    var perimeterResultsDiv = document.getElementById('perimeterResults');
    perimeterResultsDiv.innerHTML = `

        <p>Hasil perhitungan:</p>
        <p><strong>K = S1 + S2 + S3</strong></p>
        <p><strong>K = ${side1} + ${side2} + ${side3}</strong></p>
        <p><strong>K = ${perimeter.toFixed(2)}</strong></p>
    `;
});

document.getElementById('calculateAreaBtn').addEventListener('click', function () {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Masukan Salah!!.');
        return;
    }

    var area = 0.5 * base * height;

    var areaResultsDiv = document.getElementById('areaResults');
    areaResultsDiv.innerHTML = `
 
        <p>Hasil perhitungan:</p>
        <p><strong>L = 1/2 x a x t</strong></p>
        <p><strong>L = 1/2 x ${base} x ${height}</strong></p>
        <p><strong>L = ${area.toFixed(2)}</strong></p>
    `;
});

// Reset Keliling Segitiga
document.getElementById('resetPerimeterBtn').addEventListener('click', function () {
    document.getElementById('side1').value = ''; 
    document.getElementById('side2').value = ''; 
    document.getElementById('side3').value = ''; 
    document.getElementById('perimeterResults').innerHTML = ''; 
});

// Reset Luas Segitiga
document.getElementById('resetAreaBtn').addEventListener('click', function () {
    document.getElementById('base').value = ''; 
    document.getElementById('height').value = ''; 
    document.getElementById('areaResults').innerHTML = ''; 
});
