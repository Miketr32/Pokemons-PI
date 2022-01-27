export default function validator(entrada) {           // Funcion validadora para los inputs del formulario
    let errors = {};
    if(!entrada.name){
        errors.name = "Debes ingresar un nombre";
    }
    else if(entrada.name.length > 50) {
        errors.name = "El nombre no puede exceder los 50 caracteres";
    }
    if(!entrada.image){ // Aca colocar una regExp para filtrar el url de la image
        errors.image = "Debe ser una Url valida"
    }
    if(!entrada.health || entrada.health > 350){
        errors.health = "Debes ingresar un valor y el mismo no puede ser mayor a 350"
    }
    else if(entrada.health < 0){
        errors.health = "No puede ser un valor negativo"
    }
    if(!entrada.attack || entrada.attack > 350){
        errors.attack = "Debes ingresar un valor y el mismo no puede ser mayor a 350"
    }
    else if(entrada.attack < 0){
        errors.attack = "No puede ser un valor negativo"
    }
    if(!entrada.defense || entrada.defense > 350){
        errors.defense = "Debes ingresar un valor y el mismo no puede ser mayor a 350"
    }
    else if(entrada.defense < 0){
        errors.defense = "No puede ser un valor negativo"
    }
    if(!entrada.speed || entrada.speed > 350){
        errors.speed = "Debes ingresar un valor y el mismo no puede ser mayor a 350"
    }
    else if(entrada.speed < 0){
        errors.speed = "No puede ser un valor negativo"
    }
    if(!entrada.height || entrada.speed > 350){
        errors.height = "Debes ingresar un valor y el mismo no puede ser mayor a 350"
    }
    else if(entrada.height < 0){
        errors.height = "No puede ser un valor negativo"
    }
    if(!entrada.weight || entrada.weight > 350){
        errors.weight = "Debes ingresar un valor y el mismo no puede ser mayor a 350"
    }
    else if(entrada.weight < 0){
        errors.weight = "No puede ser un valor negativo"
    }
    return errors;
}

