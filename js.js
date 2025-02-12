function generarFibonacci() {
    let numero = document.getElementById('numero').value;
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let fibonacci = [];
    for (let i = 0; i < numero; i++) {
        if (i === 0) {
            fibonacci.push(0);
        } else if (i === 1) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }

    document.getElementById('resultado').innerText = fibonacci.join(', ');
    console.log(fibonacci.join(', '));
}