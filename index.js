class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  Area() {
  return this.calcularArea();
  }  
}

class Quadrado extends Retangulo {
  constructor(lado) {
    super(lado, lado);
  } 
}

let retangulo = new Retangulo(12, 5);
console.log(retangulo);
console.log("Area do retangulo =  " + retangulo.calcularArea());


let quadrado = new Quadrado(6);
console.log(quadrado);
console.log("Area do quadrado =  " + quadrado.Area());



