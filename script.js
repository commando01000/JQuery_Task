var sidebarWidth = $("#offcanvas").width();
var sidebarButtonWidth = $(".sidebar-toggler").outerWidth();
console.log(sidebarWidth);
console.log(sidebarButtonWidth);

var isSidebarOpen = false;

$(".sidebar-toggler").click(function (e) {
  if (isSidebarOpen) {
    $(".sidebar-toggler").animate(
      {
        left: -sidebarWidth - 5 + sidebarButtonWidth * 2,
      },
      400
    );
  } else {
    $(".sidebar-toggler").animate(
      {
        left: sidebarWidth,
      },
      400
    );
  }
  isSidebarOpen = !isSidebarOpen;
});

$(".btn-close").click(function (e) {
  $(".sidebar-toggler").animate(
    {
      left: -sidebarWidth - 5 + sidebarButtonWidth * 2,
    },
    400
  );
  isSidebarOpen = !isSidebarOpen;
});

$(".toggle").click(function (e) {
  // $(".inner").hide();
  // $(this).next(".inner").css({
  //   display: "block",
  // });

  // $(".inner").slideUp();
  // $(this).next(".inner").slideDown();

  var $inner = $(this).next(".inner");
  if ($inner.is(":visible")) {
    $inner.slideUp();
  } else {
    $(".inner").slideUp();
    $inner.slideDown();
  }
});

$(".nav-link").click(function (e) {
  let sectionName = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(sectionName).offset().top,
  },500);
});
