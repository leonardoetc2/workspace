const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}`;
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
/* el id lo puse aqui porque no me funciona el oneclick */
const idd= function idd(id) {
  localStorage.setItem("catID2", id);
  window.location = "product-info.html"
} 
const idd2= function idd2(id) {

  localStorage.setItem("carrito", id);
  window.location = "cart.html"
} 
/* fi */
let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
//aqui puse la interfaz de usuartio 
document.addEventListener("DOMContentLoaded", function(){
    const PatoNav= document.getElementById("pato")
    let con_usuario=`<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ${localStorage.getItem('usuario')}
      </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
          <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
          <li><a class="dropdown-item" href="./login.html">Cerrar sesión</a></li>
        </ul>
      </div>`
    let sin_user=`<a class="nav-link" href="./login.html" >login</a>`
    
      if(localStorage.getItem('usuario')){
        PatoNav.innerHTML=con_usuario
      }else{
        PatoNav.innerHTML=sin_user
       }

})
