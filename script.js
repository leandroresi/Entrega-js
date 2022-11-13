let carrito = [];
let contenedor = document.getElementById("celulares");
let btnFinalizar = document.getElementById("finalizarcompra");

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
   document.getElementById("carrito-productos").innerHTML += 
   ` 
    <tr>
       <td>${celularAComprar.id}</td>
       <td>${celularAComprar.modelo}</td>
       <td>${celularAComprar.precio}</td>
        <td> <i class='bx bx-trash-alt' ></i></td>
    </tr>
   `
   //muestra las caracteristicas de los objetos en el local storage

   localStorage.setItem("carrito",JSON.stringify(carrito))

   let totalCarrito = carrito.reduce((acumulador,celu) => acumulador + celu.precio,0);
   document.getElementById("totalCarrito").innerText = "Total a pagar $: "+totalCarrito;
 
}



btnFinalizar.onclick = () => {
  carrito = [];
   document.getElementById("carrito-productos").innerHTML = "";
   document.getElementById("totalCarrito").innerText = "";

  const { value: email } = Swal.fire({
  title: 'Ingresa tu email para enviarte los datos de tu compra',
  input: 'email',
  inputLabel: '',
  inputPlaceholder: 'Ingresa tu email'
})

if (email) {
  Swal.fire(`Entered email: ${email}`)
}

}
setTimeout(() =>{
  Toastify({

text: "Informacion enviada, gracias por su compra",

duration: 4000,

style: {
  background: "#CC3636"
},

}).showToast();}, 9000);