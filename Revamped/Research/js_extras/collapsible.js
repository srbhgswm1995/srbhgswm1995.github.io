function w3_open() {
  $('#Areas').show();
  document.getElementById("Areas").style.width = "30%";
  document.getElementById("Details").style.width = "70%";
  document.getElementById("Areas").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("Details").style.marginLeft = "0%";
  document.getElementById("Details").style.width = "100%";
  document.getElementById("Areas").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
