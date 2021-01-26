
AOS.init();

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 2000);
});



document.getElementById("phone").onmouseover = function() {mouseOver()};
document.getElementById("phone").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.querySelector(".fa-hover").classList.add("fa-spin");
}

function mouseOut() {
    document.querySelector(".fa-hover").classList.remove("fa-spin");
}


//Nav
function collapsNav() {
    document.querySelector("navbarAddShow").classList.add("show");
}


//Gallery

document.getElementById('img1').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0101.jpg" alt="Ultra Flake" />';
} )
document.getElementById('img2').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0102.jpg" alt="Gun Metal" />';
} )
document.getElementById('img3').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0103.jpg" alt="Hyper Flake" />';
} )
document.getElementById('img4').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0104.jpg" alt="Hyper Flake" />';
} )
document.getElementById('img5').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0105.jpg" alt="Granite Small" />';
} )
document.getElementById('img6').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0106.jpg" alt="Ice White" />';
} )
//
document.getElementById('img7').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0107.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img8').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0108.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img9').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0109.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img10').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0201.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img11').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0202.jpg" alt="Plain Coat System" />';
} )
document.getElementById('img12').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0203.jpg" alt="Plain Coat System" />';
} )
document.getElementById('img13').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0204.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img14').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0205.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img15').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0206.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img16').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0207.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img17').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0208.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img18').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0209.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img19').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0301.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img20').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0302.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img21').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0303.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img22').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0304.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img23').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="../images/0305.jpg" alt="Suede Merino Base" />';
} )

//contact form validator
let frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("tel","maxlen=50");
frmvalidator.addValidation("tel","numeric");
frmvalidator.addValidation("email","email",
    "Please enter a valid email address");
