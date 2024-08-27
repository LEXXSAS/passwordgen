for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

var password = document.getElementById("password");
var password = document.getElementById("buduccPass");
var password = document.getElementById("renclinicPass");
var password = document.getElementById("buduPass");

const lengthSlider = document.querySelector(".pass-length input");
const passIndicator = document.querySelector(".pass-indicator");

const updatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 2 ? "veryweak" : lengthSlider.value <= 4 ? "weak" : lengthSlider.value <= 6 ? "medium" : lengthSlider.value <= 7 ? "strong" : "verystrong";
}


const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    updatePassIndicator();
}
updateSlider();

lengthSlider.addEventListener("input", updateSlider);

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
    var passwordLength = lengthSlider.value;
    var passwordtwobox = '';
    var buduccPassvalue = '';
    var renclinicPassvalue = '';
    var renclinicPassvalue = '';

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        // console.log(randomNumber);
        passwordtwobox += chars.substring(randomNumber, randomNumber +1);
        // console.log(chars[1])
        // console.log(passwordtwobox)
       
    }

    // console.log(password)

    function buduCCpasswordSlice () {
        let buduccPass = passwordtwobox.substring(1, passwordtwobox.length);
        buduccPassvalue = "Yourdomain" + `${buduccPass}`;
        console.log(buduccPassvalue)
    }
    buduCCpasswordSlice()

    function renclinicpasswordSlice () {
        let renclinicPass = passwordtwobox.substring(1, passwordtwobox.length);
        renclinicPassvalue = "Renclinic" + `${renclinicPass}`;
        console.log(renclinicPassvalue)
    }
    renclinicpasswordSlice()

    function budupasswordSlice () {
        let buduPass = passwordtwobox.substring(1, passwordtwobox.length);
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

  function inStrong () {
    let passInd = document.querySelector(".pass-indicator");
    let isStr = document.querySelector(".inStrong");
    let inStrtxt = passInd.id;
    // console.log(inStrtxt);
    isStr.innerText = inStrtxt;
  }
  
  lengthSlider.addEventListener("input", inStrong);


let hoverElement = document.querySelector(".boxone");

let hoverElementtwo = document.getElementById('boxtwo');

hoverElement.addEventListener('mouseenter', function() {
    hoverElementtwo.classList.add('active');
    hoverElement.classList.remove('active');
});
hoverElement.addEventListener('mouseleave', function() {
    hoverElementtwo.classList.remove('active');
    hoverElement.classList.add('active');
});

hoverElementtwo.addEventListener('mouseenter', function() {
    hoverElement.classList.add('active');
    hoverElementtwo.classList.remove('active');
});
hoverElementtwo.addEventListener('mouseleave', function() {
    hoverElement.classList.remove('active');
    hoverElementtwo.classList.add('active');
});
