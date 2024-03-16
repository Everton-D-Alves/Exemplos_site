// 1-
function mensagem(){
    console.log('Olá, mundo!');
};
mensagem();
// 2-
function usuario(nome){
    console.log(`Olá ${nome}!`);
};
usuario('Ana');
// 3-
function num(i){
    return i * 2;
};
let dobro = num(3);
console.log(dobro);
// 4-
function numeros(x, y, z){
    return (x + y + z) / 2;
};
let media = numeros(2, 5, 9);
console.log(media);
// 5-
function maior(a, b){
    return a > b ? a : b;
};
let numeroMaior = maior(6, 9);
console.log(numeroMaior);
// 6-
function numUm(i){
    return i * i;
};
let retorne = numUm(3);
console.log(retorne);