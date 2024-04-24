var setadir = window.document.getElementById("setadir")
var setaesquerda = window.document.getElementById("setaesquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDir() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setadir.style ="display:none"
    setaesquerda.style ="display:flex"
}

function RolarParaEsq() {
    Bruna.style ="display:none"
    Leonardo.style ="display:flex"
    setaesquerda.style ="display:none"
    setadir.style = "display:flex"
}