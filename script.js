const carrito = [];
let contenedor = document.getElementById("celulares");

function cardIphone (){
  for(const celular of iphones){
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
 
  iphones.forEach((celular) =>{
    document.getElementById(`btn${celular.id}`).addEventListener("click",function(){
      agregarAlCarrito(celular);
    });
  });
  
}

cardIphone ();

function agregarAlCarrito(celularAComprar){
   carrito.push(celularAComprar);
   console.table(carrito);
}

agregarAlCarrito ();

function cardSamsung (){
  for(const celular of samsungs){
    contenedor.innerHTML += `
          <div class="card col-sm-3" style= "">
            <img src=${celular.foto} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${celular.modelo} </h5>
              <p class="card-text">${celular.bateria} <br> ${celular.almacenamiento} <br> ${celular.precio} </p>
              <button id="btn${celular.id}" class="btn btn-primary">Comprar</button>
            </div>
          </div>`;
  }
}

cardSamsung ();




function cardMotorola (){
  for(const celular of motorolas){
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
}

cardMotorola ();




function cardXiaomi (){
  for(const celular of xiaomis){
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
}

cardXiaomi ();
