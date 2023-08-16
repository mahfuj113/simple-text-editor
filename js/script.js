document.getElementById("bold-btn").addEventListener('click', function () {
    if (document.getElementById("text-area").style.fontWeight == "bold") {
        document.getElementById("text-area").style.fontWeight = "normal";
    }
    else {
        document.getElementById("text-area").style.fontWeight = "bold";
    }
})
document.getElementById("italic-btn").addEventListener('click', function () {
    if (document.getElementById("text-area").style.fontStyle == "italic") {
        document.getElementById("text-area").style.fontStyle = null;
    }
    else {
        document.getElementById("text-area").style.fontStyle = "italic";
    }
})
document.getElementById("underline-btn").addEventListener('click', function () {
    if (document.getElementById("text-area").style.textDecorationLine == "underline") {
        document.getElementById("text-area").style.textDecorationLine = null;
    }
    else {
        document.getElementById("text-area").style.textDecorationLine = "underline";
    }
})
document.getElementById("align-left-btn").addEventListener('click', function () {
    document.getElementById("text-area").style.textAlign == "left"
    if (document.getElementById("text-area").style.textAlign == "left") {
        document.getElementById("text-area").style.textAlign = null;
    }
    else {
        document.getElementById("text-area").style.textAlign = "left";
    }
})
document.getElementById("align-center-btn").addEventListener('click', function () {
    if (document.getElementById("text-area").style.textAlign == "center") {
        document.getElementById("text-area").style.textAlign = null;
    }
    else {
        document.getElementById("text-area").style.textAlign = "center";
    }
})
document.getElementById("align-right-btn").addEventListener('click', function () {
    document.getElementById("text-area").style.textAlign == "right"
    if (document.getElementById("text-area").style.textAlign == "right") {
        document.getElementById("text-area").style.textAlign = null;
    }
    else {
        document.getElementById("text-area").style.textAlign = "right";
    }
})
document.getElementById("align-justify").addEventListener('click', function () {
    document.getElementById("text-area").style.textAlign == "justify"
    if (document.getElementById("text-area").style.textAlign == "justify") {
        document.getElementById("text-area").style.textAlign = null;
    }
    else {
        document.getElementById("text-area").style.textAlign = "justify";
    }
})
const textArea = document.getElementById("text-area");
function fontChange(e) {
    if (textArea.style.textTransform == "uppercase") {
        textArea.style.textTransform = "lowercase"
    }
    else {
        textArea.style.textTransform = "uppercase"
    }
}
function f1(e) {
    let value = e.value;
    textArea.style.fontSize = value + "px"
}
function f10(e) {
    let value = e.value
    textArea.style.color = value;
}