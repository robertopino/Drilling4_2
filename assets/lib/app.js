"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generador);

console.log("🟢 Connected!");

var form = document.querySelector("form");

var ejercicios = ["sentadillas", "banco", "peso muerto", "prensas"];

function generador(fin, added) {
  var dia, ejercicio, i;
  return regeneratorRuntime.wrap(function generador$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dia = 1;
          ejercicio = 0;
          i = 0;

        case 3:
          if (!(i < fin)) {
            _context.next = 17;
            break;
          }

          if (!(ejercicio < ejercicios.length)) {
            _context.next = 9;
            break;
          }

          _context.next = 7;
          return "D\xEDa " + dia + ": " + ejercicios[ejercicio];

        case 7:
          _context.next = 12;
          break;

        case 9:
          ejercicio = 0;
          _context.next = 12;
          return "D\xEDa " + dia + ": " + ejercicios[ejercicio];

        case 12:
          ejercicio++;
          dia += added;

        case 14:
          i++;
          _context.next = 3;
          break;

        case 17:
          return _context.abrupt("return", "Suerte con tu rutina!");

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var generarRutina = function generarRutina(semanas, dias) {
  var added = parseInt(7 / dias);
  var totalDias = semanas * dias;
  var genEjercicios = generador(totalDias, added);

  console.log("Semanas: " + semanas + "\nD\xEDas: " + dias + "\n");

  for (var i = 0; i <= totalDias; i++) {
    console.log(genEjercicios.next().value);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var data = new FormData(form);
  var dataObjeto = Object.fromEntries(data);

  var semanas = dataObjeto.semanas,
      dias = dataObjeto.dias;


  if (!semanas.trim()) {
    alert("Ingresa un número de semanas");
    document.querySelector("#semanas").focus();
    return;
  }

  if (!dias.trim()) {
    alert("Ingresa tus días disponibles");
    document.querySelector("#días").focus();
    return;
  }

  generarRutina(Number(semanas), Number(dias));
});