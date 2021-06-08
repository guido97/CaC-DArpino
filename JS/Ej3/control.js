var form = document.querySelector('form'); 
var user = document.getElementById('usuario'); 
var pass = document.getElementById('clave'); 
var submit = document.getElementById('submit'); 
var msj = document.querySelector('p'); 
form.onsubmit = function (e) { 
                    if (user.value.indexOf('@')<0){
                        e.preventDefault(); 
                        msj.textContent = 'El usuario debe tener un @.';
                    } 
                    else if(pass.value === ''){ //si pasó lo anterior, el usuario no está vacio
                        e.preventDefault(); 
                        msj.textContent = 'Ambos campos son requeridos';}
                    else{
                        msj.textContent = 'Logueo exitoso';
                    }
                }