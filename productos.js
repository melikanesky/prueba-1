const productos = [  
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
  ];
  
  // 1. Mostrar nombre del primer producto
  console.log(productos[0].nombre);
  
  // 2. Recorrido con for...of
  for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
  }
  
  // 3. Recorrido con .forEach()
  productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
  });
  
  // 4. Obtener solo los nombres con .map()
  const nombres = productos.map(producto => producto.nombre);
  console.log(nombres);
  
  // 5. Filtrar por categoría "Ropa"
  const ropa = productos.filter(producto => producto.categoria === "Ropa");
  console.log(ropa);
  
  // 6. Filtrar por precio mayor a $3000
  const productosCaros = productos.filter(producto => producto.precio > 3000);
  console.log(productosCaros);
  
  // 7. Buscar producto llamado "Gorra"
  const gorra = productos.find(producto => producto.nombre === "Gorra");
  console.log(gorra);
  
  // 8. Verificar si algún producto cuesta más de $10.000
  const hayProductoMayorA10k = productos.some(producto => producto.precio > 10000);
  console.log(hayProductoMayorA10k);
  
  // 9. Verificar si todos los productos cuestan más de $1000
  const todosMayoresA1000 = productos.every(producto => producto.precio > 1000);
  console.log(todosMayoresA1000);
  
  // 10. Verificar si el array de nombres incluye "Campera"
  const incluyeCampera = nombres.includes("Campera");
  console.log(incluyeCampera);
  
  const productosOrdenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
  console.log(productosOrdenadosPorPrecio);

  const mensajes = productos.map(producto => 
    `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`
  );
  console.log(mensajes);


  const nuevosProductos = [
    { id: 6, nombre: "Bufanda", precio: 1300, categoria: "Accesorios" },
    { id: 7, nombre: "Ojotas", precio: 2200, categoria: "Calzado" }
  ];
  
  const todosLosProductos = [...productos, ...nuevosProductos];
  console.log(todosLosProductos);