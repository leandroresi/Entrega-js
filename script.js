let carrito = [];
let contenedor = document.getElementById("celulares");
let btnFinalizar = document.getElementById("finalizarcompra");
let iconTrash = document.querySelectorAll(".trash-icon");
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
        <td> <button class="trash-icon" id="${celularAComprar.id} "> 🗑️ </button> </td>
    </tr>
   `
   //muestra las caracteristicas de los objetos en el local storage

    localStorage.setItem("carrito",JSON.stringify(carrito))

    //suma los precios de los productos para dar el total de la compra
   totalCarrito = carrito.reduce((acumulador,celu) => acumulador + celu.precio,0);
   let total = document.getElementById("totalCarrito");
   total.innerText="total a pagar : "+totalCarrito;
 
   eliminarProductoCarrito ();
   
}


function eliminarProductoCarrito (){
 
 document.querySelectorAll(".trash-icon");

 iconTrash.forEach(boton => {
    boton.addEventListener("click", eliminarProducto);
 })
}

function eliminarProducto(e){
  const idBoton = document.querySelectorAll(".trash-icon");
  const index = productoCarrito.findIndex(celular => celular.id ===idBoton);

  productoCarrito.splice(index,1);

  agregarAlCarrito();

  localStorage.setItem("carrito", JSON.stringify(productoCarrito));

}

function actualizarTotal() {
const totalCalculado = productoCarrito.reduce((acc,celular) => acc + productoCarrito.precio,0);
total.innerText=`$${totalCalculado}`;
}




//limpia el carrito al apretar finalizar compra

btnFinalizar.onclick = () => {
  carrito = [];

  //elimina los productos del carrito y el total
   document.getElementById("carrito-productos").innerHTML = "";
   document.getElementById("totalCarrito").innerText = "";


   //cartel de sweet alert para llenar con el mail para la info de la compra
  const { value: email } = Swal.fire({
  title: 'Ingresa tu email para enviarte los datos de tu compra',
  input: 'email',
  inputLabel: '',
  inputPlaceholder: 'Ingresa tu email'
})

if (email) {
  Swal.fire(`Entered email: ${email}`)
}

//cartel luego de cargar el mail
setTimeout(() =>{
  Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Informacion enviada al email, gracias por su compra',
  showConfirmButton: false,
})}, 12000);

//remueve los datos del storage al finalizar la compra
localStorage.removeItem("carrito");

}
