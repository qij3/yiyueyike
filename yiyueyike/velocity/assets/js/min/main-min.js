$(document).ready(function(){function e(e){$(e.target).prev(".panel-heading").find(".panel-title a").toggleClass("active").find("i.fa").toggleClass("fa-plus-square fa-minus-square")}$('[data-hover="dropdown"]').dropdownHover(),$(window).bind("scroll",function(){$(window).scrollTop()>200?$("#header").addClass("navbar-fixed-top"):$("#header").removeClass("navbar-fixed-top")}),$("input, textarea").placeholder(),$(".video-container").fitVids(),$(".panel").on("hidden.bs.collapse",e),$(".panel").on("shown.bs.collapse",e),$(".bg-slider").flexslider({animation:"fade",directionNav:!1,controlNav:!1,slideshowSpeed:8e3}),$(".modal-backdrop, #modal-video .close").on("click",function(){$("#modal-video iframe").attr("src",$("#modal-video iframe").attr("src"))}),$("#testimonials-carousel").carousel({interval:8e3}),$("#config-trigger").on("click",function(e){var a=$("#config-panel"),o=$("#config-panel").is(":visible");o?a.hide():a.show(),e.preventDefault()}),$("#config-close").on("click",function(e){e.preventDefault(),$("#config-panel").hide()}),$("#color-options a").on("click",function(e){var a=$(this).attr("data-style");$("#theme-style").attr("href",a);var o=$(this).closest("li");o.addClass("active"),o.siblings().removeClass("active"),e.preventDefault()})});