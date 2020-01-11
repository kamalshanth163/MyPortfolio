$(document).ready(function () {
  
  // page section scrolling
  $(".menu-link").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top - 100)
    }, 800);
  });

  // menu responsive toggle-button
  $('.menu-icon').on("click", function () {
    $("header ul").toggleClass('showing');
  })

  $('header ul li').on("click", function () {
    $("header ul").toggleClass('showing');
  })

  // active navigation link
  $('header ul li a').click(function () {
    $('header ul li a').removeClass("active");
    $(this).addClass("active");
  });  


});

