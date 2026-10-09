let body = document.getElementById("body")
let darkmode = document.getElementById("darkmode")
let loadingsc = document.getElementById("loadingsc")

darkmode.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme")
})

darkmode.addEventListener("click", function() {
    if (document.body.classList.contains("dark-theme")) {
        darkmode.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        darkmode.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
})

setTimeout (function() {
    loadingsc.classList.add("hided")
}, 500)





let cer = document.getElementById("cer")
let cer2 = document.getElementById("cer2")
let cer3 = document.getElementById("cer3")

let vi = document.getElementById("vi")
let vi2 = document.getElementById("vi2")
let vi3 = document.getElementById("vi3")

let cl = document.getElementById("cl")
let clo = document.getElementById("clo")
let cl2 = document.getElementById("cl2")
let clo2 = document.getElementById("clo2")
let cl3 = document.getElementById("cl3")
let clo3 = document.getElementById("clo3")


vi.addEventListener("click", function(){
    cer.classList.remove("wid")
})

clo.addEventListener("click", function(){
    cer.classList.add("wid")
})
cl.addEventListener("click", function(){
    cer.classList.add("wid")
})



vi2.addEventListener("click", function(){
    cer2.classList.remove("wid")
})

clo2.addEventListener("click", function(){
    cer2.classList.add("wid")
})
cl2.addEventListener("click", function(){
    cer2.classList.add("wid")
})



vi3.addEventListener("click", function(){
    cer3.classList.remove("wid")
})

clo3.addEventListener("click", function(){
    cer3.classList.add("wid")
})
cl3.addEventListener("click", function(){
    cer3.classList.add("wid")
})


