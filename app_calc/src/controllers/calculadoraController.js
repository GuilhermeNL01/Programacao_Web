const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
    const { num1, num2, operacao } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        return res.redirect('/erro');
    }

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    try {
        const resultado = calculadora.calcular(numero1, numero2, operacao);
        const nomeOperacao = calculadora.getNomeOperacao(operacao);

        res.render('resultado', { resultado, nomeOperacao });
    } catch (error) {
        res.redirect('/erro');
    }
};
