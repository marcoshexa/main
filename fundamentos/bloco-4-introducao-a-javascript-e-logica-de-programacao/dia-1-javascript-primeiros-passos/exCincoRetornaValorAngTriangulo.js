
//cálculo da área de um triângulo (a soma dos ângulos internos = 180 é um triângulo)
const a = 59;
const b = 60;
const c = -1;

if (a < 0) {
    console.log('valor a negativo=' + a + '(ângulo inválido para ângulo de um triangulo)');
} else if (b < 0) {
    console.log('valor b negativo=' + b + '(ângulo inválido para ângulo de um triangulo)');
} else if (c < 0) {
    console.log('valor c negativo=' + c + '(ângulo inválido para ângulo de um triangulo');
} else if (a + b + c == 180) {
    console.log('true');
} else {
    console.log('false');
}