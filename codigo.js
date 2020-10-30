
function info(cadena) {

  var resultado = "La cadena \""+cadena+"\" ";

  // Comprobar mayúsculas y minúsculas
  if(cadena == cadena.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }
  else {
    resultado += " está formada por mayúsculas y minúsculas";
  }

  return resultado;
}

alert(info("HOLA DIOS SOY YO DE NUEVO "));
alert(info("hola dios soy yo de nuevo "));
alert(info("HoLa MunDO"));