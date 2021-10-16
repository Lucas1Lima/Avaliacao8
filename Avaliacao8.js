function Conta (titular, saldo, cpf){
    this.titular = titular;
    this.cpf = cpf;
    this.saldo = saldo;

    this.mostrarSaldo = function(){
        console.log("R$" + saldo + " em conta");
    }
    this.sacarSaldo = function(saque){
        if(saldo>=saque){
            saldo -= saque;
            console.log("Saque de R$" + saque + " reais na conta do titular "+ this.titular+" realizado com sucesso!");
        }else{
            console.log("Você não tem saldo suficiente na conta titular de " + this.titular);
        }
    }
    this.depositar = function(deposito){
        saldo += deposito;
        console.log("Deposito de R$" + deposito + " realizado com sucesso!"); 
    }
}

let titular1 = new Conta('Maria Fernanda', 250, 354862145);

titular1.mostrarSaldo();
titular1.sacarSaldo(200);
titular1.mostrarSaldo();
titular1.depositar(50);
titular1.mostrarSaldo();
titular1.sacarSaldo(110);
titular1.mostrarSaldo();