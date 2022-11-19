let carrito = [];
let totalCarrito;
let total= 0;
let contenedor = document.getElementById("celulares");
let precioTotal = document.getElementById("total");
let btnFinalizar = document.getElementById("finalizarcompra");
let iconTrash = document.getElementById("trash-icon");
let trCarrito = document.getElementById("tr-producto");
let productoCarrito = localStorage.getItem("carrito");
productoCarrito = JSON.parse(productoCarrito);
//funcion para mostrar la informacion de los productos agregados en el array

function cardCelulares (){
  for(const celular of celulares){
    contenedor.innerHTML += `
          <div class="caja-productos">
            <img class="img-producto" src=${celular.foto} alt="...">
            <div>
              <h5>${celular.modelo} </h5>
              <p>${celular.bateria} <br> ${celular.almacenamiento} <br> ${celular.precio} </p>
              <button id="btn${celular.id}" class="btn btn-primary" style="margin:25px">Comprar</button>
            </div>
          </div>`;
  }

//agrega un evento al presionar el boton de los productos

  celulares.forEach((celular) =>{
    document.getElementById(`btn${celular.id}`).addEventListener("click", function (){
      agregarAlCarrito(celular);
    });
  });
  
}

cardCelulares ();

//funcion para mandar los productos al carrito y mostrarlos

function agregarAlCarrito(celularAComprar){
  carrito.push(celularAComprar);
  console.table(carrito)
  //alert que muestra el producto agregado al carrito
  Swal.fire({
  title: `${celularAComprar.modelo}`,
  text: 'Agregado al carrito',
  imageUrl: `${celularAComprar.foto }`,
  imageWidth: 250,
  imageHeight: 250,
  imageAlt: `imagen de : ${celularAComprar.modelo}`,
})
//genera la tabla del carrito
   document.getElementById("carrito-productos").innerHTML += 
   ` 
    <tr id="tr-producto">
       <td>${celularAComprar.id}</td>
       <td>${celularAComprar.modelo}</td>
       <td>${celularAComprar.precio}</td>
        <td> <button id="trash-icon"  onclick="eliminarProducto(event)"> 🗑️ </button> </td>
    </tr>
   `;
     totalCarrito = carrito.reduce((acumulador,celular) => acumulador + celular.precio,0);
    let precioTotal = document.getElementById("total");
    precioTotal.innerText ="Total a pagar : $"+ totalCarrito;
  

   //muestra las caracteristicas de los objetos en el local storage

    localStorage.setItem("carrito",JSON.stringify(carrito))
    
  
}


function eliminarProducto(ev) {

  let fila = ev.target.parentElement.parentElement;
  console.log(fila);
  let id = fila.children[0].innerText;
  console.log(id);
  let indice = carrito.findIndex(producto => producto.id == id);
  console.log(indice);

  carrito.splice(indice,1);
  
  console.table(carrito);

  fila.remove();

  //actualizar el precio
  
  let precioAcumulado = carrito.reduce ((acumulador,producto) => acumulador-producto.precio,0);


  precioTotal.innerText ="Total a pagar : $"+ precioAcumulado;

 console.log(total);



  localStorage.setItem("carrito",JSON.stringify(carrito));

}




//limpia el carrito al apretar finalizar compra

btnFinalizar.onclick = () => {
  carrito = [];

  //elimina los productos del carrito y el total
   document.getElementById("carrito-productos").innerHTML = "";


//cartel de gracias por la compra
setTimeout(() =>{
  Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Gracias por su compra',
  showConfirmButton: false,
})}, 100);

  
let precioAcumulado = carrito.reduce ((acumulador,producto) => acumulador-producto.precio,0);

  precioTotal.innerText ="Total a pagar : $"+ precioAcumulado;


//remueve los datos del storage al finalizar la compra
localStorage.removeItem("carrito");



}


//datos de los clientes

function datosClientesJson(){
  const URLJSON = "./clientes.json";
  fetch(URLJSON)
     .then(res => res.json() )
     .then(datosRecibidos =>{
       const clientesDatos = datosRecibidos.clientes;
       clientesDatos.forEach(cliente => {
        document.getElementById("lista-clientes").innerHTML += `
         <div class="cliente">

            <h2 class="info-h2"><img class="info-img" src="../img/icon-person.svg" alt=""></i></h2>

            <div class="info-p"> <h2 class="cliente-nombre"> ${cliente.nombre} </h2> <br> <p class="cliente-comentario"> ${cliente.comentario} </p></div>
        
        </div>`

       })
     })
}


datosClientesJson();