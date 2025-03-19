// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
let nombre = document.getElementById("amigo");
let amigo= nombre.value; 
if(!amigo )
    {alert("Por favor escriba un nombre");
        return
    }
    amigos.push(amigo)
    nombre.value = ""
    nombre.focus()
    renderizarAmigos()
}

function renderizarAmigos() {
let listaAmigos= document.getElementById("listaAmigos")
listaAmigos.innerHTML = ""

for(let i= 0; i < amigos.length; i++)
{
    let item= document.createElement("li")
    item.textContent = amigos[i]
    listaAmigos.appendChild(item)

}


}

function sortearAmigo() {

if(amigos.length == 0)
{ alert("No hay amigos para sortear")
    return
}
let amigoSorteado= amigos[Math.floor(Math.random()* amigos.length)] // El elemento de la lista de amigos.
let resultado= document.getElementById("resultado")
resultado.innerHTML= `El amigo sorteado es: ${amigoSorteado}`

let limpiarlista= document.getElementById("listaAmigos")
limpiarlista.innerHTML = ""

}

