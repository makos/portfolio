$(document).ready(function() {
  // Highlight chosen item in navbar
  $("ul.nav").children("li").click(function() {
    $("li.active").removeClass("active");
    $(this).addClass("active");
  });
  
  // Following function highlights the correct item in top navbar if one of the bottom links was used
  $("footer").children("a").click(function() {
    var navChildrenA = $("ul.nav").find("a");
    var navChildrenLi = $("ul.nav").children("li");
    
    for (var i = 0; i < navChildrenA.length; i++) {
      if (this.text == navChildrenA[i].text) {
        $("li.active").removeClass("active");
        $(navChildrenLi[i]).addClass("active");
      }
    }
  });
});