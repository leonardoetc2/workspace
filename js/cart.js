const PAPEL = ('https://japceibal.github.io/emercado-api/user_cart/25801.json') 
let idinfo = localStorage.getItem('catID2');
        let l15= document.getElementById("goldradio")
        let l7= document.getElementById("premiumradio")
        let l5= document.getElementById("standardradio")
        let porcentaje= 0;

 document.addEventListener("DOMContentLoaded", function(){
    fetch(PAPEL)
    .then(response => response.json())
    .then(data => {
        const ArrayDatos = data;
        prueba(ArrayDatos.articles)
        
         
    });
})

 

function prueba(array) {
//simplifique el tema de el producto pre cargado para intentar modular 
    array.forEach(propent => {
        var ProductHTML = ` 
       
        <div class="container">
        <div class="row">
          <div class="col-sm">
          <img src="${propent.image}"  class="img-thumbnail" >
          </div>
          <div class="col-sm">
          <h3 text-center> ${propent.name}</h3>
          </div>
          <div class="col-sm">
          <h2 class="mb-1"> ${propent.unitCost} </h2>

          </div>
          <div class="col-sm">
          <h3 class="mb-1"><input id="${propent.id}" type="number" min="1"  style=" width:3em;">  </h3>
          
        </div>
        <div class="col-sm">
        <h4 <td class="SubTotal col-2"> ${propent.currency} ${propent.unitCost}</td> </h4>
      </div>
        </div>
      </div>
    `

        document.getElementById("lasterfest").innerHTML += ProductHTML;

const input = document.getElementById(propent.id);
        
// add Event a cada imput para actualizar el precio total
input.addEventListener("input", () => {
  document.querySelector(".SubTotal").innerHTML = `${propent.currency} ${Number(input.value) * propent.unitCost}`;
document.getElementById("productCostText").innerHTML = `${propent.currency} ${Number(input.value) * propent.unitCost}`  
document.getElementById("totalCostText").innerHTML = `${propent.currency} ${((Number(input.value) * propent.unitCost ))+(Number(input.value) * propent.unitCost )*porcentaje}`

l15.addEventListener("click",()=>{
  porcentaje= 15/100
  document.getElementById("totalCostText").innerHTML = `${propent.currency} ${((Number(input.value) * propent.unitCost ))+(Number(input.value) * propent.unitCost )*porcentaje}`
  document.getElementById("comissionText").innerHTML = `${propent.currency} ${(Number(input.value) * propent.unitCost )*porcentaje}`
  
})
l7.addEventListener("click",()=>{
  porcentaje= 0.07
  document.getElementById("totalCostText").innerHTML = `${propent.currency} ${((Number(input.value) * propent.unitCost ))+(Number(input.value) * propent.unitCost )*porcentaje}`
  document.getElementById("comissionText").innerHTML = `${propent.currency} ${(Number(input.value) * propent.unitCost )*porcentaje}`
})
l5.addEventListener("click",()=>{
  porcentaje=0.05
  document.getElementById("totalCostText").innerHTML = `${propent.currency} ${((Number(input.value) * propent.unitCost ))+(Number(input.value) * propent.unitCost )*porcentaje}`
  document.getElementById("comissionText").innerHTML = `${propent.currency} ${(Number(input.value) * propent.unitCost )*porcentaje}`
})
}); 

    });
}


//validacion de boostrap y ya
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


