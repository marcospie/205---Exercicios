
let idade= Number(prompt("Informe a sua idade: "));
let emprest = Number(prompt("Informe quanto você quer emprestado: "));
let recebe = Number(prompt("Informe quanto você recebe por mês: "));
let pagar = emprest* Math.pow((1+8),parcelas);


if(idade < 22 && idade > 55 && emprest >=1000 && emprest <= (15*recebe) ){
alert("ACEITO");
let parcelas = prompt("Vai parcelar em quantas vezes? (3 a 20 parcelas)");
while (parcelas < 3 && parcela > 20){
alert("Valor Inválido! Tente novamente")
let parcelas = prompt("Vai parcelar em quantas vezes? (3 a 20 parcelas)");   
}
let total = alert(`O valor total do seu emprestimo é de ${pagar}`);
}
else 
alert("NAO ACEITO");

   

