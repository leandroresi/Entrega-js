const iphones = [

 {
  modelo: "Iphone 8",
  precio: "85.000",
  bateria: "1.821 mAh",
  almacenamiento: "64GB"
 },

  {
  modelo: "Iphone xr",
  precio: "155.000",
  bateria: "2.942 mAh",
  almacenamiento: "64GB"
 },

  {
  modelo: "Iphone 11",
  precio: "190.000",
  bateria: "3.110 mAh",
  almacenamiento: "128GB"
 },

  {
  modelo: "Iphone 12 pro max",
  precio:  "270.000",
  bateria: "3.687 mAh",
  almacenamiento: "256GB"
 },

  {
  modelo: "Iphone 13 mini",
  precio: "320.000",
  bateria: "2.438 mAh",
  almacenamiento: "256GB"
 },

];

const samsungs = [

 {
  modelo: "Samsung Galaxy A22",
  precio: "52.999",
  bateria: "5.000 MAH",
  almacenamiento: "64GB"
 },

  {
  modelo: "Samsung Galaxy S22 Ultra",
  precio: "264.999",
  bateria: "2.942 mAh",
  almacenamiento: "256GB"
 },

  {
  modelo: "Samsung Galaxy S21 FE",
  precio: "174.999",
  bateria: "4.500 mAh",
  almacenamiento: "128GB"
 },

  {
  modelo: "Samsung Galaxy A53",
  precio:  "133.999",
  bateria: "5.000 mAh ",
  almacenamiento: "128GB"
 },

  {
  modelo: "Samsung Galaxy A32",
  precio: "73.999",
  bateria: "5.000 mAh",
  almacenamiento: "128GB"
 },

];

const motorolas = [

 {
  modelo: "Motorola Edge 30",
  precio: "78.999",
  bateria: "4.030 mAh",
  almacenamiento: "128GB"
 },

  {
  modelo: "Motorola Moto G22",
  precio: "45.999",
  bateria: "5.000 mAh",
  almacenamiento: "128GB"
 },

  {
  modelo: "Motorola Moto G71",
  precio: "65.999",
  bateria: "5.000 mAh",
  almacenamiento: "64GB"
 },

  {
  modelo: "Motorola moto e40",
  precio:  "40.999",
  bateria: "5.000 mAh",
  almacenamiento: "64GB"
 },

  {
  modelo: "Motorola Moto G82",
  precio: "74.999",
  bateria: "5.000 mAh",
  almacenamiento: "128GB"
 },

];

const xiaomis = [

 {
  modelo: "Xiaomi Redmi Note 11",
  precio: "78.999",
  bateria: "5.000 mAh",
  almacenamiento: "128GB"
 },

  {
  modelo: "Xiaomi Redmi 9A",
  precio: "52.999",
  bateria: "5.000 mAh",
  almacenamiento: "32GB"
 },

  {
  modelo: "Xiaomi Pocophone Poco M4 Pro",
  precio: "99.999",
  bateria: "5.000 mAh",
  almacenamiento: "256GB"
 },

  {
  modelo: "Xiaomi Mi 11 Lite",
  precio:  "173.500",
  bateria: "4.250 mAh",
  almacenamiento: "128GB"
 },

  {
  modelo: "Xiaomi Mi 11T Pro ",
  precio: "215.000",
  bateria: "5.000 mAh",
  almacenamiento: "256GB"
 },

];

let preguntaProducto = prompt ("Ingrese el nombre del producto que quiera averiguar, si desea ver todos los productos en stock, escriba: ver todo ");


function consultarProducto (){


switch (preguntaProducto){

  case "iphone":  iphones.forEach((iphone) => {console.log (iphone)});

  break

  case "samsung":  samsungs.forEach((samsung) => {console.log (samsung)});

  break

  case "motorola":  motorolas.forEach((motorola) => {console.log (motorola)});

  break

  case "xiaomi":  xiaomis.forEach((xiaomi) => {console.log (xiaomi)});

  break

  case "ver todo":iphones.forEach((iphone) => {console.log (iphone)}),
                  samsungs.forEach((samsung) => {console.log (samsung)}),
                  motorolas.forEach((motorola) => {console.log (motorola)}),
                  xiaomis.forEach((xiaomi) => {console.log (xiaomi)});

  break

}

}

consultarProducto();



const productoIphone = iphones.filter ((celular) => celular.modelo.includes(preguntaProducto));

console.log (productoIphone);

const productoSamsung = samsungs.filter ((celular) => celular.modelo.includes(preguntaProducto));

console.log (productoSamsung);

const productoMotorola = motorolas.filter ((celular) => celular.modelo.includes(preguntaProducto));

console.log (productoMotorola);

const productoXiaomi = xiaomis.filter ((celular) => celular.modelo.includes(preguntaProducto));

console.log (productoXiaomi);
