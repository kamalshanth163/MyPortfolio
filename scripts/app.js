$(document).ready(function () {

  // light/dark theme toggle with persistence
  var themeToggle = $('#themeToggle');
  var themeIcon = themeToggle.find('i');
  var themeMeta = $('meta[name="theme-color"]');
  var heroMesh = $('.hero-illustration');

  function setTheme(theme) {
    var isDark = theme === 'dark';
    $('body').toggleClass('theme-dark', isDark);
    localStorage.setItem('portfolio-theme', theme);
    themeIcon.toggleClass('fa-moon', !isDark);
    themeIcon.toggleClass('fa-sun', isDark);
    themeToggle.attr('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    if (themeMeta.length) {
      themeMeta.attr('content', isDark ? '#0b1220' : '#0f172a');
    }
    if (heroMesh.length) {
      heroMesh.attr('src', isDark ? './images/tech-mesh-dark.svg' : './images/tech-mesh.svg');
    }
  }

  var savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    setTheme(savedTheme);
  } else {
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggle.on('click', function () {
    setTheme($('body').hasClass('theme-dark') ? 'light' : 'dark');
  });
  
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

