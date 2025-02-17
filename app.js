    function performOperation(operation) {
          let num1 = parseFloat(document.getElementById("num1").value);
          let num2 = parseFloat(document.getElementById("num2").value);
          let result;

          switch (operation) {
            case "+":
              result = num1 + num2;
              break;
            case "-":
              result = num1 - num2;
              break;
            case "*":
              result = num1 * num2;
              break;
            case "/":
              result = num1 / num2;
              break;
            default:
              result = "Invalid operation";
          }

          document.getElementById("result").innerText = `Result: ${result}`;
        }
      