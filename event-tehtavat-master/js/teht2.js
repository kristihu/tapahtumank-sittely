document.getElementById('kuva').onmouseenter = function ()
{mouseEnter()};
document.getElementById('kuva').onmouseleave = function()
{mouseLeave()};



function mouseEnter() {
  document.getElementById('asd').style.opacity = "1";
}

function mouseLeave(){
  document.getElementById('asd').style.opacity = "0";
}