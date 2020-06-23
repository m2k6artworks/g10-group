function changeCss () 
{
  var headtrans = document.getElementById("header-trans");
  var lg = document.getElementById("logo");

  if (this.scrollY > 1) 
  {
    headtrans.classList.remove("bghead2");
    headtrans.classList.add("bghead");
    headtrans.style.backgroundColor = "#fff";
    lg.src = "./foto/logo.png";
  }
  else 
  {
    headtrans.classList.remove("bghead");
    headtrans.classList.add("bghead2");
    headtrans.style.backgroundColor = "rgba(0,0,0,0.0)";
    lg.src = "./foto/logo-white.png";
  }
}

window.addEventListener("scroll", changeCss , false);
  
var bgs = document.getElementById('parallax');
var bgs2 = document.getElementById('parallax2');
var ygy = document.getElementById('ygy');
var jkt = document.getElementById('jkt');
var sby = document.getElementById('sby');
var bkt = document.getElementById('bkt');


function changeimg1() 
{ 
  bgs.style.backgroundImage = "url('foto/jogja.jpg')";
  bgs.style.transition = "0.5s ease-out";
  bgs2.style.backgroundImage = "url('foto/jogja.jpg')";
  bgs2.style.transition = "0.5s ease-out";
  ygy.classList.add("selected");
  jkt.classList.remove("selected");
  sby.classList.remove("selected");
  bkt.classList.remove("selected");
}

function changeimg2() 
{
  bgs.style.backgroundImage = "url('foto/monas.jpg')";
  bgs.style.transition = "0.5s ease-out";
  bgs2.style.backgroundImage = "url('foto/monas.jpg')";
  bgs2.style.transition = "0.5s ease-out";
  ygy.classList.remove("selected");
  jkt.classList.add("selected");
  sby.classList.remove("selected");
  bkt.classList.remove("selected");
}

function changeimg3() 
{ 
  bgs.style.backgroundImage = "url('foto/tugu-sby.jpg')";
  bgs.style.transition = "0.5s ease-out";
  bgs2.style.backgroundImage = "url('foto/tugu-sby.jpg')";
  bgs2.style.transition = "0.5s ease-out";
  ygy.classList.remove("selected");
  jkt.classList.remove("selected");
  sby.classList.add("selected");
  bkt.classList.remove("selected");
}

function changeimg4() 
{  
  bgs.style.backgroundImage = "url('foto/jam-gadang.jpg')";
  bgs.style.transition = "0.5s ease-out";
  bgs2.style.backgroundImage = "url('foto/jam-gadang.jpg')";
  bgs2.style.transition = "0.5s ease-out";
  ygy.classList.remove("selected");
  jkt.classList.remove("selected");
  sby.classList.remove("selected");
  bkt.classList.add("selected");
}