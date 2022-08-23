const auto = await fetch("https://japceibal.github.io/emercado-api/cats_products/101.json").then(response => response.json());
 let car = document.getElementById("car");

function h(nombre){
    for (let index = 0; index < nombre.products.length; index++) {
	car.innerHTML += `
    <div class="row">
                    <div class="col-3">
                        <img src="${nombre.products[index].image}" alt="auto.gerico" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${nombre.products[index].name}</h4>
                            <small class="text-muted">${nombre.products[index].soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${nombre.products[index].description}</p>
                    </div>
                </div>
    `
}
}
 h(auto)

    
