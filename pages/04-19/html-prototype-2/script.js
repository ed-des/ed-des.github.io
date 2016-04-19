function toggleDesktop() {
    if (document.getElementById("frame").className == "outer-frame") {
        document.getElementById("frame").className = "outer-frame desktop";
    }
    else {
        document.getElementById("frame").className == "outer-frame";
    }
}
function toggleMobile() {
    if (document.getElementById("frame").className == "outer-frame desktop") {
        document.getElementById("frame").className = "outer-frame";
    }
    else {
        document.getElementById("frame").className == "outer-frame desktop";
    }
}