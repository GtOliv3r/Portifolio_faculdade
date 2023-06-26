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
    strings:["Tecnólogo em Análise e Desenvolvimento de Sistemas","Bem vindo ao meu portfólio","Alterne entre as páginas para visualizar o conteúdo"],
    typeSpeed: 50,
    backSpeed: 15,
    loop: true
})