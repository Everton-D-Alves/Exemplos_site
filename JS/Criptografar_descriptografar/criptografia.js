function criptografar() {
    var mensagem = document.getElementById("mensagem").value;
    var chave = parseInt(document.getElementById("chave").value);
    var resultado = document.getElementById("resultado");
  
    var mensagemCriptografada = "";
  
    for (var i = 0; i < mensagem.length; i++) {
      var char = mensagem[i];
  
      if (char.match(/[a-z]/i)) {
        var asciiOffset = char === char.toLowerCase() ? 97 : 65;
        mensagemCriptografada += String.fromCharCode((char.charCodeAt(0) - asciiOffset + chave) % 26 + asciiOffset);
      } else {
        mensagemCriptografada += char;
      }
    }
  
    resultado.innerHTML = "Texto Criptografado: " + mensagemCriptografada;
  }
  
  function descriptografar() {
    var mensagemCriptografada = document.getElementById("mensagem").value;
    var chave = parseInt(document.getElementById("chave").value);
    var resultado = document.getElementById("resultado");
  
    var mensagemDescriptografada = "";
  
    for (var i = 0; i < mensagemCriptografada.length; i++) {
      var char = mensagemCriptografada[i];
  
      if (char.match(/[a-z]/i)) {
        var asciiOffset = char === char.toLowerCase() ? 97 : 65;
        mensagemDescriptografada += String.fromCharCode((char.charCodeAt(0) - asciiOffset - chave + 26) % 26 + asciiOffset);
      } else {
        mensagemDescriptografada += char;
      }
    }
  
    resultado.innerHTML = "Texto Descriptografado: " + mensagemDescriptografada;
  }
  