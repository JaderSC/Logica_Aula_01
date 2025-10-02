


let nomePaciente = "Marcos",
    alturaPaciente = 1.95,
    pesoPaciente = 120,
    resultado = pesoPaciente / (alturaPaciente * alturaPaciente);
//    console.log("O Paciente " + nomePaciente + " Possui um IMC de: " + resultado.toFixed(1));


if (resultado < 18.5){

    console.log("O Paciente " + nomePaciente + " Possui um IMC de: " + resultado.toFixed(1) + " Esta Abaixo do Peso");
}else if (resultado >= 18.5 && resultado <= 24.9) {
 console.log("O Paciente " + nomePaciente + " Possui um IMC de: " + resultado.toFixed(1) + " Esta com  Peso Normal");
}else{
    console.log("O Paciente " + nomePaciente + " Possui um IMC de: " + resultado.toFixed(1) + " Esta com  Peso Acima do Normal");
}
