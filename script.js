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
    element.textContent = text;

    element.addEventListener("click", function() {
        element.remove();
    })

    lista.appendChild(element);

    valoareInput.value = "";
}

trimiteButton.addEventListener("click", adaugareElement);



