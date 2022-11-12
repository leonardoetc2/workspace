//  funcion de validacion de boostrap , simple

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
/* email debe estar pre cargado y es el que usamos para hacer el login */
 document.getElementById("localEmali").innerHTML=`<label for="validationCustomUsername" class="form-label">email</label>
 <div class="input-group has-validation">
   <span class="input-group-text" id="">@</span>
   <input type="email" class="form-control" id="" value="${localStorage.getItem('usuario')}" aria-describedby="inputGroupPrepend" required>
   <div class="invalid-feedback">
     Por favor, elije un nombre de usuario.
   </div>
 </div>`

//nuevo objeto (nombre random) creo un objeto y lo mando al local luego
 var lasla= new Object();
 function valor(){ 
  lasla.PNombre= document.getElementById("nombre").value;
 lasla.sNombre= document.getElementById("sNombre").value ;
 lasla.Apellido= document.getElementById("Apellido").value;
 lasla.SApellido= document.getElementById("SApellido").value;
 lasla.phono= document.getElementById("phono").value;
 
 localStorage.setItem('data',JSON.stringify(lasla))
 

 }
 // vuelvo a crear un objeto con los datos alojados del local y los imprimo 
 let x =JSON.parse( localStorage.getItem('data'))
  document.getElementById("nombre").value=x.PNombre
  document.getElementById("sNombre").value=x.sNombre
  document.getElementById("Apellido").value=x.Apellido
  document.getElementById("SApellido").value =x.SApellido
  document.getElementById("phono").value=x.phono 
  
  console.log(x);

