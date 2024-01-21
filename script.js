var sidebarWidth = $("#offcanvas").offset().left;
var sidebarButtonWidth = $(".sidebar-toggler").outerWidth();
console.log(sidebarWidth);
console.log(sidebarButtonWidth);

var isSidebarOpen = false;

$(".sidebar-toggler").click(function (e) {
  if (isSidebarOpen) {
    $(".sidebar-toggler").animate(
      {
        left: sidebarWidth - 10 + sidebarButtonWidth * 2,
      },
      400
    );
  } else {
    $(".sidebar-toggler").animate(
      {
        left: -sidebarWidth,
      },
      400
    );
  }
  isSidebarOpen = !isSidebarOpen;
});

$(".btn-close").click(function (e) {
  $(".sidebar-toggler").animate(
    {
      left: sidebarWidth - 10 + sidebarButtonWidth * 2,
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
  sectionTop = $(sectionName).offset().top;
  $("html, body").animate(
    {
      scrollTop: sectionTop,
    },
    100
  );
});

// Create a new date for the event
var eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 360);
eventDate.setHours(eventDate.getHours() + 22);
eventDate.setMinutes(eventDate.getMinutes() + 40);
eventDate.setSeconds(eventDate.getSeconds() + 30);

// Update the countdown every second
let x = setInterval(function () {
  var currentDate = new Date();
  var timeDifference = eventDate.getTime() - currentDate.getTime(); // difference in milliseconds

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the countdown display
  $(".days .number").text(days + "D");
  $(".hours .number").text(hours + "H");
  $(".minutes .number").text(minutes + "M");
  $(".seconds .number").text(seconds + "S");

  // If the countdown is over, stop the interval
  if (timeDifference < 0) {
    clearInterval(x);
    // Display a message or take action when the countdown is over
  }
}, 1000);

$("#typing").keyup(function (e) {
  var count = $(this).val().length;
  console.log(count);
  $("#chars").text(100 - count);
});
