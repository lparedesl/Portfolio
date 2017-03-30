$(document).ready(function() {
	function window_onload() {
	  window.addEventListener("scroll",navbar_reset_top,false);
	}
	window_onload();

	function navbar_reset_top() {
		var aboutPosition = $("#about_section").position();
		var portfolioPosition = $("#portfolio_section").position();
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		if (scrollTop >= (portfolioPosition.top - $(".navbar-1").height())) {
			$(".navbar-1").css({
				"background-color": "#222",
				"border-color": "#080808",
				"background-image": "linear-gradient(to bottom,#3c3c3c 0,#222 100%)",
			});
			$(".navbar-1 .container-fluid").attr("class","container");
		}
		else if (scrollTop < (portfolioPosition.top - $(".navbar-1 a").height())) {
			$(".navbar-1").css({
				"background-color": "rgba(34, 34, 34, 0)",
				"border-color": "rgba(8, 8, 8, 0)",
				"background-image": "none",
			});
			$(".navbar-1 .container").attr("class","container-fluid");
		}

		if (scrollTop < aboutPosition.top) {
			$("#about-tab").css({
				"color": "white",
			});
			$("#portfolio-tab").css({
				"color": "white",
			});
		}
		if (scrollTop >= aboutPosition.top && scrollTop < portfolioPosition.top) {
			$("#about-tab").css({
				"color": "#00cccc",
			});
			$("#portfolio-tab").css({
				"color": "white",
			});
		}
		else if (scrollTop >= portfolioPosition.top) {
			$("#about-tab").css({
				"color": "white",
			});
			$("#portfolio-tab").css({
				"color": "#00cccc",
			});
		}
	}
});