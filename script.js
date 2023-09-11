var Cel = document.getElementById("Cel");
var Fah = document.getElementById("Fah");
var Kel = document.getElementById("Kel");

Cel.oninput = function () {
    let f = (parseFloat(Cel.value) * 9) / 5 + 32;
    Fah.value = parseFloat(f.toFixed(4));


    let k = (parseFloat(Cel.value) + 273.15);
    Kel.value = parseFloat(k.toFixed(4));
}
Fah.oninput = function () {
    let c = ((parseFloat(Fah.value) - 32) * 5) / 9;
    Cel.value = parseFloat(c.toFixed(4));

    let k = (parseFloat(Fah.value) - 32) * 5 / 9 + 273.15;
    Kel.value = parseFloat(k.toFixed(4));
}
Kel.oninput = function () {
    let f = (parseFloat(Kel.value) - 273.15) * 9 / 5 + 32;
    Fah.value = parseFloat(f.toFixed(4));

    let c = (parseFloat(Kel.value) - 273.15);
    Cel.value = parseFloat(c.toFixed(4));
}