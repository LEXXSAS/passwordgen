var password = document.getElementById("password");
var password = document.getElementById("buduccPass");
var password = document.getElementById("renclinicPass");
var password = document.getElementById("buduPass");

function genPassword() {
    var chars = 
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = '';

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        // console.log(randomNumber);
        password += chars.substring(randomNumber, randomNumber +1);
        // console.log(chars[1])
       
    }

    // console.log(password)


    document.getElementById('password').value = password;
}


function genPasswordtwo() {
    var chars = 
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var passwordtwobox = '';
    var buduccPassvalue = '';
    var renclinicPassvalue = '';
    var renclinicPassvalue = '';

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        // console.log(randomNumber);
        passwordtwobox += chars.substring(randomNumber, randomNumber +1);
        // console.log(chars[1])
       
    }

    // console.log(password)

    function buduCCpasswordSlice () {
        let buduccPass = passwordtwobox.substring(8, passwordtwobox.length);
        buduccPassvalue = "Buducc" + `${buduccPass}`;
        console.log(buduccPassvalue)
    }
    buduCCpasswordSlice()

    function renclinicpasswordSlice () {
        let renclinicPass = passwordtwobox.substring(8, passwordtwobox.length);
        renclinicPassvalue = "Renclinic" + `${renclinicPass}`;
        console.log(renclinicPassvalue)
    }
    renclinicpasswordSlice()

    function budupasswordSlice () {
        let buduPass = passwordtwobox.substring(8, passwordtwobox.length);
        buduPassvalue = "Budu" + `${buduPass}`;
        console.log(buduPassvalue)
    }
    budupasswordSlice()

    document.getElementById('buduccPass').value = buduccPassvalue;
    document.getElementById('renclinicPass').value = renclinicPassvalue;
    document.getElementById('buduPass').value = buduPassvalue;
}

function copyPassword() {
    var copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
 
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Скопировано: " + copyText.value;
  }
  
function copyPasswordcc() {
    var copyText = document.getElementById('buduccPass');
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
 
        var tooltipcc = document.getElementById("myTooltipcc");
        tooltipcc.innerHTML = "Скопировано: " + copyText.value;
  }
function copyPasswordrc() {
    var copyText = document.getElementById('renclinicPass');
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
 
        var tooltiprc = document.getElementById("myTooltiprc");
        tooltiprc.innerHTML = "Скопировано: " + copyText.value;
  }
function copyPasswordbudu() {
    var copyText = document.getElementById('buduPass');
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
 
        var tooltipbudu = document.getElementById("myTooltipbudu");
        tooltipbudu.innerHTML = "Скопировано: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    var tooltipcc = document.getElementById("myTooltipcc");
    var tooltiprc = document.getElementById("myTooltiprc");
    var tooltipbudu = document.getElementById("myTooltipbudu");
    tooltip.innerHTML = "Скопировать в буфер";
    tooltipcc.innerHTML = "Скопировать в буфер";
    tooltiprc.innerHTML = "Скопировать в буфер";
    tooltipbudu.innerHTML = "Скопировать в буфер";
  }

  function copybuduccPass() {
    var copyText = document.getElementById('buduccPass');
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
 
        // var tooltip = document.getElementById("myTooltip");
        // tooltip.innerHTML = "Скопировано: " + copyText.value;
  }
