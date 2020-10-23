toggle.onclick = function f() {
    let x = document.getElementById("sidebar");
    console.log(x.className)

    if (x.className === "sidebar") {
        x.className += " active";
    } else {
        x.className = "sidebar";
    }
}
