
//cosas basicas de envio sin funcionalidad
function mostrar2(){
  document.getElementById("cordero2").innerHTML=`
  <div class="d-block my-3">
   <div class="custom-control custom-radio">
     <input id="goldradio" name="publicationType" type="radio" class="custom-control-input" checked=""
       required="">
     <label class="custom-control-label" for="goldradio">Premium 2 a 5 dias(15%)</label>
   </div>
   <div class="custom-control custom-radio">
     <input id="premiumradio" name="publicationType" type="radio" class="custom-control-input" required="">
     <label class="custom-control-label" for="premiumradio">Express 5 a 6 dias (7%) </label>
   </div>
   <div class="custom-control custom-radio">
     <input id="standardradio" name="publicationType" type="radio" class="custom-control-input" required="">
     <label class="custom-control-label" for="standardradio">Standard 12 a 15 dias(5%))</label>
   </div>
   <h2> Direccion de envio</h2>
   <br> </br>
   
   <div class="container23">
    <div class="text-center p-4">
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-8 order-md-1">
  
        <form class="needs-validation" id="sell-info">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="productName">Calle</label>
              <input type="text" class="form-control" id="productName" value="" name="productName">
              <div class="invalid-feedback">
                Ingresa un nombre
              </div>
            </div>
          </div>
          
              
                </div>
              </div>
            </div>
          </div>
          <div class="container23">
            <div class="text-center p-4">
            </div>
            <div class="row justify-content-md-center">
              <div class="col-md-8 order-md-1">
          
                <form class="needs-validation" id="sell-info">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="productName">Numero</label>
                      <input type="text" class="form-control" id="productName" value="" name="productName">
                      <div class="invalid-feedback">
                        Ingresa un nombre
                      </div>
                    </div>
                  </div>
                  
                      
                        </div>
                      </div>
                    </div>
                  </div>  
                  <div class="container23">
                    <div class="text-center p-4">
                    </div>
                    <div class="row justify-content-md-center">
                      <div class="col-md-8 order-md-1">
                  
                        <form class="needs-validation" id="sell-info">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label for="productName">Esquina</label>
                              <input type="text" class="form-control" id="productName" value="" name="productName">
                              <div class="invalid-feedback">
                                Ingresa un nombre
                              </div>
                            </div>
                          </div>
                          
                              
                                </div>
                              </div>
                            </div>
                          </div>
 </div>`
}






// producto pre cargado sin funcion de multiplicar,
function mostrar1(array) {
   for (let i = 0; i < array.length; i++) {
	const element = array[i];
	  var ProductHTML = ` 
        <h4> Articulos a comprar</h4>
  
        <div class="row">
        <div class="col-md-1" style="margin-left: 92px;">
          <b>Nombre</b>
        </div>
        <div class="col-md-1">
         <b>Costo</b>
        </div>
        <div class="col-md-1">
          <b>Cantidad</b>
        </div>
        <div class="col-md-1">
          <b>Subtotal</b>
        </div>
  
        </div>
        <hr width="600px" style="background-color: black;height: 2px; color: black; opacity: 1;">
        <div class="row">
          <img src="${element.image}" style="width: 90px; height:40px;" id="productImg">
        <div class="col-md-1" style="width: 120px;" id="productName">
        ${element.name}
        </div>
        <div class="col-md-1" id="valorB">
        ${element.unitCost}
        </div>
        <div class="col-md-1">
          <input id="valorA" class="form-control" type="number" value="1" style="width: 60px; height: 40px;">
        </div>
        <div class="col-md-1" id="totalProd">
       
        </div>
      </div>
    `
    

       

        document.getElementById("cordero").innerHTML += ProductHTML;
}};
	
//falta desafiate y pauta 3

 document.addEventListener("DOMContentLoaded", function(){

        getJSONData(CART_INFO_URL+"25801"+ EXT_TYPE).then(function(resultObj){
            if (resultObj.status === "ok"){
                ProductArray = resultObj.data.articles
                mostrar1(ProductArray)
                mostrar2()
                
            }
        })
    })

    