const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

// Função para imprimir as mensagens de acordo com a quantidade de animais de estimação
function imprimirMensagens(usuarios) {
    usuarios.forEach(usuario => {
      const { nome, pets } = usuario;
      const quantidadePets = pets.length;
      
      if (quantidadePets === 0) {
        console.log(`Sou ${nome} e não tenho pets`);
      } 
     
  else if (quantidadePets === 1) {
        console.log(`Sou ${nome} e tenho 1 pet`);
      } else {
        console.log(`Sou ${nome} e tenho ${quantidadePets} pets`);
      }
    });
  }
  
  // Chamada da função para imprimir as mensagens
  imprimirMensagens(usuarios);