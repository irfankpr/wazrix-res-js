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

function isMail() {
    var x = document.getElementById("mail").value;
    var len = x.length;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x) || len == 0) {
        document.getElementById("Malrt").innerHTML = "";
    } else {
        document.getElementById("Malrt").innerHTML = "Enter a valid e mail";
    }
}

function isTen() {
    var x = document.getElementById("phn").value;
    var len = x.length;
    if (len == 0) {
        document.getElementById("phalrt").innerHTML = "";
    } else if (len < 10 || len > 10) {
        document.getElementById("phalrt").innerHTML = "Contact number must be 10 digit.";
    } else {
        document.getElementById("phalrt").innerHTML = "";
    }
}

function Sopt1(){
    var len= document.getElementById("opt1").value.length;
    if( len == 0 ){
            document.getElementById("Aopt1").innerHTML= "Language cannot be empty";
    }else{
        document.getElementById("Aopt1").innerHTML= "";
    }

}

function Sopt2(){
    var len= document.getElementById("opt2").value.length;
    if( len == 0 ){
            document.getElementById("Aopt2").innerHTML= "Reason cannot be empty";
    }else{
        document.getElementById("Aopt2").innerHTML= "";
    }

}
function  isInput(){
    var len1= document.getElementById("opt1").value.length;
    var len2= document.getElementById("opt2").value.length;
    var len3= document.getElementById("Name").value.length;
    if( len1 != 0 ){
        document.getElementById("Aopt1").innerHTML= "";
    }
    if( len2 != 0){
        document.getElementById("Aopt2").innerHTML= "";
    }
    if(len3 == 0){
        document.getElementById("Nalrt").innerHTML = "Name cannot be empty"
    }else{
        document.getElementById("Nalrt").innerHTML = ""
    }
}

function reg() {
    document.getElementById("cct").style.backgroundColor = "#f9de38";
    document.getElementById("cct").innerText = "CONTACT US";
    document.getElementById("cct").style.color = "#8a7d2c";
    document.getElementById("chtbx").style.display = "none";
    document.getElementById("cct").value = "OFF";
    document.write("<h1>Thank you, We will contact you soon.</h1>");
    alert("We will connect you soon.");
    window.location.reload("if.html");

}