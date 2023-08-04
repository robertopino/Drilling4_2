console.log("🟢 Connected!");

const form = document.querySelector("form");

let ejercicios = ["sentadillas", "banco", "peso muerto", "prensas"];

function* generador(fin, added) {
  let dia = 1;
  let ejercicio = 0;

  for (let i = 0; i < fin; i++) {
    if (ejercicio < ejercicios.length) {
      yield `Día ${dia}: ${ejercicios[ejercicio]}`;
    } else {
      ejercicio = 0;
      yield `Día ${dia}: ${ejercicios[ejercicio]}`;
    }
    ejercicio++;
    dia += added;
  }

  return "Suerte con tu rutina!";
}

const generarRutina = (semanas, dias) => {
  const added = parseInt(7 / dias);
  const totalDias = semanas * dias;
  const genEjercicios = generador(totalDias, added);

  console.log(`Semanas: ${semanas}
Días: ${dias}
`);

  for (let i = 0; i <= totalDias; i++) {
    console.log(genEjercicios.next().value);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObjeto = Object.fromEntries(data);

  const { semanas, dias } = dataObjeto;

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
