function chaton() {
    if (document.getElementById("cct").value == "OFF") {
        document.getElementById("cct").style.backgroundColor = "#ff1c1c";
        document.getElementById("cct").innerText = "CLOSE  X";
        document.getElementById("cct").style.color = "white";
        document.getElementById("chtbx").style.display = "block"
        document.getElementById("cct").value = "ON";

    }

    else if (document.getElementById("cct").value == "ON") {
        document.getElementById("cct").style.backgroundColor = "#f9de38";
        document.getElementById("cct").innerText = "CONTACT US";
        document.getElementById("cct").style.color = "#8a7d2c";
        document.getElementById("chtbx").style.display = "none";
        document.getElementById("cct").value = "OFF";
    }
}

function isn() {
    var ph = document.getElementById("phn").value;
    var z = isNaN(ph)
    if (z == 1) {
        document.getElementById("phalrt").innerHTML = "Contact must be numeric !";
    } else {
        document.getElementById("phalrt").innerHTML = "";
    }
}

function isname() {
    var x = document.getElementById("Name").value;
    var z = 0;
    z = /\d/.test(x);
    if (z == 0) {
        document.getElementById("Nalrt").innerHTML = ""
    } else {
        document.getElementById("Nalrt").innerHTML = "Name cannot contain number !"

    }
}

function reg() {


    document.getElementById("cct").style.backgroundColor = "#f9de38";
    document.getElementById("cct").innerText = "CONTACT US";
    document.getElementById("cct").style.color = "#8a7d2c";
    document.getElementById("chtbx").style.display = "none";
    document.getElementById("cct").value = "OFF";
    document.write("<h1>Thank you, We will contact you soon.</h1>");
    alert("We will connect you soon.")
    window.location.reload("index.html");
    
}