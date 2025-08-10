document.querySelectorAll(".ramo").forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.classList.contains("bloqueado")) return;

        boton.classList.toggle("aprobado");

        if (boton.classList.contains("aprobado")) {
            let desbloquear = boton.getAttribute("data-desbloquea");
            if (desbloquear) {
                desbloquear.split(",").forEach(id => {
                    document.getElementById(id).classList.remove("bloqueado");
                });
            }
        }
    });
});
