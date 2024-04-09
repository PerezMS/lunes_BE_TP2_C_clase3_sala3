function saludar() {
  console.log(`🚀 ~ saludar ~ Holaaaaaa`);
}

function encontrarMax (array) {
  return Math.Max(array);
}
function sumarArray (array) {
  let total=0;
  array.forEach(numero){
    total+=numero;
  }
  return total;
}

function abbrevName (string) {
 let stringFinal;
  let array=string.split(" ");
  array.forEach(element){
    stringFinal += element[0] +"." ;
  }
  return stringFinal;  
  }

function oneProperty (array, string){
	let arrayNUevo = array.map( x => {

return {
	...x
	stringValue = x.string
}
})
}

function filtrar (array) {
  let arrFiltrado = array.filter((x) => x.curso == "Primero");
  let arrNombre = arrFiltrado.map((x) => {
    return {
      ...x
      Nombre= x.nombre
  }
  });
let arrOrd= arrNombre.sort((a, b) => {
  const nombreA = a.name.toUpperCase(); 
  const nombreB = b.name.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
  console.log(arrOrd)
  
}
  
}
const nombreUsuarios = ["Shakyra", "Chayane"];
// module.exports = {
//   saludar: saludar,
//   usersName: usersName,
// };

 module.exports = {saludar, nombreUsuarios} ;
// console.log(`🚀 ~ module:`, module)
