function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $(document).ready(function () {

    $(".no").hover(function () {
      var v = getRandomInt(1, $(window).height() - 100);
      var h = getRandomInt(1, $(window).width() - 100);
      $(this).css({ top: v + "px", left: h + "px" });
    });

    $(".si").click(function () {
        alert("Sabia que dirias que si");
    });

    
  });