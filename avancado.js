function log(texto) {
  document.getElementById("saida").textContent += texto + "\n";
}

function executar() {
  document.getElementById("saida").textContent = "";
  "use strict";

  // Questao 1
  function exibir() {
    let nome = "Iris";
    log(nome);
  }
  exibir();

  // Questão 2
  function mostrar() {
    const obj = { nome: "Iris" };
    log(obj.nome);
  }
  mostrar();

  // Questao 3
  const dados = ["João", "joao@email.com"];
  const [nome, email] = dados;
  log(nome + " - " + email);

  // Questao 4
  const cores = ["azul", "verde", "vermelho"];
  const [, , terceira] = cores;
  log(terceira);

  // Questao 5
  const produto = { nome: "Teclado", preco: 200, estoque: 10 };
  const { nome: n, preco } = produto;
  log(n + " - " + preco);

  // Questao 6
  function contar(...nums) {
    log("Argumentos: " + nums.length);
  }
  contar(1,2,3,4);

  // Questao 7
  const lista = [1,2,3];
  const novaLista = [...lista, 4];
  log(novaLista);

  // Questao 8
  const pessoa1 = { nome: "Ana" };
  const pessoa2 = { ...pessoa1 };
  pessoa2.nome = "Maria";
  log(pessoa1.nome + " | " + pessoa2.nome);

  // Questao 9
  const usuario = { nome: "Carlos", idade: 20 };
  const novoUsuario = { ...usuario, idade: 25 };
  log(novoUsuario.idade);

  // Questao 10
  const numeros1 = [1,2,3];
  const numeros2 = [...numeros1];
  numeros2.push(4);
  log(numeros1 + " | " + numeros2);

  // Questao 11
  log([1,2,3,4].map(n => n*2));

  // Questao 12
  log([2,4,6,8,10].filter(n => n>5));

  // Questao 13
  log([5,8,12,20].find(n => n>10));

  // Questao 14
  log([3,5,8,10].findIndex(n => n===8));

  // Questao 15
  log([1,2,3,-1].some(n => n<0));

  // Questao 16
  log([1,2,3,4].every(n => n>0));

  // Questao 17
  log([10,20,30].reduce((a,b)=>a+b,0));

  // Questao 18
  log(JSON.stringify(["Ana","Carlos"].map(n => ({nome:n}))));

  // Questao 19
  const pessoas = [
    { nome: "João", idade: 15 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 17 }
  ];
  log(JSON.stringify(pessoas.filter(p => p.idade > 18)));

  // Questao 20
  const compras = [
    { produto: "Mouse", valor: 100 },
    { produto: "Teclado", valor: 200 }
  ];
  log(compras.reduce((t,c)=>t+c.valor,0));

  // Questao 21
  const curso = { nome: "JS", alunos: ["Ana"] };
  const copia = { ...curso, alunos: [...curso.alunos] };
  copia.alunos.push("Carlos");
  log(curso.alunos + " | " + copia.alunos);

  // Questao 22
  function adicionarAtivo(obj) {
    return { ...obj, ativo: true };
  }
  log(JSON.stringify(adicionarAtivo({nome:"Teste"})));

  // Questao 23
  const nums = [1,2,3,4];
  const [primeiro, ...resto] = nums;
  log(primeiro + " | " + resto);

  // Questao 24
  const juntos = [...[1,2], ...[3,4]];
  log(juntos);

  // Questao 25 e ÚLTIMA
  function processar(arr) {
    return arr
      .filter(n => n % 2 === 0)
      .map(n => n * 2)
      .reduce((a,b)=>a+b,0);
  }
  log("Q25: " + processar([1,2,3,4,5,6]));
}