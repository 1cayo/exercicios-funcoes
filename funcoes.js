// Ex. 1 - Função que soma dois números

function somaNumeros(n1,n2){
    return n1 + n2;
}

console.log(somaNumeros(5,7))


// Ex. 2 - Função que verifica se é par ou impar

function parImpar(n1){
    if (n1 % 2 == 0){
        return true;
    
    } else {
        return false;
    }
}

console.log(parImpar(1))


// Ex. 3 - Função que calcula a média

function mediaAluno(n1,n2,n3){
    let media = (n1 + n2 + n3) / 3;
    return media;
}

console.log(mediaAluno(3,4,8))


// Ex. 4 - Função que retorna maior número

function maiorNumero(n1,n2){
    if (n1 > n2) {
        return n1 + " MAIOR QUE " + n2
    } else {
        return n2 + " MAIOR QUE " + n1;
    }

}

console.log(maiorNumero(10,2))


// Ex. 5 - Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação

function saudação(nome){
    return "Bem vindo(a) " + nome;
}

console.log(saudação("Cayo"));


// Ex. 6 - Função que diz se a pessoa é maior de idade ou não

function maiorIdade(idade){
    return idade >= 18
}

console.log(maiorIdade(18))


// Ex. 7 - Função que multiplica 3 numeros

function multiplica(a,b,c){
    return a * b * c
}

console.log(multiplica(12,2,8))


// Ex. 8 - Função que conta letras de uma String

function contaLetras(texto){
    return texto.length
}

console.log(contaLetras("papipaquigrafo"))