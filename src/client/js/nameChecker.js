/*function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }*/

function checkForName(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;
    console.log("2")
  }
  console.log("good url")
  return true;
}

/*export { checkForName }*/

/*function checkForName(string) {
    console.log("Did I run?")
}*/

checkForName();

export { checkForName }
