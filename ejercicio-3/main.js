window.onload = function() {
    let botonCalcular = document.getElementById("calcular");
    botonCalcular.addEventListener("click", function() {
      let numero1 = parseFloat(document.getElementById("numero1").value);
      let numero2 = parseFloat(document.getElementById("numero2").value);
      let operacion = document.getElementById("operacion").value;
      let resultado;
  
      switch (operacion) {
        case "suma":
          resultado = numero1 + numero2;
          break;
        case "resta":
          resultado = numero1 - numero2;
          break;
        case "multiplicacion":
          resultado = numero1 * numero2;
          break;
        case "division":
          resultado = numero1 / numero2;
          break;
        default:
          resultado = "Operación inválida";
          break;
      }
  
      document.getElementById("resultado").textContent = "Resultado: " + resultado;
    });
  };
  

