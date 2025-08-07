function CuentaBancaria(titular, saldo) {
  this.titular = titular;
  this.saldo = saldo;
}

CuentaBancaria.prototype.depositar = function (monto) {
  this.saldo += monto;
  console.log(`Depósito exitoso. Nuevo saldo: $${this.saldo}`);
};

CuentaBancaria.prototype.extraer = function (monto) {
  if (this.saldo >= monto) {
    this.saldo -= monto;
    console.log(`Extracción exitosa. Nuevo saldo: $${this.saldo}`);
  } else {
    console.log("Fondos insuficientes.");
  }
};

CuentaBancaria.prototype.verSaldo = function () {
  console.log(`Saldo actual $${this.saldo}`);
};

const cuenta1 = new CuentaBancaria("Antonella Lezcano", 5000);
cuenta1.verSaldo();
cuenta1.extraer(2000);
cuenta1.depositar(50);
