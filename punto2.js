class CuentaBancaria {
  titular;
  #saldo;
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.#saldo = nuevoSaldo;
    } else {
      console.log("El saldo no puede ser negativo.");
    }
  }

  set depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Depósito exitoso. Nuevo saldo: $${this.#saldo}`);
    } else {
      console.log("El monto debe ser mayor a cero.");
    }
  }

  set extraer(monto) {
    if (monto > this.#saldo) {
      console.log("Fondos insuficientes.");
    } else {
      this.#saldo -= monto;
      console.log(`Extracción exitosa. Nuevo saldo: $${this.#saldo}`);
    }
  }
  get consultarSaldo() {
    console.log(`Saldo actual: $${this.#saldo}`);
  }
}
const cuenta = new CuentaBancaria("Susana", 1000);
cuenta.consultarSaldo;
cuenta.depositar = 200;
cuenta.extraer = 1300;
cuenta.saldo = -500;
console.log(cuenta.saldo);
cuenta.extraer = 200;
