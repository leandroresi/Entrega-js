const carrito = [];
let contenedor = document.getElementById("celulares");

function cardCelulares (){
  for(const celular of celulares){
    contenedor.innerHTML += `
          <div class="card col-sm-3">
            <img src=${celular.foto} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${celular.modelo} </h5>
              <p class="card-text">${celular.bateria} <br> ${celular.almacenamiento} <br> ${celular.precio} </p>
              <button id="btn${celular.id}" class="btn btn-primary">Comprar</button>
            </div>
          </div>`;
  }
 
  celulares.forEach((celular) =>{
    document.getElementById(`btn${celular.id}`).addEventListener("click", function (){
      agregarAlCarrito(celular);
    });
  });
  
}

cardCelulares ();

function agregarAlCarrito(celularAComprar){
   carrito.push(celularAComprar.id,celularAComprar.modelo,celularAComprar.precio);
   console.table(carrito);

   document.getElementsByClassName("carrito-productos").innerHTML += 
   `<div class="card col-sm-3">
            <img src= ${celularAComprar.foto} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${celularAComprar.modelo} </h5>
              <p class="card-text">${celular.bateria} <br> ${celular.almacenamiento} <br> ${celular.precio} </p>
            </div>
          </div>
   `

   localStorage.setItem("carrito",JSON.stringify(carrito))
 
}

agregarAlCarrito ();



