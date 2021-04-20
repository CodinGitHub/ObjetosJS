//Cómo crear un objeto
let usuario = {
  nombre: 'Maria',
  edad: 20,
  estudiante: true,
  'habla ingles': true
}

//Imprimir sus valores
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario.estudiante);

//Agregar propiedades
usuario.carrera = 'Contabilidad';
console.log(usuario);
console.log(usuario.carrera);

//Remover propiedades
delete usuario.edad;
console.log(usuario);

console.log(usuario['habla ingles']);
usuario['hace deporte'] = false;
console.log(usuario)