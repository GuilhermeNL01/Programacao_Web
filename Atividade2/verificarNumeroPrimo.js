function verificarNumeroPrimo(n) {
    // 0 e 1 não são primos
    if (n <= 1) return false;
    
    // Verificar se n é divisível por algum número inteiro entre 2 e sqrt(n)
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Encontrou um divisor, não é primo
        }
    }
    
    return true; // Se não encontrou nenhum divisor, é primo
}

//teste
console.log(verificarNumeroPrimo(0));      
console.log(verificarNumeroPrimo(1));     
console.log(verificarNumeroPrimo(2));       
console.log(verificarNumeroPrimo(3));        
console.log(verificarNumeroPrimo(7));    
console.log(verificarNumeroPrimo(83));    
console.log(verificarNumeroPrimo(100));     
console.log(verificarNumeroPrimo(991));    
console.log(verificarNumeroPrimo(104729));  
console.log(verificarNumeroPrimo(14348907));
