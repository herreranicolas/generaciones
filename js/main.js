class Persona {
  constructor(
    nombre,
    dni,
    nacionalidad,
    edad,
    añoDeNacimiento,
    sexo,
    peso,
    altura
  ) {
    this.nombre = nombre;
    this.dni = dni;
    this.nacionalidad = nacionalidad;
    this.edad = edad;
    this.añoDeNacimiento = añoDeNacimiento;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }

  mostrarGeneracion() {
    let generacion;
    let rasgoCaracteristico;
    if (this.añoDeNacimiento >= 1930 && this.añoDeNacimiento <= 1948) {
      generacion = "Silent Generation - Los niños de la posguerra";
      rasgoCaracteristico = "Austeridad";
    } else if (this.añoDeNacimiento >= 1949 && this.añoDeNacimiento <= 1968) {
      generacion = "Generación Baby Boom";
      rasgoCaracteristico = "Ambición";
    } else if (this.añoDeNacimiento >= 1969 && this.añoDeNacimiento <= 1980) {
      generacion = "Generación X";
      rasgoCaracteristico = "Obsesión por el éxito";
    } else if (this.añoDeNacimiento >= 1981 && this.añoDeNacimiento <= 1993) {
      generacion = "Generación Y - Millennials";
      rasgoCaracteristico = "Frustración";
    } else if (this.añoDeNacimiento >= 1994 && this.añoDeNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgoCaracteristico = "Irreverencia";
    } else {
      generacion = "No se puede determinar la generación.";
      rasgoCaracteristico = "No se puede determinar el rasgo característico"
    }
    Swal.fire({
      title: `${generacion}`,
      html: `<p><b>Rasgo característico: </b>${rasgoCaracteristico}</p>`,
      confirmButtonColor: "#e57200",
      background: "#f7f7f7",
      color: "#004074",
    });
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      Swal.fire({
        title: "Edad de la persona",
        html: `
      <p><b>${this.nombre}</b> tiene ${this.edad} años y es mayor de edad.</p>
    `,
        confirmButtonColor: "#e57200",
        background: "#f7f7f7",
        color: "#004074",
      });
    } else {
      Swal.fire({
        title: "Edad de la persona",
        html: `
      <p><b>${this.nombre}</b> tiene ${this.edad} años y no es mayor de edad.</p>
    `,
        confirmButtonColor: "#e57200",
        background: "#f7f7f7",
        color: "#004074",
      });
    }
  }

  mostrarDatosPersona() {
    Swal.fire({
      title: "Datos de la persona",
      html: `
      <p><b>Nombre:</b> ${this.nombre}</p>
      <p><b>DNI:</b> ${this.dni}</p>
      <p><b>Nacionalidad:</b> ${this.nacionalidad}</p>
      <p><b>Edad:</b> ${this.edad} años.</p>
      <p><b>Año de Nacimiento:</b> ${this.añoDeNacimiento}</p>
      <p><b>Sexo:</b> ${this.sexo}</p>
      <p><b>Peso:</b> ${this.peso} kg</p>
      <p><b>Altura:</b> ${this.altura} cm</p>
    `,
      confirmButtonColor: "#e57200",
      background: "#f7f7f7",
      color: "#004074",
    });
  }
}

let formularioPersona = document.getElementById("formularioPersona");
nombre = document.getElementById("nombre");
dni = document.getElementById("dni");
nacionalidad = document.getElementById("nacionalidad");
edad = document.getElementById("edad");
añoDeNacimiento = document.getElementById("añoDeNacimiento");
sexo = document.getElementById("sexo");
peso = document.getElementById("peso");
altura = document.getElementById("altura");
btnAgregarPersona = document.getElementById("btnAgregarPersona");
listadoDePersonas = [];
contenedorPersonas = document.getElementById("contenedorPersonas");

formularioPersona.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarPersona();
});

function agregarPersona() {
  let persona = new Persona(
    nombre.value,
    dni.value,
    nacionalidad.value,
    edad.value,
    añoDeNacimiento.value,
    sexo.value,
    peso.value,
    altura.value
  );
  listadoDePersonas.push(persona);
  formularioPersona.reset();
  mostrarPersona();
}

function mostrarPersona() {
  if (listadoDePersonas.length === 0) {
    contenedorPersonas.innerHTML = `<li class="list-group-item">No hay personas ingresadas.</li>`;
  } else {
    contenedorPersonas.innerHTML = "";
    listadoDePersonas.map((persona, idPersona) => {
      contenedorPersonas.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${persona.nombre}
          <div class="btn-group">
            <div class="text-center d-flex">
              <button type="button" class="btn rounded me-md-2" onclick="listadoDePersonas[${idPersona}].mostrarDatosPersona()">Datos</button>
              <button type="button" class="btn rounded me-md-2" onclick="listadoDePersonas[${idPersona}].esMayorDeEdad()">Edad</button>
            </div>
            <div class="text-center d-flex">
              <button type="button" class="btn rounded me-md-2" onclick="listadoDePersonas[${idPersona}].mostrarGeneracion()">Generación</button>
              <button type="button" class="btn rounded" onclick="borrarPersona(${idPersona})">Borrar</button>
            </div>
          </div>
        </li>
    `;
    });
  }
}

function borrarPersona(idPersona) {
  listadoDePersonas.splice(idPersona, 1);
  mostrarPersona();
}
