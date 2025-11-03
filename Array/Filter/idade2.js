const usuarios = [
  { nome: "Ana", idade: 17 },
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 19 },
  { nome: "Pedro", idade: 16 }
];

const usuariosAdultos = usuarios.filter(u => u.idade >= 18);

console.log(usuariosAdultos);