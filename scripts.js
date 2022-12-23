// referenced https://www.w3schools.com/howto/howto_css_modals.asp

var modals = ["cheerpeer", "biorobotics", "cardistry", "elm", "dailyDino"]

// allow modal to appear/disappear
for (let i = 0; i < modals.length; i++) {
    let modal = document.getElementById(modals[i] + "-modal");
    let btn = document.getElementById(modals[i] + "-button");
    let span = document.getElementsByClassName(modals[i] + "-close")[0];

    // open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // close the modal on x click
    span.onclick = function () {
        modal.style.display = "none";
    }
}

// close all modals on outside click
window.onclick = function (event) {
    for (let i = 0; i < modals.length; i++) {
        let modal = document.getElementById(modals[i] + "-modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// check that screen isn't too small
// https://stackoverflow.com/questions/48719745/displaying-an-alert-for-all-mobile-devices
window.onload = function () {
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        alert("Visit this website on a computer for a better view!");
    }

}
