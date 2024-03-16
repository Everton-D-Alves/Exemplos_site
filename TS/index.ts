/*
    Compilar para JavaScript: Terminal → Novo terminal → Dentro da pasta 'treino': 
    tsc --init
    Cria o tsconfig.json. Modificará:
    → "target": "es2016" para "target": "ESNext" (+ atual).
    Descomentará: 
    → "lib": [], e acrescenta dentro dos parênteses: "DOM, ESNext",
    → "rootDir": "./", e acrescenta "JS".
    → "outDir": "./", e acrescenta "TS".
    → "removeComments": true,
*/
var n1: number = 1;
var n2: number = 2;
var s: number = n1 + n2;
console.log(s);