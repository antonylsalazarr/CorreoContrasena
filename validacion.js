function ingresar() {
    let emailDefault = "admin@mail.com"
    let passwordDefault = "12345"


    const correo = document.getElementById("correo").value
    const clave = document.getElementById("clave").value
    const alert = document.getElementById("alert")

    console.log(correo, clave)

    if (correo === "" && clave === "") {
        console.log("Vacío")
        alert.classList.add('alert-warning')
        alert.classList.remove('alert-success')
        alert.classList.remove('alert-danger')
        alert.classList.remove('d-none')
        alert.textContent = "Por favor ingrese los datos"

    } else if (correo === emailDefault && clave === passwordDefault) {

        console.log("Correcto")
        alert.classList.add('alert-success')
        alert.classList.remove('alert-danger')
        alert.classList.remove('alert-warning')
        alert.classList.remove('d-none')
        alert.textContent = "Correo y contraseña correctos"

    } else {
        console.log("Incorrecto")
        alert.classList.add('alert-danger')
        alert.classList.remove('alert-success')
        alert.classList.remove('alert-warning')
        alert.classList.remove('d-none')
        alert.textContent = "Correo o contraseña incorrectos"
    }

}