// IF STATEMENTS wenn dann Bedingung
/*
let age = prompt("Trage dein Alter ein:");

if (age >= 18) {
  //Wird ausgeführt , wenn die Bedingung wahr ist.
  console.log("Eintritt gewährt!");
} else {
  //Wird in jedem anderen Fall ausgeführt.
  console.log("Komme später wieder!");
}
*/



function main() {
  console.log("Funktion wurde aufgerufen!");

  var input = document.getElementById("inputColor");
  var color = input.value;
  //let color = prompt("Trage eine Ampel-Farbe ein!");
  var lowerCaseName = color.toLowerCase();

  // wenn grün -> fahren
  // wenn orange -> anfahren/bremsen
  // wenn rot -> halten
  // Fehlermeldung zurückgeben bei falscher Farbe

  if (lowerCaseName === "grün") {
    alert("Du darfst fahren");
  } else if (lowerCaseName === "orange") {
    alert("Anfahren/Bremsen");
  } else if (lowerCaseName === "rot") {
    alert("Du musst anhalten");
  } else if (lowerCaseName === "gelb") {
    alert("Anfahren/Bremsen");
  } else {
    alert("Keine gültige Ampel-Farbe eingetragen.");
  }
}
