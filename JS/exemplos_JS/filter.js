function feira(frutas){
    return frutas.length > 6; // Frutas com nomes maiores que 6 letras.
};
const fruteira = ["Banana", "Laranja", "Goiaba", "Acerola", "Manga"];
const fruta = fruteira.filter(feira);
console.log(fruta);

/*
User
    Explique esse código:

function feira(frutas){
    return frutas.length > 6; // Frutas com nomes maiores que 6 letras.
};
const fruteira = ["Banana", "Laranja", "Goiaba", "Acerola", "Manga"];
const fruta = fruteira.filter(feira);
console.log(fruta)

ChatGPT
    Esse código é um exemplo de uso da função filter em JavaScript para filtrar elementos de um array com base em uma condição específica. Vamos explicar passo a passo:

1 - Função feira:

function feira(frutas){
    return frutas.length > 6; // Frutas com nomes maiores que 6 letras.
};

    Essa é uma função que recebe um parâmetro frutas, que espera ser uma string (nome de uma fruta).
    A função retorna true se o comprimento da string (número de caracteres) for maior que 6, indicando que a fruta tem mais de 6 letras no seu nome. Caso contrário, retorna false.

2 - Array fruteira:

const fruteira = ["Banana", "Laranja", "Goiaba", "Acerola", "Manga"];
    
    fruteira é um array que contém os nomes de algumas frutas.

3 - Aplicação da função filter:

const fruta = fruteira.filter(feira);

    filter é um método de arrays em JavaScript que cria um novo array com todos os elementos que passam por um teste (função fornecida).
    Neste caso, fruteira.filter(feira) cria um novo array chamado fruta contendo apenas as frutas cujos nomes têm mais de 6 letras, utilizando a função feira como critério de filtro.

4 - Impressão no console:

console.log(fruta);

    O resultado final, o array fruta, é impresso no console. Esse array conterá apenas as frutas cujos nomes têm mais de 6 letras.
    Então, ao executar esse código, o resultado impresso no console será um array com as frutas que atendem à condição de terem nomes com mais de 6 letras.
*/