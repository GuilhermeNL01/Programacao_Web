function transporMatriz(A) {
  // print matriz original
  console.log("Matriz original:");
  imprimirMatriz(A);

  // Transpor matriz
  const transposta = [];
  for (let i = 0; i < A[0].length; i++) {
    transposta.push([]);
    for (let j = 0; j < A.length; j++) {
      transposta[i].push(A[j][i]);
    }
  }

  // print matriz transposta
  console.log("\nMatriz transposta:");
  imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"));
  }
}

//exec
const matrizOriginal = [
  [1, 2],
  [3, 4],
  [5, 6],
];

transporMatriz(matrizOriginal);
