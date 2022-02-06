export default function validator(entrada) {           // Funcion validadora para los inputs del formulario 
    let errors = {};
    const validation = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|svg)/gi;
    if(!entrada.name){
        errors.name = "Debes ingresar un nombre";
    }
    if(entrada.name.length > 50) {
        errors.name = "El nombre no puede exceder los 50 caracteres";
    }
    if(entrada.health < 0 || entrada.health > 350){
        errors.health = "El valor no puede ser menor a 0 ni mayor a 350 "
    }

    if(entrada.attack < 0 || entrada.attack > 350){
        errors.attack = "El valor no puede ser menor a 0 ni mayor a 350 "
    }

    if(entrada.defense < 0 || entrada.defense > 350){
        errors.defense = "El valor no puede ser menor a 0 ni mayor a 350 "
    }

    if(entrada.speed < 0 || entrada.speed > 350){
        errors.speed = "El valor no puede ser menor a 0 ni mayor a 350 "
    }

    if(entrada.height < 0 || entrada.speed > 350){
        errors.height = "El valor no puede ser menor a 0 ni mayor a 350 "
    }

    if(entrada.weight < 0 || entrada.weight > 350){
        errors.weight = "El valor no puede ser menor a 0 ni mayor a 350 "
    }

    if(entrada.image && !validation.test(entrada.image)) {
        errors.image = 'Debes ingresar una URL valida'
    }
    return errors;
}

