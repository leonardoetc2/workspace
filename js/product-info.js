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
        document.getElementById("P-info2").innerHTML = mucho_textp;
    }

/* function imag_relacionados(array){
    let mucho_textp = "";
    mucho_textp += `
    <img src="${array.relatedProducts[0].image}" alt="" class="rounded">
            `
        document.getElementById("P-info3").innerHTML = mucho_textp;
    } */
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