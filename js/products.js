const auto = await fetch(`https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`).then(response => response.json());
 let car = document.getElementById("car");
console.log(auto)
//el filtro html del 4 al 42
const filter= document.getElementById("filtro")
filter.innerHTML=`<div class="row">
<div class="col text-end">
<div class="col">
    <input class="form-control" type="search"  id="search">
  </div>
  <div class="btn-group btn-group-toggle mb-4" data-bs-toggle="buttons">
    <input type="radio" class="btn-check" name="options" id="sortAsc">
    <label class="btn btn-light" for="sortAsc">A-Z</label>
    <input type="radio" class="btn-check" name="options" id="sortDesc">
    <label class="btn btn-light" for="sortDesc">Z-A</label>
    <input type="radio" class="btn-check" name="options" id="sortByCount" checked>
    <label class="btn btn-light" for="sortByCount"><i class="fas fa-sort-amount-down mr-1"></i></label>

  </div>
</div>
</div>
<div class="row">
<div class="col-lg-6 offset-lg-6 col-md-12 mb-1 container">
  <div class="row container p-0 m-0">
    <div class="col">
      <p class="font-weight-normal text-end my-2">Cant.</p>
    </div>
    <div class="col">
      <input class="form-control" type="number"  id="rangeMin">
    </div>
    <div class="col">
      <input class="form-control" type="number"  id="rangeMax">
    </div>
    <div class="col-3 p-0">
      <div class="btn-group" role="group">
        <button class="btn btn-light btn-block" id="rangeFilterCount">Filtrar</button>
        <button class="btn btn-link btn-sm" id="clearRangeFilter">Limpiar</button>
      </div>
    </div>
  </div>
</div>
</div>`

//intento de hacer  el fitro funcional (no funciono )
var max = document.getElementById("rangeMax")
var min = document.getElementById("rangeMin")
var search= document.getElementById("search")

/* 
function f2(){
    productos = list
  if(min.value != "")[
    productos=productos.filter(products =>nombre.products[index].cost > min.value)
  ]
    if(max.value != "")[
    productos = productos.filter(products =>nombre.products[index].cost < max.value)
  ]
  h(productos)
}*/


//lo demas los productos en general
function h(nombre){
    for (let index = 0; index < nombre.products.length; index++) {
	car.innerHTML += `
  <div onclick="idd(${nombre.products[index].id})" class="list-group-item list-group-item-action cursor-active">
    <div class="row">
    <div class="col-3">
        <img src="${nombre.products[index].image}" alt="${nombre.products[index].description}" class="img-thumbnail">
    </div>
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">${nombre.products[index].name}</h4>
            <small class="text-muted"> Autos vendidos:${nombre.products[index].soldCount} </small>
        </div>
        <br> 
        <br>
        <p class="mb-1"> Descripcion: </p>
        <p class="mb-1">${nombre.products[index].description}</p>
        <p class="mb-1">${nombre.products[index].currency} ${nombre.products[index].cost}</p>
        </div>
    </div>
</div>
    `
}
}
 h(auto) ;