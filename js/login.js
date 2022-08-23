//cree 3 variables con el document y su respectivo id //
const button = document.querySelector("#boton_inicio")
let Email=document.getElementById('ObEmail')
let password= document.getElementById('Obcontrase')


//creee una funcion login para cambiar de pagina 
function login(){
    localStorage.setItem('sesion', true);
    alert('sesion iniciada')
    window.location.href = window.location.origin
}

//chequear el valor de los elementos
function validation(){
    if(Email.value !="" && password.value !=""){
        login()
    }
}
button.addEventListener('click' ,validation)

