
function validarUsuario(){
    var usuario="neyli"
    var contraseña="examen"

    if(document.formulario.usuario.value==usuario
        && document.formulario.contraseña.value==contraseña)
        {
            document.location="principal.html"
        }
        else
        {
            alert("Ingrese usuario y contraseña correctamente")
        }
}