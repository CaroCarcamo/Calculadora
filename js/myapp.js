	var operador1 = 0; operador2 = 0; op = ""; res = 0;

		function escribir(n) {
			document.getElementById('visor').value = document.getElementById('visor').value + n;
		}

		function operacion(signo) {
			operador1 = document.getElementById('visor').value;
			operador1 = parseInt(operador1);
			op = signo;

			document.getElementById('visor').value = "";
		}

		function resultado() {
			operador2 = document.getElementById('visor').value;
			operador2 = parseInt(operador2);

			switch(op) {
				case 'suma':
					res = operador1 + operador2;
					break;
				case 'resta':
					res = operador1 - operador2;
					break;
				case 'mult':
					res = operador1 * operador2;
					break;
				case 'div':
					res = operador1 / operador2;			
					break;
				default:
					break;
			}

			document.getElementById('visor').value = res;
		}