
var whitetxt = document.getElementsByClassName("menutxt");
var blacktxt = document.getElementsByClassName("menublack");


$('#menu').click(function() {
    
    $('#barraside').toggleClass('showcontsidebar');
    $('#barraside').toggleClass('hidecontsidebar');
    $('#menu').toggleClass('menublack');
    $('#menu').toggleClass('menutxt');
    $('#nvbar').toggleClass('supbarnav');
    $('#nvbar').toggleClass('supbarnavfixed');
    $('#logomenu').toggleClass('menulogo');
    $('#logomenu').toggleClass('menulogohidden');
    if (document.getElementById("menu").innerHTML === 'Menu'){
        document.getElementById("menu").innerHTML = "Cerrar";
        
    } else {
        document.getElementById("menu").innerHTML = "Menu"
    }


});






