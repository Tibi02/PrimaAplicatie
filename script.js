const valoareInput = document.getElementById("valoare");
const trimiteButton = document.getElementById("trimite");
const lista = document.getElementById("lista");

function adaugareElement(){
    const text = valoareInput.value;

    if(text === ""){
        alert("Te rog sa introduci ceva");
        return;
    }

    const element = document.createElement("li");

    const paragraf = document.createElement("p");
    paragraf.textContent = text;

    const stergeButon = document.createElement("button");
    stergeButon.textContent = "Sterge-ma";

    stergeButon.addEventListener("click", function() {
        element.remove();
    })

    element.appendChild(paragraf);
    element.appendChild(stergeButon);
    
    lista.appendChild(element);

    valoareInput.value = "";
}

trimiteButton.addEventListener("click", adaugareElement);



