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
  console.log(arrOrd);
  
}
