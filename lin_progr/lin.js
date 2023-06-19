function toggle(el){
    var display = document.getElementById(el).style.display;
    if (display === "" || display === "none"){
        document.getElementById(el).style.display = 'block';
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
}


window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('scrolling', window.scrollY > 5);
});

var typed = new Typed(".auto-escrita",{
    strings:["Linguagem de programação","HTML - HyperText Markup Language","CSS - Cascading Style Sheet","JS - JavaScript"],
    typeSpeed: 45,
    backSpeed: 15,
    loop: true
})