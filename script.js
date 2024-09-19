let osaX 
let osaY 

if (window.matchMedia("(min-width: 1200px)").matches) {
    // Tento kód se spustí, pokud šířka obrazovky je alespoň 768px
    window.addEventListener("mousemove", function(event){
        osaX = event.clientX/100
        osaY = event.clientY/150
        console.log(osaX, osaY)
        img.style.rotate = `${osaY}deg`
        img.style.transform = `rotateY(-${osaX}deg)`
    })
}

let img = document.getElementById("how")

