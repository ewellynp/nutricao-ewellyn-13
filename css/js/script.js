var tituloPagina = document.getElementById('titulo-pagina');
tituloPagina.textContent = "Ewellyn Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var contador = 0; contador <=4; contador++) {
  
  var tdPeso = pacientes[contador].querySelector(".info-peso");
  var peso = tdPeso.textContent;
  

  var tdAltura = pacientes[contador].querySelector(".info-altura");
  var altura = tdAltura.textContent;
  

  var tdGordura = pacientes[contador].querySelector(".info-gordura");
  var gordura = tdGordura.textContent;
  

  var tdImc = pacientes[contador].querySelector(".info-imc");
  var imc = tdImc.textContent;

  var pesoEhValido = true;
  var alturaEhValida = true;


  if (peso < 0) {
    tdPeso.textContent =  "peso inválido";
  
  }
  if (altura) {
    tdAltura.textContent = "altura inválida";
  }
}

function calculaImc(peso, altura){
   var imc = 0;

  imc = peso / (altura * altura);
  
  return imc.toFixed(2);
}

//var nome = document.getElementById('nome');
//nome.textContent = "Joana";

//var peso = document.getElementById('peso');
//peso.textContent = "55";
//var altura = document.getElementById('altura');
//altura.textContent = "1.63";
//var gordura = document.getElementById('gordura');
//gordura.textContent = "20";

//var celulaPeso = document.getElementById('peso');
//var peso = celulaPeso.textContent;

//var celulaPeso = document.getElementById('altura');
//var altura = celulaPeso.textContent;

//var celulaPeso = document.getElementById('gordura');
//var gordura = celulaPeso.textContent;

//if (peso >0){
// peso.textContent = "peso inválido";
//}
//if (altura >0){
//  altura.textContent = "altura inválida";
//}
//if (gordura >0){
// gordura.textContent = "gordura inválida";
//}