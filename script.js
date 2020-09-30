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



//Gallery

document.getElementById('img1').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/Ultra_Flake_2.jpeg" alt="Ultra Flake" />';
} )
document.getElementById('img2').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/Gun_Metal.JPG" alt="Gun Metal" />';
} )
document.getElementById('img3').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/Hyper_Flake.jpeg" alt="Hyper Flake" />';
} )
document.getElementById('img4').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/Hyper_Flake.4.jpg" alt="Hyper Flake" />';
} )
document.getElementById('img5').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/Granite_Small.jpg" alt="Granite Small" />';
} )
document.getElementById('img6').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/Ice_White_2.jpg" alt="Ice White" />';
} )
//
document.getElementById('img7').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0104.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img8').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0102.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img9').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/Suede_Merino_Base.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img10').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0101.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img11').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/Plain_Coat_System.jpg" alt="Plain Coat System" />';
} )
document.getElementById('img12').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0108.jpg" alt="Plain Coat System" />';
} )
document.getElementById('img13').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0107.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img14').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0106.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img15').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0201.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img16').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0202.jpg" alt="Suede Merino Base" />';
} )
document.getElementById('img17').addEventListener('click', ()=> {
    document.getElementById("big_image").innerHTML = '<img src="images/0203.jpg" alt="Suede Merino Base" />';
} )

