const usuarios = [{
    nome:"joao",
    idade:25,
},
{
    nome: "Ana",
    idade: 18
},{
    nome: "Beatriz",
    idade: 15
},
{
    nome: "Carlos",
    idade: 16,
},{
    nome: "Antonio",
    idade: 32
},
]

// Filtrando os usuários menores de 18 anos (jovens)
const jovens = usuarios.filter(usuario => usuario.idade < 18);

// Filtrando os usuários com 18 anos ou mais (adultos)
const adultos = usuarios.filter(usuario => usuario.idade >= 18);

console.log("Jovens:");
console.log(jovens);
console.log("Adultos:");
console.log(adultos);