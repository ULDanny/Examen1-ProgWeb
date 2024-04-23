

function calcularTemperatura(){
    const gradosF = document.getElementById("temperatura").value;

    const gradosC = (parseFloat(gradosF)-32)*5/9;
    alert("La temperatura calculada es " + gradosC + "°C" );
    document.getElementById("temperatura").value="";
}