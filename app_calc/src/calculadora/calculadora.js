exports.calcular = (num1, num2, operacao) => {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) throw new Error('Divisão por zero');
            return num1 / num2;
        default:
            throw new Error('Operação inválida');
    }
};

exports.getNomeOperacao = (operacao) => {
    switch (operacao) {
        case '+':
            return 'Adição';
        case '-':
            return 'Subtração';
        case '*':
            return 'Multiplicação';
        case '/':
            return 'Divisão';
        default:
            return 'Operação desconhecida';
    }
};
