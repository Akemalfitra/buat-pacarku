
function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
    window.location.href = './status.html';
}

function timeoutData() {
    setTimeout(function(){
        window.location.href = "https://api.whatsapp.com/send/?phone=6282163789541&text=sayang+apa+ngga+?&type=phone_number&app_absent=0";
    },82000)
}

