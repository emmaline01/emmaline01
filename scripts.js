// referenced https://www.w3schools.com/howto/howto_css_modals.asp

var modals = ["cheerpeer", "biorobotics", "cardistry", "elm", "ukulelebot"]

// allow modal to appear/disappear
for (let i = 0; i < modals.length; i++) {
    let modal = document.getElementById(modals[i] + "-modal");
    let btn = document.getElementById(modals[i] + "-button");
    let span = document.getElementsByClassName(modals[i] + "-close")[0];

    // open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // close the modal on x click
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// close all modals on outside click
window.onclick = function(event) {
    for (let i = 0; i < modals.length; i++) {
        let modal = document.getElementById(modals[i] + "-modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}