// Como podemos rodar isso em um arquivo .ts sem causar erros? Tipando os objetos

const funcionario = {
    codigo: 10,
    nome: 'João'
};

// ou...

const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}