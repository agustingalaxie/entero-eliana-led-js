function countChars(obj){
    var largoMax = 500;
    var largoActual = obj.value.length;
    var charRestantes = (largoMax - largoActual);
    
    if(charRestantes < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">Se excedió los '+largoMax+'caracteres</span>';
    }else{
        document.getElementById("charNum").innerHTML = largoActual+'/500  caracteres';
    }
}

function checkearEdad() {
    var fechaNacimiento = document.getElementById('fechanacimiento').value;
    if (fechaNacimiento.length == 0 || /^\s+$/.test(fechaNacimiento)) {
        alert ('Debe ingresar su fecha de nacimiento.')
          return false;
        }
    var fechaNace = new Date(fechaNacimiento);
    var fechaActual = new Date();
    console.log(fechaNacimiento);
    var edad = fechaActual.getFullYear() - fechaNace.getFullYear();
    var mes = fechaActual.getMonth() - fechaNace.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaActual.getDate())) {
        edad--;
    }   
    if(edad < 18){
        alert ('Debe ser mayor de edad para realizar esta acción.')
        return false
    }
    return true;
  }
