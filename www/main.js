$(document).ready(main);

var contador = 1;

function main () {
	var openMenu = function(){
		//alert("Alerta");
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	};

	$('.menu_bar').click(openMenu);

	// Mostramos y ocultamos submenus

	var subMenu = function(){
		$(this).children('.children').slideToggle();
	};

	$('.submenu').each(function() {
		$(this).click(subMenu);
	});
}