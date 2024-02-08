const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um sistema operacional"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valores",
        "Atribuição de valores",
        "Concatenação de strings"
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um modelo de objeto para representar documentos HTML",
        "Uma biblioteca JavaScript popular"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir um alerta na tela",
        "Registrar mensagens no console do navegador",
        "Criar uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena apenas números",
        "Um tipo de dado que armazena uma única string",
        "Uma estrutura que armazena uma coleção de elementos"
      ],
      correta: 2
    },
    {
      pergunta: "Como se cria uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "createFunction = () => {}",
        "new Function() {}"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' ao declarar variáveis?",
      respostas: [
        "Não há diferença, são sinônimos",
        "let é usado para variáveis que não podem ser reatribuídas, const para variáveis que podem",
        "const é usado para variáveis que não podem ser reatribuídas, let para variáveis que podem"
      ],
      correta: 2
    },
    {
      pergunta: "O que é callback em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Uma função passada como argumento para outra função",
        "Um método de looping em arrays"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a principal diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos realizam comparação de valores",
        "O operador '===' compara apenas valores, enquanto '==' compara valores e tipos de dados",
        "O operador '==' compara apenas valores, enquanto '===' compara valores e tipos de dados"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas) {
   const dt = quizItem.querySelector('dl dt').cloneNode(true) 
   dt.querySelector('span').textContent = resposta
   dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(resposta) 
   dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
     corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }  
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   }
  
  
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem) 
  }