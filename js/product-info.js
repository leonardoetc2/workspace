let ProductA1 = [];
let idinfo = localStorage.getItem('catID2');


function inicio(array){

    let mucho_textp = "";
    mucho_textp += `
    <Div style="margin:1.3em;">
    <h1>${array.name}</h1>
  </Div>
  <hr>
  <div>
    <B>Precio</B>
    <p>${array.currency} ${array.cost}</p>
    <B>Descripción</B>
    <P>${array.description}</P>
    <B>Categoria</B>
    <p>${array.category}</p>
    <b>Cantidad Vendidos</b>
    <p>${array.soldCount}</p>
    <b>imagen ilustrativa</b>
    <div>
      <img src="${array.images[0]}" alt="" class="img-thumbnail" style="height: 10em;"><img src="${array.images[1]}" alt="" class="img-thumbnail" style="height: 10em;"><img src="${array.images[2]}" alt="" class="img-thumbnail" style="height: 10em;"><img src="${array.images[3]}" alt="" class="img-thumbnail" style="height: 10em;">
    </div>
  </div>
  <hr>
            `


        document.getElementById("P-info").innerHTML = mucho_textp;
    }

function productosyeso(array){

    let mucho_textp = "";
    mucho_textp += `
    
            <div class="col-6" onclick="idd(${array.relatedProducts[0].id})">
            <h3>${array.relatedProducts[0].name}</h3><br>
            <img src="${array.relatedProducts[0].image}" alt=""style="height: 10em;">
        </div>
        <div class="col-6" onclick="idd(${array.relatedProducts[1].id})">
            <h3>${array.relatedProducts[1].name}</h3><br>
            <img src="${array.relatedProducts[1].image}" alt=""style="height: 10em;">
        </div>
        
            `
        document.getElementById("P-info4").innerHTML = mucho_textp;
    }

        /* empieza el coso de productos la data */
    document.addEventListener("DOMContentLoaded", function(){

        getJSONData(PRODUCT_INFO_URL+ idinfo + EXT_TYPE).then(function(resultObj){
            if (resultObj.status === "ok"){
                ProductArray = resultObj.data
                inicio(ProductArray);
                productosyeso(ProductArray);
                
            }
        });
        });
        getJSONData(PRODUCT_INFO_COMMENTS_URL+ idinfo + EXT_TYPE).then(function(resultObj){
            if (resultObj.status === "ok"){
                cuack = resultObj.data
                
                showProductComments(cuack)
                addcoment()
                console.log(cuack)
            }
        });
    
        function showProductComments(comments){
             if(comments.length === 0){
                document.getElementById("P-info2").innerHTML = '<p class="text-muter> Oops! No hay comentarios para mostrar...</p>';
            }else{ 
                 let estrella_podrida = '<i class="fas fa-star"></i>'.repeat(5);
                  for (let i = 0; i < comments.length; i++) { 
                    if(comments[1].score > 0 && comments[i].score <= 5) {
                        estrella_podrida = '<i class="fa fa-star"></i>'.repeat(comments[i].score);
                        estrella_podrida += '<i class=-fas fa-star checked"></i>'.repeat(5 - comments[i].score); 
                        }

                          document.getElementById("P-info2").innerHTML += `<li class="media border list-group-item"> 
                          <div class="media-body">
                              <label class="mt-0"><strong>${comments[i].user}</strong>
                                  <span class="mute"> - ${comments[i].dateTime}</span>
                                  <span> - ${estrella_podrida}</span>
                              </label>
                              <br>
                              <label class="small">${comments[i].description}</label>
                          </div>
                          </li>
                          `


            
                        };
                    }; 
                };
               
                function addcoment(){
                    let parrfo =document.getElementById("P-info3")
                    parrfo.innerHTML=`
                    <h1 class="my-3">Agregar Comentario</h1>
                        <hr class="my-4">
                        <div class="row mt-4 g-3">
                            <div class="col-sm-4">
                            <label for="Item" class="form-label">
                                start:
                                <select name="estrellas" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> 
                            </label>
                            <input type="text" class="form-control" id="item">
                            <div class="d-grid">
                                <button type="button" class="btn btn-primary my-3" id="agregar">Agregar</button>
                            </div>
                            </div>
                         </div>
                         `

                }

         