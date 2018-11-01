document.getElementById('sum').onclick = function ()
{summa()};
document.getElementById('sub').onclick = function ()
{vah()};

document.getElementById('multi').onclick = function()
{kerto()};

document.getElementById('div').onclick = function() {
  jako()

};

function summa(){
  document.getElementById('sum');
  let luku1 = document.getElementById('num1');
  parseInt(luku1);
  let luku2 = document.getElementById('num2');
  parseInt(luku2);
  let sum = +luku1.value + +luku2.value;
  document.getElementById('vastaus').innerHTML = sum;
}

function vah(){
  document.getElementById('sub');
  let luku1 = document.getElementById('num1');
  parseInt(luku1);
  let luku2 = document.getElementById('num2');
  parseInt(luku2);
  let vahenna = +luku1.value - +luku2.value;
  document.getElementById('vastaus').innerHTML = vahenna;
}

function kerto(){
  document.getElementById('multi');
  let luku1 = document.getElementById('num1');
  parseInt(luku1);
  let luku2 = document.getElementById('num2');
  parseInt(luku2);
  let kerro = +luku1.value * +luku2.value;
  document.getElementById('vastaus').innerHTML = kerro;
}

function jako(){
  document.getElementById('div');
  let luku1 = document.getElementById('num1');
  parseInt(luku1);
  let luku2 = document.getElementById('num2');
  parseInt(luku2);
  let jaa = +luku1.value / +luku2.value;
  document.getElementById('vastaus').innerHTML = jaa;
}