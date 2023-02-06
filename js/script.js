//pega o botão e adicionar um evento de clique
var button = document.querySelector('#calcular');
button.addEventListener('click', calcular);

//Validaçaõ do número A, valore entre -100 e 100
document.querySelector('#number-a').addEventListener('input', e=>{
  const el = e.target || e

  if(el.type == "number" && el.max && el.min ){
    let value = parseInt(el.value)
    el.value = value // for 000 like input cleanup to 0
    let max = parseInt(el.max)
    let min = parseInt(el.min)
    if ( value > max ) el.value = el.max
    if ( value < min ) el.value = el.min
  }
});

//Validaçaõ do número B, valore entre -100 e 100
document.querySelector('#number-b').addEventListener('input', e=>{
  const el = e.target || e

  if(el.type == "number" && el.max && el.min ){
    let value = parseInt(el.value)
    el.value = value // for 000 like input cleanup to 0
    let max = parseInt(el.max)
    let min = parseInt(el.min)
    if ( value > max ) el.value = el.max
    if ( value < min ) el.value = el.min
  }
});


//Calcular as 15 operções
function calcular(){
  //limpar as variáveis a cada nova chamada
  var a = 0
  var b = 0

  //pegar os valore nos inputs
  /*Faz o cast com o Number, pois se trata de números */
  a = Number(document.querySelector('#number-a').value);
  b = Number(document.querySelector('#number-b').value);

  //verificar se há valores digitados nos inputs
  if(a === 0 || b === 0){
    console.error('Digite um valor para A ou B')
    return
  }

  //soma
  var soma = a + b;
  //setar o valor na interface
  document.querySelector('#soma').textContent = soma;

  //subtração A - B
  var subAB = a - b
  //setar o valor na interface
  document.querySelector('#subtAB').textContent = subAB;

  //subtração B - A
  var subBA = b - a
  //setar o valor na interface
  document.querySelector('#subtBA').textContent = subBA;

  //multiplicação 
  var multi = a * b
  //setar o valor na interface
  document.querySelector('#multiplic').textContent = multi;

  //divisão A / B
  var divAB = a / b
  //setar o valor na interface
  document.querySelector('#divAB').textContent = divAB.toFixed(2);

  //divisão B / A 
  var divBA = b / a
  //setar o valor na interface
  document.querySelector('#divBA').textContent = divBA.toFixed(2);

  //potência de A na base B 
  var powAB = Math.pow(a, b)
  //setar o valor na interface
  document.querySelector('#powAB').textContent = powAB;

  //potência de B na base A 
  var powBA = Math.pow(b, a)
  //setar o valor na interface
  document.querySelector('#powBA').textContent = powBA;

  //raiz quadrada de A
  var raizA = Math.sqrt(a)
  //setar o valor na interface
  document.querySelector('#raizA').textContent = raizA.toFixed(2);

  //raiz quadrada de B
  var raizB = Math.sqrt(b)
  //setar o valor na interface
  document.querySelector('#raizB').textContent = raizB.toFixed(2);

  //Fatorial de A
  var fatA = a
  for(var i=1; i < a; i++){
    fatA = fatA * (a - i)
  }
  //setar o valor na interface
  document.querySelector('#fatA').textContent = fatA;

  //Fatorial de B
  var fatB = 1
  for(var i=b; i > 1; i--){
    fatB = fatB * i
  }
  //setar o valor na interface
  document.querySelector('#fatB').textContent = fatB;

  //porcentagem de A em relação a B
  var percentAB =  divAB.toFixed(2) * 100
  //setar o valor na interface
  document.querySelector('#percentAB').textContent = percentAB;

  //porcentagem de B em relação a A
  var percentBA =  divBA.toFixed(2) * 100
  //setar o valor na interface
  document.querySelector('#percentBA').textContent = percentBA;

  //média
  var media = (a + b) / 2
  //setar o valor na interface
  document.querySelector('#media').textContent = media.toFixed(1);
  

}