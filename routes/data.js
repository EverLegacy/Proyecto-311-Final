



module.exports = {
empleados :[
{id: 1, nombre: 'Juan', apellidos: 'García', edad: 25, genero: 'Hombre', departamento1: '', departamento2: '', departamento3: '' },
{id: 2, nombre: 'Ana', apellidos: 'López', edad: 35, genero: 'Mujer', departamento1: '', departamento2: '', departamento3: '' },
{id: 3, nombre: 'Pedro', apellidos: 'Martínez', edad: 30, genero: 'Hombre', departamento1: '', departamento2: '', departamento3: '' },
{id: 4, nombre: 'María', apellidos: 'Gómez', edad: 40, genero: 'Mujer', departamento1: '', departamento2: '', departamento3: '' },
{id: 5, nombre: 'Luis', apellidos: 'Rodríguez', edad: 45, genero: 'Hombre', departamento1: '', departamento2: '', departamento3: '' },
{id: 6, nombre: 'Carmen', apellidos: 'Pérez', edad: 50, genero: 'Mujer', departamento1: '', departamento2: '', departamento3: '' },
{id: 7, nombre: 'Javier', apellidos: 'Sánchez', edad: 55, genero: 'Hombre', departamento1: '', departamento2: '', departamento3: '' },
{id: 8, nombre: 'Rosa', apellidos: 'Romero', edad: 60, genero: 'Mujer', departamento1: '', departamento2: '', departamento3: '' },
{id: 9, nombre: 'Miguel', apellidos: 'Gutiérrez', edad: 65, genero: 'Hombre', departamento1: '', departamento2: '', departamento3: '' },
{id: 10, nombre: 'Isabel', apellidos: 'Navarro', edad: 70, genero: 'Mujer', departamento1: '', departamento2: '', departamento3: '' }
]
,
departamentos :[
{id: 1, nombre: 'RH', encargado: '', area: ''},
{id: 2, nombre: 'Contabilidad', encargado: '', area: '' },
{id: 3, nombre: 'Ventas', encargado: '', area: '' },
{id: 4, nombre: 'Compras', encargado: '', area: '' },
{id: 5, nombre: 'Sistemas', encargado: '', area: '' },
{id: 6, nombre: 'Mantenimiento', encargado: '', area: '' },
{id: 7, nombre: 'Producción', encargado: '', area: '' },
{id: 8, nombre: 'Calidad', encargado: '', area: '' },
{id: 9, nombre: 'Logística', encargado: '', area: '' },
{id: 10, nombre: 'Seguridad', encargado: '', area: '' }
]
,
encargados : [
{id: 1, nombre: 'Luis Vega', estudio: 'Universidad', turno: 'Mañana'},
{id: 2, nombre: 'Carlos Alcantar', estudio: 'Universidad', turno: 'Mañana'},
{id: 3, nombre: 'Maria Rita', estudio: 'Universidad', turno: 'Mañana'},
{id: 4, nombre: 'Manuel Doblado', estudio: 'Universidad', turno: 'Mañana'},
{id: 5, nombre: 'Luis R Corniquez', estudio: 'Universidad', turno: 'Mañana'},
{id: 6, nombre: 'Nata', estudio: 'Universidad', turno: 'Mañana'},
{id: 7, nombre: 'Junior H', estudio: 'Universidad', turno: 'Mañana'},
{id: 8, nombre: 'Lucia Montes', estudio: 'Universidad', turno: 'Mañana'},
{id: 9, nombre: 'Carlos Davila', estudio: 'Universidad', turno: 'Mañana'},
{id: 10, nombre: 'Guadalupe Montes', estudio: 'Universidad', turno: 'Mañana'}
]
,
areas: [
{id: 1, nombre: 'RH', Edificio: 'A'},
{id: 2, nombre: 'Contabilidad', Edificio: 'B'},
{id: 3, nombre: 'Ventas', Edificio: 'C'},
{id: 4, nombre: 'Compras', Edificio: 'D'},
{id: 5, nombre: 'Sistemas', Edificio: 'E'},
{id: 6, nombre: 'Mantenimiento', Edificio: 'F'},
{id: 7, nombre: 'Producción', Edificio: 'G'},
{id: 8, nombre: 'Calidad', Edificio: 'H'},
{id: 9, nombre: 'Logística', Edificio: 'I'},
{id: 10, nombre: 'Seguridad', Edificio: 'J'}

]
};





/*empleados.forEach(empleado => {
const departamentosAleatorios = [...departamentos]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  empleado.departamento1 = departamentosAleatorios[0].nombre;
  empleado.departamento2 = departamentosAleatorios[1].nombre;
  empleado.departamento3 = departamentosAleatorios[2].nombre;
});

departamentos.forEach(departamento => {
  const areaCorrespondiente = areas.find(area => area.nombre === departamento.nombre);
  if (areaCorrespondiente) {
    departamento.area = areaCorrespondiente.nombre;
  }
  const encargadoAleatorio = encargados[Math.floor(Math.random() * encargados.length)];
  departamento.encargado = encargadoAleatorio.nombre;
});
*/
