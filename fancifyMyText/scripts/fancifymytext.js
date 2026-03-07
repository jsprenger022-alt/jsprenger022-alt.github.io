//const btn = document.querySelector("button");

function makeBig() {
  // alert("Hello World");
  if (
    //a check to see if there was any text in text area
    //not required by assignment but it was bothering me soo...
    document.getElementById("firstTextArea").value != "" ||
    !document.getElementById("firstTextArea")
  ) {
    document.getElementById("firstTextArea").style.fontSize = "4em";
  } else {
    alert("no text detected");
  }
}
function makeBold() {
  alert("Text is now FANCY");
  document.getElementById("firstTextArea").style.fontWeight = "bold";
  document.getElementById("firstTextArea").style.color = "#0984e3";
  document.getElementById("firstTextArea").style.textDecoration = "underline";
}
function makeNorm() {
  alert("Text is now normal");
  document.getElementById("firstTextArea").style.fontWeight = "normal";
  document.getElementById("firstTextArea").style.color = "#000000";
  document.getElementById("firstTextArea").style.textDecoration = "none";
}

function makeUpper() {
  alert("Text is now uppercase and a cow");
  var str = document.getElementById("firstTextArea").value;
  str = str.toUpperCase();
  var parts = str.split(".");
  str = parts.join("-Moo.");
  document.getElementById("firstTextArea").value = str;
}
