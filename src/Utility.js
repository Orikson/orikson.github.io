var optionsList = document.getElementById("optionsList");
var options = document.getElementById("options");
var objX = document.getElementById("x");

console.log(objX.classList);

function toggleX() {
    objX.classList.toggle("change");
    options.classList.toggle("change");
}
