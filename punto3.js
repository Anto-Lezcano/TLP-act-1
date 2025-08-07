String.prototype.concatenarPalabra = function (nuevaPalabra) {
  return `${this.toString()} ${nuevaPalabra}`;
};

const palabra = "!BUENAS NOCHES!";
console.log(palabra.concatenarPalabra("Sofia"));
